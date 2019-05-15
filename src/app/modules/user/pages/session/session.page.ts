import { LocalStorageService } from './../../../../core/services/local-storage.service';
import { KeycloakService } from './../../../../core/services/keycloak.service';
import { DoctorDTO } from './../../../../api/models/doctor-dto';
import { SessionInfoDTO } from './../../../../api/models/session-info-dto';
import { QueryResourceService } from 'src/app/api/services';
import { LogService } from 'src/app/core/services/log.service';
import { DoctorService } from './../../../../core/services/doctor.service';
import { WorkPlaceDTO } from './../../../../api/models/work-place-dto';
import { ModalController, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { SessionSaveComponent } from '../../components/session-save/session-save.component';

@Component({
  selector: 'app-session',
  templateUrl: './session.page.html',
  styleUrls: ['./session.page.scss'],
})
export class SessionPage implements OnInit {

  days: string[] = ['Sunday' , 'Monday', 'Tuesday', 'Wednesday', 'Thursday' , 'Friday', 'Saturday'];

  workplaces: WorkPlaceDTO[] = [];

  sessions: SessionInfoDTO[] = [];

  daySession?: Array<SessionInfoDTO[]> =[[]];

  workplaceSessionsObj = {};

  doctor: DoctorDTO = {};

  isReady = false;

  loading: HTMLIonLoadingElement;

  constructor(
    private modalController: ModalController,
    private keycloakService: KeycloakService,
    private doctorservice: DoctorService,
    private queryResourceService: QueryResourceService,
    private localStprage: LocalStorageService,
    private log: LogService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {

    this.createLoader().then(() => {
      this.loading.present();
      this.getCurrentDoctorWorkplaces();

    });
  }

  async createLoader() {

    this.loading = await this.loadingController.create({
      spinner: 'circles',
      translucent: true,
      cssClass: 'loading'
    });
  }

  /**
   * Getting Workplace Details which is already stored in an Observable
   * inside DoctorService as a static member
   */
  getCurrentDoctorWorkplaces() {

    this.workplaceSessionsObj = {};
    this.localStprage.getItem('workplaces')
    .subscribe(workplaces => {
      this.workplaces = JSON.parse(workplaces);
      for(let workplace of this.workplaces) {
        console.log("finding sessions for " + workplace.id);
        this.getCurrentDoctorSessions(workplace.id);
      }
      this.loading.dismiss();
      this.isReady = true;
    })
  }

  getCurrentDoctorSessions(workplaceId: number) {

    this.daySession = [[]];
    this.localStprage.getItem('sessions' + workplaceId)
    .subscribe(sessions => {
      this.sessions = JSON.parse(sessions);
      console.log("Got Session for id : " , workplaceId , this.sessions);
      for(let day of this.days) {
        this.daySession[this.days.indexOf(day)] = [];
        for(let session of this.sessions) {
          if(session.weekDay === this.days.indexOf(day) + 1) {
            this.daySession[this.days.indexOf(day)].push(session);
          }
        }
      }
      this.workplaceSessionsObj[workplaceId] = this.daySession;
      console.log("ahsjajshas" , this.workplaceSessionsObj);
 
    });
  }

  async createSession(workplaceObj , dayString , dayNum) {

    const modal = await this.modalController.create({
      component: SessionSaveComponent,
      componentProps: {
        workplace: workplaceObj , day: dayString , dayNumber: dayNum + 1 , docid: this.doctor.id}
    });

    modal.onDidDismiss();
    modal.present();
  }
}