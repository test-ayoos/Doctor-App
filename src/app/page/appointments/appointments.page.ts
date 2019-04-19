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

  appointments = [
    {name:"Aln Harper"},
    {name:"Shake Abdulla"},
    {name:"Tomy Blah"},
    {name:"Harrt Potter"},
    {name:"Aln Harper"}
  ]


  confirmed_appointments = [{name:"Jishshh"}]

  constructor(  public modalController:ModalController) { }

  ngOnInit() {

  }

  async consultation() {
    const modal = await this.modalController.create({
      component:ConsultationPage
    });

    return await modal.present();
  }

  confirmed() {
    this.slides.slideNext();
    this.isOnSlide1 = false;
  }

  confirm(event:MouseEvent , a: any) {

    this.appointments = this.appointments.filter(item => item !== a);
    this.confirmed_appointments.push(a);
  }

  pending() {
    this.slides.slidePrev();
    this.isOnSlide1 = true;
  }
  
  scrollToTop() {
    this.content.scrollToTop(0);
  }
  slideChanged(ev) {
    this.slides.getActiveIndex().then(

      num=>{

        if(num == 1) {
          this.confirmed();
          this.scrollToTop();
        }
         else {
           this.pending();
         }
      }
    );

    console.log("sggs");
  }
}