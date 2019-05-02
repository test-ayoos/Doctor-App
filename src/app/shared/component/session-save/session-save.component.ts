import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { SessionInfoDTO } from 'src/app/api/models';

@Component({
  selector: 'app-session-save',
  templateUrl: './session-save.component.html',
  styleUrls: ['./session-save.component.scss'],
})
export class SessionSaveComponent implements OnInit {

  dayNumber: number;
  dayName: number;
  months: number[]= [];

  today = new Date();
  date = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+ this.today.getDate();
  

  sessionInfo: SessionInfoDTO = {date: this.date};

  sessionInfoArray: SessionInfoDTO[] = [];

  constructor(
    private modalController: ModalController,
    private commandResourceService: CommandResourceService,
    private queryResourceService: QueryResourceService
  ) {
  }

  ngOnInit() {
    for(let i =0; i < this.today.getMonth() + 3;i++) {
      this.months.push(i);
    }
  }


  dismiss() {
    this.modalController.dismiss();
  }

  addSession() {
    this.sessionInfoArray.push(this.sessionInfo);
    this.sessionInfo = {date: this.date};
  }

  saveSession() {
    this.commandResourceService.createSessionInfoUsingPOST({

      sessionInfoDTO: [this.sessionInfo] , monthList: this.months})

      .subscribe(result => {

      });
  }

}
