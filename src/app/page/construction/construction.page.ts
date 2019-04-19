import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.page.html',
  styleUrls: ['./construction.page.scss'],
})
export class ConstructionPage implements OnInit {

  constructor(
    public navCtrl:NavController
  ) { }

  ngOnInit() {
  }

  back() {
    // this.navCtrl.pop();

    this.navCtrl.navigateBack("home");
  }

}
