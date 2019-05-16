import { DoctorDTO } from './../../../../api/models/doctor-dto';
import { CommandResourceService } from 'src/app/api/services';
import { DoctorService } from './../../../../core/services/doctor.service';
import { KeycloakService } from './../../../../core/services/keycloak.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginPage } from '../login/login.page';
import { NavController, IonSlides } from '@ionic/angular';
import { KeycloakAdminClient } from 'keycloak-admin/lib/client';
import UserRepresentation from 'keycloak-admin/lib/defs/userRepresentation';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @ViewChild('slides') slides: IonSlides;
  slideNumber = 0;

  name = '';
  username = '';
  password = '';
  email = '';
  phone: number;
  agreement: boolean;
  registerNumber: string;

  loginPage = '';

  constructor(
    private navCtrl: NavController,
    private keyCloakService: KeycloakService,
    private commandResourceService: CommandResourceService,
    private doctorService: DoctorService
  ) {}

  ngOnInit() {
    this.agreement = false;
    this.slidesSwipeToggle(true);
  }

  // Creating a User

  createAccount() {

    const user: UserRepresentation = {
      firstName: this.name.split(' ')[0],
      email: this.email,
      username: this.username
    };

    console.log(user);

    this.keyCloakService.createAccount(user , this.password)
    .then(
      () => {

        this.keyCloakService.authenticate(user.username , this.password)
        .then(() => {
          const doctor: DoctorDTO = {};
          doctor.doctorId = this.username;
          doctor.firstName = this.name
          doctor.email = this.email;
          doctor.phoneNumber = this.phone;
          doctor.registerNumber = this.registerNumber;
          this.commandResourceService
          .createDoctorUsingPOST(doctor)
          .subscribe(data => {
            console.log(data);
            this.keyCloakService.logout();
            this.navCtrl.navigateRoot('');
          });
        });
      }
    );

  }

  // util

  navigate(path: string) {
    this.navCtrl.navigateForward(path);
  }

  // True Disable Slides

  slidesSwipeToggle(val: boolean) {
    this.slides.lockSwipes(val);
  }

  nextSlide() {

    this.slidesSwipeToggle(false);
    this.slides.slideNext();
    this.slides.getActiveIndex()
    .then(num => {
        this.slideNumber = num;
    });
    this.slidesSwipeToggle(true);
  }

  previousSlide() {

    this.slidesSwipeToggle(false);
    this.slides.slidePrev();
    this.slides.getActiveIndex()
    .then(num => {
        this.slideNumber = num;
    });
    this.slidesSwipeToggle(true);
  }

}
