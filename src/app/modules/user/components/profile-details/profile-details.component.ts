import { AddWorkplaceModalComponent } from './../add-workplace-modal/add-workplace-modal.component';
import { AddQualificationModalComponent } from './../add-qualification-modal/add-qualification-modal.component';
import { ModalController } from '@ionic/angular';
import { QualificationDTO } from './../../../../api/models/qualification-dto';
import { LogService } from './../../../../core/services/log.service';
import { DoctorDTO } from './../../../../api/models/doctor-dto';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { WorkPlaceDTO } from 'src/app/api/models';
import * as moment from 'moment';
import { DoctorService } from 'src/app/core/services/doctor.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent implements OnInit {

  @Input() doctorCustom: {

    userKeycloak?: any,
    doctor?: DoctorDTO,
    workplaces?: WorkPlaceDTO[],
    qualifications?: QualificationDTO[]

  };

  practiceDate: Date;

  @Output() doctorUpdated: EventEmitter<any> = new EventEmitter();

  @Output() qualificationDeleted: EventEmitter<any> = new EventEmitter();

  @Output() workplaceDeleted: EventEmitter<any> = new EventEmitter();

  @Output() workplaceAdded: EventEmitter<any> = new EventEmitter();

  @Output() qualificatioAdded: EventEmitter<any> = new EventEmitter();

  @Output() workplaceUpdated: EventEmitter<any> = new EventEmitter();

  toggleSegment = true;

  constructor(
    private modalController: ModalController,
    private doctorService: DoctorService,
    private log: LogService
  ) { }

  ngOnInit() {
    this.log.log(this.toggleSegment);
  }

  segmentChanged() {
    this.log.log(this.toggleSegment);
    this.toggleSegment = !this.toggleSegment;
  }


  dateChange() {
    this.doctorCustom.doctor.practiceSince = moment.parseZone(this.practiceDate).format().toString();
  }
  saveDoctor() {

    this.doctorCustom.doctor.practiceSince = moment.parseZone(this.practiceDate).format().toString();
    this.doctorCustom.doctor.firstName = this.doctorCustom.userKeycloak.name;
    this.doctorCustom.doctor.email = this.doctorCustom.userKeycloak.email;
    this.doctorUpdated.emit(
      this.doctorCustom
    );
  }

  async updateWorkplace(workplace: WorkPlaceDTO) {
    const modal = await this.modalController.create({
      component: AddWorkplaceModalComponent,
      componentProps: { workPlace: workplace}
    });

    modal.onDidDismiss()
    .then(data => {
      this.log.log(data.data);
      this.workplaceUpdated.emit(data.data);
      this.doctorService.updateCurrentDoctorWorkPlaces();
    });

    modal.present();

  }

  async addWorkplace() {
    const modal = await this.modalController.create({
      component: AddWorkplaceModalComponent
    });

    modal.onDidDismiss()
    .then(data => {
        data.data.doctorId = this.doctorCustom.doctor.id;
        this.workplaceAdded.emit(data.data);
        this.log.log(data);
    });

    modal.present();
  }

  async addQualification() {

    const modal = await this.modalController.create({
      component: AddQualificationModalComponent,
      componentProps: {qualifications: this.doctorCustom.qualifications}
    });

    modal.onDidDismiss()
    .then((data: any) => {
      if (data.data != undefined ) {
        if (data.data.length > 0) {
          this.log.log(data.data);
          data.data.forEach(element => {
            const qualification: QualificationDTO =  {qualification: element};
            qualification.doctorId = this.doctorCustom.doctor.id;
            this.qualificatioAdded.emit(qualification);
            this.log.log(qualification);
          });
        }
      }
    });

    modal.present();
  }

  deleteQualificationEvent(id) {
    this.qualificationDeleted.emit(id);
  }

  deleteWorkplaceEvent(id) {
    this.workplaceDeleted.emit(id);
  }
}
