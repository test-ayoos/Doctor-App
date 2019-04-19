import { PrescriptionComponent } from './../../shared/component/prescription/prescription.component';

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.page.html',
  styleUrls: ['./consultation.page.scss'],
})
export class ConsultationPage implements OnInit {

  @ViewChild('slides') slides: IonSlides;

  @ViewChild('backButton') backButton:IonButton;


  options:String[] = ['fever' , 'headeache' , 'cough' , 'another' , 'blll','cccc'];
  
  medicines = [

    {type:"Tab",name:"paracetamol" , strength:"50mg" , dose:"1-0-1" , duration:"3 Days BF"},
    {type:"Tonic",name:"Bsyuy" , strength:"200ml" , dose:"1-1-1" , duration:"2 Days AF"},
    {type:"Tab",name:"Calpol" , strength:"10mg" , dose:"0-0-1" , duration:"1 Days BF"},
    {type:"Tab",name:"Terhaf" , strength:"10mg" , dose:"1-1-1" , duration:"2 Days BF"},
  ]

  removeMedicine(med) {

    this.medicines = this.medicines.filter(item => item !== med);
  }

  next() {
    this.slides.slideNext();
  }

  back() {
    this.slides.slidePrev();
  }

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async create() {

    const modal = await this.modalCtrl.create({
      component:PrescriptionComponent,
      cssClass:'prescriptionModal'
    });

    modal.present();
  }
  close() {
     this.modalCtrl.dismiss();
  }

  async history() {
  }


}
