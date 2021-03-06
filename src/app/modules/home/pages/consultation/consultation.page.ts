import { diseases } from './../../../../core/mocks/disease.mock';
import { LocalStorageService } from './../../../../core/services/local-storage.service';
import {
  QueryResourceService,
  CommandResourceService
} from 'src/app/api/services';
import { PrescriptionComponent } from './../../components/prescription/prescription.component';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {
  IonSlides,
  ModalController,
  IonButton,
  LoadingController,
  AlertController,
  Platform,
  NavController
} from '@ionic/angular';
import { ParamedicalExaminationRequest, ConsultationRequest } from 'src/app/api/models';
import { File, IWriteOptions } from '@ionic-native/file/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import * as blobUtil from 'blob-util';
import { stringify } from 'querystring';

import { symptoms } from 'src/app/core/mocks/symptoms';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.page.html',
  styleUrls: ['./consultation.page.scss']
})
export class ConsultationPage implements OnInit {


  @ViewChild('slides') slides: IonSlides;

  @ViewChild('backButton') backButton: IonButton;


  symptoms: String[] = [];

  diagnosis: string[] = [];

  prescription: {
    taskId: string;
    period?: string;
    frequency?: string;
    drug?: string;
    dose?: string;
  }[] = [];



  title: String;

  index = 0;

  processInstanceId: string;

  taskId: string;

  showParamedical = false;

  medicines = [];

  loading: HTMLIonLoadingElement;

  @Input() token;

  @Input() patient;


  paramedicalInfo: ParamedicalExaminationRequest = {};

  consultationInfo: ConsultationRequest = {};

  symptomsSelect: string[] = [];

  diagnosisSelect: string[] = [];

  constructor(
    private queryResourceService: QueryResourceService,
    private commandResourceService: CommandResourceService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private localStorage: LocalStorageService,
    public modalCtrl: ModalController ,
    private navController: NavController,
    private file: File,
    private platform: Platform,
    private fileTransfer: FileTransfer,
    private documentViewer: DocumentViewer,
    private fileOpener: FileOpener
  ) {}

  ngOnInit() {
    this.slides.lockSwipes(true);
    for (const disease of diseases) {
      this.diagnosis.push(disease.name);
    }
    for (const symptom of symptoms) {
      this.symptoms.push(symptom.name);
    }
  }

  async createLoader() {
    this.loading = await this.loadingController.create({
      spinner: 'circles',
      translucent: true,
      cssClass: 'loading'
    });
  }

  async createAlert(doctor , head) {

    const alert = await this.alertController
    .create({
      header: head + this.patient.name,
      message: '<p>' + doctor.name + '</p>',
      buttons: [
        {
          text: 'Skip',
          role: 'cancel',
          cssClass: 'secondary',
          handler: blah => {
            this.commandResourceService.collectInformationsUsingPOST({
              taskId: this.taskId.toString() ,
              defaultInfoRequest: {paramedRequired: 'no'}
            }).subscribe((data) => {
              console.log('Collect Informations Using ' + this.taskId , ' ' , data);
              this.slides.lockSwipes(false);
              this.slides.slideTo(2);
              this.slides.lockSwipes(true);
            });
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.commandResourceService.collectInformationsUsingPOST({
              taskId: this.taskId.toString() ,
              defaultInfoRequest: {paramedRequired: 'yes'}
            }).subscribe((data) => {
              console.log('Collect Informations Using ' + this.taskId , ' ' , data);
              this.slides.lockSwipes(false);
              this.slides.slideNext();
              this.slides.lockSwipes(true);
            });
          }
        }
      ]
    });

    await alert.present();

    return alert;
  }


  removeMedicine(med) {
    this.medicines = this.medicines.filter(item => item !== med);
  }

  next() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  back() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
  }

  async startConsultation() {
    this.createLoader().then(() => {
      this.loading.present();
      this.commandResourceService
        .initiateUsingPOST({
          token: this.token
        })
        .subscribe(data => {
          console.log('Initiating Consultation  using Token : ' , this.token);
          this.loading.present();
          this.processInstanceId = data;
          console.log('Initialization consultations got ProcessInstance Id ' , this.processInstanceId);
          this.queryResourceService
            .getTasksUsingGET({
              processInstanceId: data
            })
            .subscribe(async value => {
              this.taskId = value.data[0].id;
              console.log('Getting Task Id Using ' + this.processInstanceId , ' ' , this.taskId);
              this.localStorage.getItem('kuser')
              .subscribe((user) => {
                const alert = this.createAlert(JSON.parse(user) , 'Do You Want to Add Paramedical Details For ')
                .then(() => {
                  this.loading.dismiss();
                });
                });
            });
        });
    });
  }


  saveParamedicalInfo() {

    console.log(this.paramedicalInfo , this.taskId);
    this.queryResourceService.getTasksUsingGET({
      processInstanceId: this.processInstanceId
    })
    .subscribe((data) => {
      this.taskId =  data.data[0].id;
      this.commandResourceService
      .collectParamedicalExaminationInformationsUsingPOST({
        taskId: this.taskId.toString(),
        paramedicalExaminationRequest: this.paramedicalInfo,
      })
      .subscribe(value => {
        this.createLoader()
          .then((loading) => {
            this.loading.present();
            this.next();
            this.loading.dismiss(); });
        });
      });
  }

  saveConsultation() {
    this.queryResourceService.getTasksUsingGET({
      processInstanceId: this.processInstanceId
    })
    .subscribe((data) => {
      this.taskId =  data.data[0].id;
      console.log('Got new taskid' , data.data[0].id);
      const date = new Date();
      this.consultationInfo.evaluation = this.diagnosisSelect;
      this.consultationInfo.symptom = this.symptomsSelect;
      this.consultationInfo.examinationRequired = 'no';
      // "mm-day-year hh:mm"
      this.consultationInfo.date = date.getMonth() + '-' + date.getUTCDay() + '-' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
      console.log(this.consultationInfo);
      this.commandResourceService.collectConsultationInformationsUsingPOST(
        {
          taskId: this.taskId.toString() ,
          consultationRequest: this.consultationInfo
        }
      )
      .subscribe(data => {
        this.loading.present();
        this.queryResourceService.getTasksUsingGET({ processInstanceId: this.processInstanceId})
       .subscribe(data => {
        this.taskId =  data.data[0].id;
        this.next();
        this.loading.dismiss();
       });
      });
    });
  }

  savePrescription() {

    const path = '';

    console.log('Save Prescription');

    this.commandResourceService.collectPrescriptionInformationsUsingPOST(
      {
        taskId: this.taskId,
        prescriptionRequest: this.prescription
      })
      .subscribe((data) => {
        console.log(data);
        this.next();
      });
  }

  downloadPrescription() {

     this.queryResourceService.getPrescriptionAsPDFUsingGET()
     .subscribe((str: any) => {

     var blob=str;
      //var blob = new Blob([arrBuffer], { type: 'application/pdf' });

      console.log("Blob**"+blob.length);


      this.file.createFile(this.file.externalCacheDirectory, 'new.pdf', true).then(() => {
        console.log('file created' + blob);

        this.file.writeFile(this.file.externalCacheDirectory, 'new.pdf', blob,{replace:true}).then(
          (value) => {
            console.log('file writed' + value);

            this.documentViewer.viewDocument(this.file.externalCacheDirectory+'new.pdf','application/pdf',{});


        });
      });

    });
  }




  // saveAndOpenPdf(pdf: string, filename: string) {
  //   const writeDirectory = this.platform.is('ios') ? this.file.dataDirectory : this.file.externalDataDirectory;
  //   this.file.writeFile(writeDirectory, filename, this.convertBase64ToBlob(pdf, 'application/pdf'), {replace: true})
  //     .then(() => {
  //         this.loading.dismiss();
  //         this.opener.open(writeDirectory + filename, 'application/pdf')
  //             .catch(() => {
  //                 console.log('Error opening pdf file');
  //                 this.loading.dismiss();
  //             });
  //     })
  //     .catch(() => {
  //         console.error('Error writing pdf file');
  //         this.loading.dismiss();
  //     });
  // }

//   convertBaseb64ToBlob(b64Data, contentType): Blob {
//     contentType = contentType || '';
//     const sliceSize = 512;
//     b64Data = b64Data.replace(/^[^,]+,/, '');
//     b64Data = b64Data.replace(/\s/g, '');
//     const byteCharacters = window.atob(b64Data);
//     const byteArrays = [];
//     for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
//          const slice = byteCharacters.slice(offset, offset + sliceSize);
//          const byteNumbers = new Array(slice.length);
//          for (let i = 0; i < slice.length; i++) {
//              byteNumbers[i] = slice.charCodeAt(i);
//          }
//          const byteArray = new Uint8Array(byteNumbers);
//          byteArrays.push(byteArray);
//     }
//    return new Blob(byteArrays, {type: contentType});
// }


 base64ToArrayBuffer(data) {

	var binaryString = data;
	var binaryLen = binaryString.length;
	var bytes = new Uint8Array(binaryLen);
	for (var i = 0; i < binaryLen; i++) {
		var ascii = binaryString.charCodeAt(i);
		bytes[i] = ascii;
	}
	return bytes;
}






  decodeFromUTF(utftext)
  {

    let string = '';
    let i = 0;
    let c, c1, c2, c3;
    c = c1 = c2 = 0;
    while (i < utftext.length) {
        c = utftext.charCodeAt(i);

        if (c < 128) {
            string += String.fromCharCode(c);
            i++;
        } else if ((c > 191) && (c < 224)) {
            c2 = utftext.charCodeAt(i + 1);
            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
            i += 2;
        } else {
            c2 = utftext.charCodeAt(i + 1);
            c3 = utftext.charCodeAt(i + 2);
            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
        }

    } // Whend
console.log("conversion done");
    return string;
  }






      byteToUint8Array(byteArray) {
    const uint8Array = new Uint8Array(byteArray.length);
    for (let i = 0; i < uint8Array.length; i++) {
        uint8Array[i] = byteArray[i];
    }

    return uint8Array;
}




      completeConsultation() {
    this.modalCtrl.dismiss();
  }

      changeHeader() {
    this.slides.getActiveIndex().then(res => {
      console.log(res);

      this.index = res;

      switch (res) {
        case 0:
        case 4:
          this.title = '';
          break;
        case 1:
        case 2:
          this.title = 'Medical Summary';
          break;
        case 3:
          this.title = 'Prescription';
          break;
      }
    });
  }

async create() {
    const modal = await this.modalCtrl.create({
      component: PrescriptionComponent,
      cssClass: 'prescriptionModal'
    });

    modal.onDidDismiss().then(data => {
      this.prescription.push(data.data);
    });

    modal.present();
  }


      close() {
    this.modalCtrl.dismiss();
  }

async history() {}
}
