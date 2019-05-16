import { QueryResourceService } from 'src/app/api/services';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, IonButton, IonContent, ModalController } from '@ionic/angular';
import { ConsultationPage } from '../consultation/consultation.page';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage implements OnInit {

  @ViewChild('slides') slides: IonSlides;
  @ViewChild(IonContent) content: IonContent;

  isOnSlide1:boolean = true;

  slideOpts = {
    effect: 'flip'
  };

  token: string ="989898";

  appointments: any[] = [{name: 'Patient 1' , bookingTime: '12:30' , age: 23 }];

  constructor(
    public modalController: ModalController ,
    private queryResourceService: QueryResourceService
  ) { }

  ngOnInit() {

  }

  getApointments() {


  }

  async consultation(patientPara) {
    const modal = await this.modalController.create({
      component: ConsultationPage,
      componentProps: {token: this.token , patient: patientPara}
    });

    return await modal.present();
  }

  
}