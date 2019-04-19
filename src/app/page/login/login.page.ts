import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { NavController } from '@ionic/angular';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  username: string;
  password: string;
  message: string;

  successPage: string = '/home/tabs';

  constructor(
    private oauthService: OAuthService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
   if (this.oauthService.hasValidAccessToken()) {
      this.navCtrl.navigateRoot(this.successPage);
    }
  }

  clearMessage() {
    this.message = undefined;
  }

  registerPage() {
    this.navCtrl.navigateRoot('/register');
  }

  login() {

    this.oauthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(this.username, this.password, new HttpHeaders()).then(() => {
 
      let claims = this.oauthService.getIdentityClaims();
 
      if (claims) console.log(claims);
 
      if (this.oauthService.hasValidAccessToken()) {
        this.navCtrl.navigateRoot(this.successPage);
      }
    }).catch((err:HttpErrorResponse)=>{

      this.message=err.error.error_description;

    });

    this.navCtrl.navigateRoot(this.successPage);

   }
}