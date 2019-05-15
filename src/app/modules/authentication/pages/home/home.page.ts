import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  loginPage = '/authentication/login';
  registerPage = '/authentication/register'

  constructor(
    private navCtrl: NavController
  ) { }

  navigate(path: string) {
    this.navCtrl.navigateForward(path);
  }

  ngOnInit() {
  }

}
