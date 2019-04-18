import { Component, OnInit } from '@angular/core';
import { LoginPage } from '../login/login.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public navCtrl: NavController) {}

  loginPage() {

    this.navCtrl.navigateRoot('');
  }

  register() {
    
  }

  ngOnInit() {
  }

}
