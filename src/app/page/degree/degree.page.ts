import { ModalController, LoadingController } from '@ionic/angular';
import { QualificationDTO } from './../../api/models/qualification-dto';
import { WorkPlaceDTO } from 'src/app/api/models';
import { CommandResourceService } from 'src/app/api/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.page.html',
  styleUrls: ['./degree.page.scss'],
})
export class DegreePage implements OnInit {

  doctorId: any;

  uid: number;

  qualification: QualificationDTO = {};

  loading: HTMLIonLoadingElement;

  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
    private commandResourceService: CommandResourceService
  ) { }

  ngOnInit() {
    this.qualification.doctorId = this.doctorId;
    this.qualification.id = this.uid;
    this.setUpLoader();
   }

   addUpdateQualification() {
     if (this.qualification.id !== undefined) {
       this.updateQualification();
     } else {
       this.postQualification();
     }
   }

  postQualification() {
    this.loading.present();
    console.log('Creating Qualification ' , this.qualification);
    this.commandResourceService
    .createQualificationUsingPOST(this.qualification)
    .subscribe(result => {
      console.log(result);
      this.loading.dismiss();
      this.dismiss();
    });
  }

  updateQualification() {

    this.loading.present();
    console.log('Updating Qualification ' ,this.qualification);
    this.commandResourceService
    .updateQualificationUsingPUT(this.qualification)
    .subscribe(result => {
      console.log(result);
      this.loading.dismiss();
      this.dismiss();
    });
  }

  onSearch() {

  }

  dismiss() {
    this.modalController.dismiss();
  }

  async setUpLoader() {
    this.loading = await this.loadingController.create({
      spinner: 'dots',
      translucent: true,
      cssClass: 'loading'
    });
  }

}
