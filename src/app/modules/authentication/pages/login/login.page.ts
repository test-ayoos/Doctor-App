import { LocalStorageService } from './../../../../core/services/local-storage.service';
import { DoctorService } from './../../../../core/services/doctor.service';
import { KeycloakService } from './../../../../core/services/keycloak.service';
import { LogService } from './../../../../core/services/log.service';
import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';

const ALERT_SHOW_TIME_VAL = 5;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  validating=false;
  username: string;
  password: string;

  message: string;
  loading: HTMLIonLoadingElement;

  successPage = '';
  registerPage = '/authentication/register';

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController,
    private loadingController: LoadingController,

    private log: LogService ,
    private keycloakService: KeycloakService ,
    private doctorService: DoctorService ,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.createLoader()
    .then(() => {
      this.keycloakService.isAuthenticated()
      .then((value) => {
        if (value == true) {
          this.keycloakService.getCurrentUserDetails(
            (user) => {
              this.localStorage.setItem('kuser' , JSON.stringify(user));
              this.doctorService.getCurrentDoctorDetails(user.preferred_username ,
                (doctor) => {
                  console.log('sjskjskj' , doctor);
                  this.localStorage.setItem('doctor' , JSON.stringify(doctor.body));
                  this.doctorService.getCurrentDoctorQualification(doctor.body.doctorId,
                  (qualifications => {this.localStorage.setItem('qualifications' , JSON.stringify(qualifications));
                  }));
                  this.doctorService.getCurrentDoctorWorkPlaces(doctor.body.doctorId,
                  (workplaces =>
                    {
                      console.log("Workplace Got" , workplaces);
                      this.localStorage.setItem('workplaces' , JSON.stringify(workplaces));
                      for (const workplace of workplaces) {
                        this.doctorService.getCurrentSessions(doctor.body.doctorId, workplace.id,
                          sessions => {
                            this.localStorage.setItem('sessions' + workplace.id , JSON.stringify(sessions));
                            this.loading.dismiss();
                          });
                      }
                  }));

                  this.navCtrl.navigateRoot(this.successPage);
                }
              );
            }
          );
        }
      });
    });
  }

  async createLoader() {

    this.loading = await this.loadingController.create({
      spinner: 'circles',
      translucent: true,
      cssClass: 'loading'
    });
  }

  authenticate() {

    this.validating = true;
    this.loading.present();
    this.keycloakService.authenticate(this.username , this.password)
    .then(data => {
      this.log.log('Authenticated ' , data);
      this.initialize();
      this.loading.dismiss();
      this.navCtrl.navigateRoot(this.successPage);
    })
    .catch(err => {
      this.message = 'Inavlid Username / Password';
      this.presentToast();
      this.loading.dismiss();
      this.log.log(err);
      this.validating = false;
    });
  }

  navigate(path: string) {
    this.navCtrl.navigateForward(path);
  }

  clearMessage() {
    this.log.log('Clearing Error Message');
    this.message = undefined;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.message ,
      duration: 2000,
      color: 'dark',
      position: 'middle',
      buttons: [
        {
          side: 'start',
          icon: 'warning',
        }]
    });
    toast.present();
  }

}
