import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  goPrevious() {
    this.navCtrl.pop();
  }

}
