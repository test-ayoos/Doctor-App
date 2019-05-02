import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { Component, OnInit } from '@angular/core';
import { LoginPage } from '../login/login.page';
import { NavController, LoadingController } from '@ionic/angular';
import { KeycloakAdminClient } from 'keycloak-admin/lib/client';
import { OAuthService } from 'angular-oauth2-oidc';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  name: String;
  username: string;
  password: string;
  email: string;
  kcAdminClient: KeycloakAdminClient;
  phone: number;
  agreement: boolean;
  registerId: string;


  constructor(
    private navCtrl: NavController,
    public oauthService: OAuthService,
    private commandResourceService: CommandResourceService,
    public loadingController: LoadingController
  ) {
    this.kcAdminClient = new KeycloakAdminClient();
    this.kcAdminClient.setConfig({
        baseUrl: 'http://35.237.193.86:8080/auth'

     });
    this.configureKeycloakAdmin();
  }

  ngOnInit() {
    this.agreement = false;
  }

  loginPage() {

    this.navCtrl.navigateRoot('');
  }


  configureKeycloakAdmin() {
    this.kcAdminClient.auth({
      username: 'admin',
      password: 'admin',
      grantType: 'password',
      clientId: 'admin-cli'
    });
  }

  async register() {

    const loading = await this.loadingController.create({
      spinner: 'dots',
      translucent: true,
      cssClass: 'loading'
    });


    const map = new Map([
      ['phone', this.phone],
      ['value', 3]
    ]);

    this.kcAdminClient.users.create({
      realm: 'graeshoppe',
      username: this.username,
      firstName: this.name.split(' ')[0],
      lastName: this.name.split(' ')[1],
      email: this.email,
      enabled: true,
      credentials: [{
        type: 'password',
        value: this.password
      }],
      attributes: map

    }).then(res => {
      loading.present();
      this.createDoctor(res);
      loading.dismiss();
    });
  }

  async createDoctor(res) {

    // Get Key Cloak User by id and then Login
    // After that login using authService

      this.oauthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(this.username, this.password, new HttpHeaders()).then(() => {

      const claims = this.oauthService.getIdentityClaims();

      if (claims) { console.log(claims); }

      if (this.oauthService.hasValidAccessToken()) {
        this.commandResourceService.createDoctorUsingPOST({
          doctorId: this.username,
          registerNumber: this.registerId
        })
        .subscribe(result => {
          console.log('Doctor Created');
          this.oauthService.logOut();
          this.navCtrl.navigateForward('');
        });

      }
    }).catch((err: HttpErrorResponse) => {
      alert('Error Creating Account');
    });


  }

  dataChanged(agreement) {
    console.log('Old Agreement is ' + this.agreement);
    console.log('Agreement is ' + agreement);
    this.agreement = agreement;
  }




}
