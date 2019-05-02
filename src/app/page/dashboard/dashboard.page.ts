import { KeycloakAdminClient } from 'keycloak-admin/lib/client';
import { NotificationPage } from './../notification/notification.page';
import { OAuthService } from 'angular-oauth2-oidc';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  doctor;

  constructor(
    public navCtrl: NavController,
    public modalController: ModalController,
    public authService: OAuthService
  ) {}


  ngOnInit() {

    this.getDoctor();
  }

  async getDoctor() {
    await this.authService.loadUserProfile().then(
      (res) =>
      {
          this.doctor = res;
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
