import { ModalController } from '@ionic/angular';
import { QualificationDTO } from './../../../../api/models/qualification-dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-qualification-modal',
  templateUrl: './add-qualification-modal.component.html',
  styleUrls: ['./add-qualification-modal.component.scss'],
})
export class AddQualificationModalComponent implements OnInit {

  // Get Data from Some Doctor Course List API
  qualificationList: string[] = ['MBBS', 'MA' , 'MPhil' , 'ABBC' , 'GHGH' , 'LOPOP'];

  searchListEntity: {str?: string , show?: boolean , selected?: boolean}[] = [];

  qualificationsName: string[] = [];

  qualifications: QualificationDTO[] = [];

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {

    const str: string[] = [];
    this.qualifications.forEach(q => {
      str.push(q.qualification);
    });

    this.qualificationList = this.qualificationList.filter(qn => {
      if (str.indexOf(qn) < 0) {
        const sentity = {str: qn , show: true , selected: false};
        this.searchListEntity.push(sentity);
        return qn;
      }
    });
  }

  search() {

  }

  dismiss() {
    this.modalController.dismiss(this.qualificationsName);
  }

  cancel() {
    this.modalController.dismiss();
  }

  addQualification(searchListEntity: any) {

    searchListEntity.selected = true;
    this.qualificationsName.push(searchListEntity.str);

    console.log(this.searchListEntity);
  }

  removeQualification(searchListEntity: any) {

    searchListEntity.selected = false;
    this.qualificationsName = this.qualificationsName.filter(value => {
      if (value !== searchListEntity.str) { return searchListEntity.str; }
    });

    console.log(this.searchListEntity);

  }

}
