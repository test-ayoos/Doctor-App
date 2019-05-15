import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { AddWorkplaceModalComponent } from './add-workplace-modal/add-workplace-modal.component';
import { AddQualificationModalComponent } from './add-qualification-modal/add-qualification-modal.component';
import { CustomInputComponent } from './../../../shared/custom-input/custom-input.component';
import { MatCommonModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ImageSelectorComponent } from './../../../shared/image-selector/image-selector.component';
import { ProfileReviewComponent } from './profile-review/profile-review.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular/';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileImgComponent } from './profile-img/profile-img.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RatingComponent } from 'src/app/shared/rating/rating.component';
import { SessionSaveComponent } from './session-save/session-save.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    SharedModule
  ],
  exports: [
    ProfileDetailsComponent , ProfileImgComponent , ProfileHeaderComponent , 
    ProfileReviewComponent , AddQualificationModalComponent , AddWorkplaceModalComponent,
    SessionSaveComponent
  ],
  declarations: [
    ProfileDetailsComponent , ProfileImgComponent , ProfileHeaderComponent , 
    ProfileReviewComponent , AddQualificationModalComponent , AddWorkplaceModalComponent,
    SessionSaveComponent
  ],
  entryComponents: [ ImageSelectorComponent , RatingComponent , CustomInputComponent , AddQualificationModalComponent , AddWorkplaceModalComponent]
})
export class ComponentsModule { }
