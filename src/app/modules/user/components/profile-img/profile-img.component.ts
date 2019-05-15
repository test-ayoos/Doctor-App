import { ModalController } from '@ionic/angular';
import { LogService } from 'src/app/core/services/log.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImageSelectorComponent } from 'src/app/shared/image-selector/image-selector.component';

@Component({
  selector: 'app-profile-img',
  templateUrl: './profile-img.component.html',
  styleUrls: ['./profile-img.component.scss'],
})
export class ProfileImgComponent implements OnInit {

  @Input() image: string;
  @Input() imageContentType: string;

  @Input() defaultImage: string;

  @Output() imageSelectedEvent: EventEmitter<any> = new EventEmitter();

  constructor(
    private log: LogService,
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  async selectImage() {

    const modal = await this.modalController.create({
      component: ImageSelectorComponent,
      cssClass: 'half-height'
    });

    modal.onDidDismiss()
    .then(data => {
      this.image = data.data.imageBase64;
      this.imageContentType = data.data.imageType;

      // Emit Event with image Base64 and imageContentType when image is selected
      this.imageSelectedEvent.emit({
        image: this.image,
        imageContentType: this.imageContentType
      });
    });

    return await modal.present();
  }

}
