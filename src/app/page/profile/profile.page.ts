import { LoadingController } from '@ionic/angular';
import { KeycloakAdminClient } from 'keycloak-admin/lib/client';
import { QualificationDTO } from './../../api/models/qualification-dto';
import {
  CommandResourceService,
  QueryResourceService
} from 'src/app/api/services';
import { ContactInfoDTO } from './../../api/models/contact-info-dto';
import { DoctorDTO } from './../../api/models/doctor-dto';
import { ImageSelectorComponent } from './../../shared/component/image-selector/image-selector.component';
import { ProfileOptionComponent } from '../../shared/component/profile-option/profile-option.component';
import { OAuthService } from 'angular-oauth2-oidc';
import { DegreePage } from './../degree/degree.page';
import { async } from '@angular/core/testing';
import { ClinicPage } from './../clinic/clinic.page';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import {
  AlertController,
  NavController,
  ModalController,
  PopoverController,
  
} from '@ionic/angular';
import { WorkPlaceDTO } from 'src/app/api/models';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  kcAdminClient: KeycloakAdminClient;

  practiceDate: string;

  keycloakUser: any = {};
  doctor: DoctorDTO = {};
  workplace: WorkPlaceDTO = {};
  qualification: QualificationDTO = {};

  workplaces: WorkPlaceDTO[] = [];
  qualifications: QualificationDTO[] = [];

  editMode = false;
  loading: HTMLIonLoadingElement;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public authService: OAuthService,
    public popoverController: PopoverController,
    private loadingController: LoadingController,
    private commandResourceService: CommandResourceService,
    private queryResourceService: QueryResourceService
  ) {
    this.kcAdminClient = new KeycloakAdminClient();
    this.kcAdminClient.setConfig({
      baseUrl: 'http://35.237.193.86:8080/auth'
    });
    this.configureKeycloakAdmin();
  }

  ngOnInit() {

    this.setUpLoader().then(result => {
      this.authService.loadUserProfile().then(async (res: any) => {
        this.loading.present();
        this.keycloakUser = res;

        // Load Doctor

        console.log('Getting Doctor', this.doctor);

        await this.getDoctor();

        this.loading.dismiss();


      });
    });


  }

  // Update

  updateDoctor() {
    this.doctor.practiceSince = this.practiceDate;

    this.kcAdminClient.users
      .update(
        {
          id: this.keycloakUser.sub,
          realm: 'graeshoppe'
        },
        {
          firstName: this.keycloakUser.given_name,
          lastName: this.keycloakUser.family_name,
          email: this.keycloakUser.email
        }
      )
      .then(res => {
        console.log(this.doctor);
        this.commandResourceService
          .updateDoctorUsingPUT(this.doctor)
          .subscribe(result => {
            this.editMode = false;
            this.ngOnInit();
          });
      });
  }

  // GET

  async getDoctor() {

    this.queryResourceService
      .findDoctorUsingGET(this.keycloakUser.preferred_username)
      .subscribe(async result => {
        this.doctor = result;
        console.log('Getting Doctor' , result);
        await this.getWorkPlaces();
        await this.getQualifications();
      });
  }

  getWorkPlaces() {
    // this.queryResourceService
    // .findWorkPlaceUsingGET({searchTerm: this.doctor.doctorId + ''})
    // .subscribe(result => {
    //   console.log(result);
    //   this.workplaces = result;
    // });

    // Only For Testing Purpose

    this.queryResourceService
    .findAllWorkPlacesByDoctorIdUsingGETResponse(this.doctor.id)
    .subscribe(result => {
      this.workplaces = result.body;
    });

  }

  getQualifications() {
    // this.queryResourceService
    // .findAllQualificationUsingGET({searchTerm: this.doctor.id + ''})
    // .subscribe(result => {
    //   console.log(result);
    //   this.qualifications = result;
    //   this.loading.dismiss();
    // });

    // Only For Testing Purpose

    this.queryResourceService.findAllQualificationByDoctorIdUsingGETResponse(this.doctor.id)
    .subscribe(result => {
      this.qualifications = result.body;
    });

  }

  // Delete

  deleteWorkPlace(id: number) {
    this.commandResourceService
      .deleteWorkPlaceUsingDELETE(id)
      .subscribe(result => {
        console.log('WorkPlace Deleted');
      });
  }

  deleteQualification(id: number) {
    this.commandResourceService
      .deleteQualificationUsingDELETE(id)
      .subscribe(result => {
        console.log('Qualification Deleted');
      });
  }



  // Modals

  async addQualificationModal(event) {
    const modal = await this.modalCtrl.create({
      component: DegreePage,
      cssClass: 'auto-height',
      componentProps: {doctorId: this.doctor.id}
    });

    modal.onDidDismiss().then(data => {
      this.ngOnInit();
    });

    modal.present();
  }

  async addWorkPlaceModal(event) {
    const modal = await this.modalCtrl.create({
      component: ClinicPage,
      cssClass: 'auto-height',
      componentProps: {doctorId: this.doctor.id}
    });

    modal.onDidDismiss().then(data => {
      this.ngOnInit();
    });

    modal.present();
  }


  async updateQualificationModal(id: number) {
    const modal = await this.modalCtrl.create({
      component: DegreePage,
      cssClass: 'auto-height',
      componentProps: {uid: id}
    });

    modal.present();
  }

  async updateWorkPlaceModal(id) {
    const modal = await this.modalCtrl.create({
      component: ClinicPage,
      cssClass: 'auto-height',
      componentProps: {uid: id}
    });

    modal.present();
  }

  async profileImageSetter(ev: any) {
    this.editMode = false;

    const modal = await this.modalCtrl.create({
      component: ImageSelectorComponent,
      cssClass: 'auto-height2',
    });

    modal.onDidDismiss().then(data => {
      this.doctor.image = data.data.imageBase64;
      this.doctor.imageContentType = data.data.imageType;
      this.commandResourceService
        .updateDoctorUsingPUT(this.doctor)
        .subscribe(result => {
          console.log(result);
          this.ngOnInit();
        });
    });

    modal.present();
  }

  async profileOptionPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ProfileOptionComponent
    });

    popover.present();
  }

  // Utility

  async setUpLoader() {
    this.loading = await this.loadingController.create({
      spinner: 'dots',
      translucent: true,
      cssClass: 'loading'
    });
  }

  configureKeycloakAdmin() {
    this.kcAdminClient.auth({
      username: 'admin',
      password: 'admin',
      grantType: 'password',
      clientId: 'admin-cli'
    });
  }

  dateSelected(event: Date) {
    this.practiceDate =
    event.getFullYear() + '-' + event.getMonth() + '-' + event.getUTCDate();
    this.practiceDate = moment(this.practiceDate).format('YYYY-MM-DDTHH:mm:ssZ');
    console.log(this.practiceDate);
  }

  removeBadge(event) {
    event.srcElement.parentElement.remove();
  }

  viewLocation() {}

  edit() {
    this.editMode = true;
  }

  save() {
    this.editMode = false;
  }

  reviewPage() {
    this.navCtrl.navigateForward('review');
  }
}
