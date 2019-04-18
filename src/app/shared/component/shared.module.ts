import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { InputDropdownComponent} from './input-dropdown/input-dropdown.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { ProfileOptionComponent } from './profile-option/profile-option.component';
import { ImageSelectorComponent } from './image-selector/image-selector.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    InputDropdownComponent,
    PrescriptionComponent,
    ProfileOptionComponent,
    ImageSelectorComponent,
    RatingComponent
  ],
  exports: [
      InputDropdownComponent,
      PrescriptionComponent,
      ProfileOptionComponent,
      ImageSelectorComponent,
      RatingComponent
  ]
})
export class SharedModule {}
