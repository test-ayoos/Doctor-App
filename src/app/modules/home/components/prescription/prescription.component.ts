import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss'],
})
export class PrescriptionComponent implements OnInit {

  prescription: {
    taskId?: string;
    period?: string;
    frequency?: string;
    drug?: string;
    dose?: string;
  } = {};

  constructor(public modalCtrl: ModalController) { }

  close() {
    this.modalCtrl.dismiss();
  }

  save() {
    this.modalCtrl.dismiss(this.prescription);
  }

  ngOnInit() {}

}
