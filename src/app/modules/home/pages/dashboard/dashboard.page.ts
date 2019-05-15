import { LocalStorageService } from './../../../../core/services/local-storage.service';
import { DoctorService } from './../../../../core/services/doctor.service';
import { DoctorDTO } from './../../../../api/models/doctor-dto';
import { KeycloakService } from './../../../../core/services/keycloak.service';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { LogService } from 'src/app/core/services/log.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  profilePage = '/user/profile';

  doctorCustom: {

    doctor?: DoctorDTO,
    userKeycloak?: object

  } = {};

  subscription: Subscription;

  isReady = false;

  loading: HTMLIonLoadingElement;

  constructor(
    private navCtrl: NavController,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private localStorage: LocalStorageService,
    private log: LogService
  ) {}


  ngOnInit() {

    this.createLoader().then(()=>{
      this.loading.present();
      this.localStorage.getItem('kuser')
      .subscribe(user => {
        this.doctorCustom.userKeycloak = JSON.parse(user);
        this.localStorage.getItem('doctor')
        .subscribe(doctor => {
          this.isReady = true;
          this.doctorCustom.doctor = JSON.parse(doctor);
          this.loading.dismiss();

        });
      });
    });
  }

  getCurrentDoctorWorkplaces() {
   
  }

  getCurrentDoctorQualification() {
  }

  async createLoader() {

    this.loading = await this.loadingController.create({
      spinner: 'circles',
      translucent: true,
      cssClass: 'loading'
    });
  }
}
