import { LocalStorageService } from './../../../../core/services/local-storage.service';
import { LoadingController } from '@ionic/angular';
import { QualificationDTO } from './../../../../api/models/qualification-dto';
import { WorkPlaceDTO } from './../../../../api/models/work-place-dto';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { LogService } from './../../../../core/services/log.service';
import { KeycloakService } from './../../../../core/services/keycloak.service';
import { DoctorDTO } from './../../../../api/models/doctor-dto';
import { DoctorService } from './../../../../core/services/doctor.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {

  doctorCustom: {

    userKeycloak?: object,
    doctor?: DoctorDTO,
    workplaces?: WorkPlaceDTO[],
    qualifications?: QualificationDTO[]

  } = { };

  isReady = false;

  loading: HTMLIonLoadingElement;

  constructor(
    private doctorService: DoctorService,
    private keyCloakService: KeycloakService,
    private commandResourceServiceApi: CommandResourceService ,
    private localStorage: LocalStorageService,
    private loadingController: LoadingController ,
    private log: LogService
  ) {}

  async createLoader() {

    this.loading = await this.loadingController.create({
      spinner: 'circles',
      translucent: true,
      cssClass: 'loading'
    });
  }

  ngOnInit() {

    this.createLoader()
    .then(() => {
      this.loading.present();
      this.localStorage.getItem('kuser')
      .subscribe(user => {
        this.doctorCustom.userKeycloak = JSON.parse(user);
        this.localStorage.getItem('doctor')
        .subscribe(doctor => {
          this.doctorCustom.doctor = JSON.parse(doctor);
          this.localStorage.getItem('qualifications')
          .subscribe(qualifications => {
            this.doctorCustom.qualifications = JSON.parse(qualifications);
            console.log(this.doctorCustom.qualifications);
            this.localStorage.getItem('workplaces')
            .subscribe(workplaces => {
              this.doctorCustom.workplaces = JSON.parse(workplaces);
              this.isReady = true;
              this.loading.dismiss();
            });
          });
        });
      });
    });

  }

  /**
   *  Updating or Adding Profile Pic
   *  An Event with { image , imageContentType} data is emitted
   *  by app-profile-img component when a image is selected
   */
  updateProfileImage(event: any) {

    this.log.log(event);
    this.doctorCustom.doctor.image = event.image;
    this.doctorCustom.doctor.imageContentType = event.imageContentType;

    this.commandResourceServiceApi
    .updateDoctorUsingPUT(this.doctorCustom.doctor)
    .subscribe(data => {
      this.log.log('Doctor Updated', data);
      this.doctorService.updateCurrentDoctorDetails(data.doctorId);
    });
  }

  /**
   * Updating The User in keyclock database
   * Updating Doctor in Doctor Microservice Database
   */
  updateDoctorDetails() {
    this.loading.present();
    this.log.log('Updating keycloak User' , this.doctorCustom.userKeycloak);
    this.keyCloakService.updateCurrentUser(this.doctorCustom.userKeycloak)
    .then(() => {
      this.log.log('Keycloak User Updated');
      this.keyCloakService.updateCurrentUserDetails();
      this.log.log('Updating Doctor' , this.doctorCustom.doctor);
      this.commandResourceServiceApi
      .updateDoctorUsingPUT(this.doctorCustom.doctor)
      .subscribe(data => {
        this.log.log('Doctor Updated ' , data);
        this.doctorService.updateCurrentDoctorDetails(data.doctorId);
        this.loading.dismiss();
      });
    }).catch(err => {
      this.loading.dismiss();
      this.log.log(err);
    });
  
  }

  updateDoctorWorkplace(workplace: WorkPlaceDTO) {
    this.log.log('Trying to update Workplace' , workplace);
    this.commandResourceServiceApi.updateWorkPlaceUsingPUT(workplace)
    .subscribe(() => {
      this.log.log('Updated');
      this.doctorService.updateCurrentDoctorWorkPlaces();
    });
  }


  deleteDoctorQualification(id: number) {

    this.log.log('Deleting Qualification with id' , id);
    this.commandResourceServiceApi
    .deleteQualificationUsingDELETE(id)
    .subscribe(data => {
      this.log.log(data);
      this.doctorService.updateCurrentDoctorQualifications();
    });
  }

  deleteDoctorWorkPlace(id: number) {

    this.log.log('Deleting Workplace with id' , id);
    this.commandResourceServiceApi
    .deleteWorkPlaceUsingDELETE(id)
    .subscribe(data => {
      this.log.log(data);
      this.doctorService.updateCurrentDoctorWorkPlaces();
    });
  }

  addDoctorWorkplace(workplace: WorkPlaceDTO) {

    this.commandResourceServiceApi
    .createWorkPlaceUsingPOST(workplace)
    .subscribe(data => {
      this.log.log('Workplace Created');
      this.doctorService.updateCurrentDoctorWorkPlaces();

    });
  }

  addDoctorQualification(qualification: QualificationDTO) {
    this.log.log('Adding doctor Qualifications');
    this.commandResourceServiceApi
    .createQualificationUsingPOST(qualification)
    .subscribe(data => {
      this.log.log(data);
      this.localStorage.getItem('kuser')
      .subscribe(
        data => {

          this.doctorService.getCurrentDoctorQualification(JSON.parse(data).preferred_username,
            (qualifications => {this.localStorage.setItem('qualifications' , JSON.stringify(qualifications));
            }));
        }
      )
    });
  }

}
