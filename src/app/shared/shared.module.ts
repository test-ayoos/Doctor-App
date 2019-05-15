import { ExpandableComponent } from './expandable/expandable.component';
import { Camera } from '@ionic-native/camera/ngx';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ImageSelectorComponent } from './image-selector/image-selector.component';
import { RatingComponent } from './rating/rating.component';
import { CustomInputComponent } from './custom-input/custom-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    ImageSelectorComponent,
    RatingComponent,
    CustomInputComponent,
    ExpandableComponent
  ],
  exports: [
      ImageSelectorComponent,
      RatingComponent,
      CustomInputComponent,
      ExpandableComponent
  ],
  providers:[
    Camera
  ]
})
export class SharedModule {}
