import { NavController, PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-profile-option',
  templateUrl: './profile-option.component.html',
  styleUrls: ['./profile-option.component.scss'],
})
export class ProfileOptionComponent implements OnInit {

  constructor(
    private authService: OAuthService,
    public navCtrl: NavController,
    public popoverController: PopoverController
  ) { }

  ngOnInit() {}

  logout() {

    this.authService.logOut();
    this.popoverController.dismiss();
    this.navCtrl.navigateForward('');
  }

}
