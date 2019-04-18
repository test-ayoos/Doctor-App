import { NotificationPage } from './../notification/notification.page';
import { OAuthService } from 'angular-oauth2-oidc';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Doctor } from 'src/app/shared/models/doctor';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  doctor: Doctor;

  constructor(
    public navCtrl: NavController,
    public modalController: ModalController,
    public authService: OAuthService
  ) {}


  ngOnInit() {

    this.authService.loadUserProfile().then(
      (res) =>
      {
        this.doctor = <Doctor> res;
      }
    );
  }

  goto(str: string) {
    this.navCtrl.navigateForward(str);
  }


  profile() {

    this.navCtrl.navigateForward("profile");

  }

  settings() {

    this.navCtrl.navigateForward('settings');
  }


   async notification() {
      const modal = await this.modalController.create({
        component: NotificationPage,
      });

      return await modal.present();
  }

}
