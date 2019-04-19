import { ImageSelectorComponent } from './../../shared/component/image-selector/image-selector.component';
import { ProfileOptionComponent } from '../../shared/component/profile-option/profile-option.component';
import { OAuthService } from 'angular-oauth2-oidc';
import { DegreePage } from './../degree/degree.page';
import { async } from '@angular/core/testing';
import { ClinicPage } from './../clinic/clinic.page';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  doctor = {
    id:"Ml9009",
    name:"Jishnu",
    email:"jishnujayabal@gmail.com",
    clinic:['SDA Hospital','XYZ Clinic'],
    speciality:["Neurologist"],
    degree:["IFGRT","ASERT"],
    number:"+91 900909999",
    rating:4
  };

  
  editMode = false;

  profilePic: String = '/assets/boy.png';

  constructor(
    public navCtrl:NavController,
    public modalCtrl:ModalController,
    public authService:OAuthService,
    public popoverController: PopoverController,
  ) { }

  async ngOnInit() {

    await this.authService.loadUserProfile().then(

        (res)=>{

          // // this.doctor = <Doctor>res;

          // if(this.doctor.img) {

          //     this.profilePic = this.doctor.img;
          // }
        }
    );
  }

  removeBadge(event) {

    event.srcElement.parentElement.remove();
  }

  removeClinic(event) {

    this.removeBadge(event);
  }

  viewLocation() {

  }

  removeDegree(event) {

    this.removeBadge(event);

  }

  edit() {

    this.editMode = true;

  }

  save() {

    this.editMode = false;

  }

  reviewPage() {
    this.navCtrl.navigateForward("review")
  }
 

  async clinicShow(event) {

    const modal = await this.modalCtrl.create(
      {
        component:ClinicPage,
        cssClass:'auto-height'
      }
    );

    modal.present();

  }

  async degreeShow(event) {

    const modal = await this.modalCtrl.create(
      {
        component: DegreePage,
        cssClass: 'auto-height'
      }
    );

    modal.present();
  }

  async presentPopover(ev: any) {

    const popover = await this.popoverController.create({
      component: ProfileOptionComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  async profileImageSetter(ev: any) {

    const popover = await this.modalCtrl.create({
      component: ImageSelectorComponent,
      cssClass: 'auto-height2',
    });
    return await popover.present();
  }
}
