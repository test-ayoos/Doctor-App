import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { SessionSaveComponent } from 'src/app/shared/component/session-save/session-save.component';

@Component({
  selector: 'app-session',
  templateUrl: './session.page.html',
  styleUrls: ['./session.page.scss'],
})
export class SessionPage implements OnInit {

  hospitals: any[] = [
    {name: 'Hospital 1' , address: 'Kozhikode , XXXYYzz , 679511'},
    {name: 'Hospital 2' , address: 'Kozhikode , XXXYYzz , 679511'},
  ];

  showSession = false;

  dayNumber;

  days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday' , 'Friday', 'Saturday'];

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  showHospitalSession($event) {

      this.showSession = true;
  }


  async addSession(day) {

   this.dayNumber = this.days.indexOf(day) + 1;

   console.log(this.dayNumber);

   const modal = await this.modalController.create({

      component: SessionSaveComponent,
      componentProps: {dayNumber: this.dayNumber , dayName: this.days[this.dayNumber - 1]}
    });

   modal.present();
  }

}
