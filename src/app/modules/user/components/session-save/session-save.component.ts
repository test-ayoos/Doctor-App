import { DoctorService } from './../../../../core/services/doctor.service';
import { WorkPlaceDTO } from './../../../../api/models/work-place-dto';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { SessionInfoDTO } from 'src/app/api/models';
import * as moment from 'moment';

@Component({
  selector: 'app-session-save',
  templateUrl: './session-save.component.html',
  styleUrls: ['./session-save.component.scss'],
})
export class SessionSaveComponent implements OnInit {

  monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
  ];

  availabelMonths: string[] = [];

  sessionInfo: SessionInfoDTO = {};

  @Input() workplace: WorkPlaceDTO;

  @Input() day: string;

  @Input() dayNumber: number;

  @Input() docid: number;

  sessionsInfo: SessionInfoDTO[] = [];

  checkedMonths: any[] = [];

  constructor(
    private modalController: ModalController,
    private doctorService: DoctorService,
    private commandResourceService: CommandResourceService,
    private queryResourceService: QueryResourceService
  ) {
  }

  ngOnInit() {

    const mnth = new Date().getMonth();
    for (let i = mnth; i < (mnth + 3); i++ ) {
      this.availabelMonths.push(this.monthNames[i]);
    }
  }

  onKey() {
    if ( this.sessionInfo.interval > 1) {
      this.sessionInfo.interval = 0;
    }
  }

  addSession() {
    this.sessionInfo.workPlaceId = this.workplace.id;
    this.sessionInfo.weekDay = this.dayNumber;
    this.sessionInfo.fromTime = this.timeStringToFloat(this.sessionInfo.fromTime);
    this.sessionInfo.toTime = this.timeStringToFloat(this.sessionInfo.toTime);
    this.sessionsInfo.push(this.sessionInfo);

    this.sessionInfo = {};
  }

  addToMonths(mnthNumber: number) {
    console.log("clicked" , mnthNumber);
    const index = this.checkedMonths.indexOf(mnthNumber);
    if (index < 0) {
      this.checkedMonths.push(mnthNumber);
    }
    else {
      this.checkedMonths = this.checkedMonths.filter((mnth) => {
        if (mnth !== mnthNumber) {
          return mnth;
        }
      });
    }
  }

  timeStringToFloat(time) {
    const hoursMinutes = time.split(/[.:]/);
    const hours = parseInt(hoursMinutes[0], 10);
    const minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return Math.round((hours + minutes / 60));
  }

  saveSession() {

    console.table(this.sessionsInfo);
    console.log(this.checkedMonths);

    this.commandResourceService
    .createSessionInfoUsingPOST({
      sessionInfoDTO: this.sessionsInfo,
      monthList: this.checkedMonths
    })
    .subscribe(data => {
      console.log('Session Saved' , data);
      this.doctorService.updateCurrentSessions(
        ()=>{
          this.dismiss()
        }
      );
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
