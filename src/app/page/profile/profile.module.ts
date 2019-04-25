import { RatingComponent } from './../../shared/component/rating/rating.component';
import { SharedModule } from '../../shared/component/shared.module';
import { DegreePageModule } from './../degree/degree.module';
import { DegreePage } from './../degree/degree.page';
import { ClinicPage } from './../clinic/clinic.page';
import { ClinicPageModule } from './../clinic/clinic.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DatePickerModule } from 'ionic4-date-picker';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import { ImageSelectorComponent } from 'src/app/shared/component/image-selector/image-selector.component';
import { ProfileOptionComponent } from 'src/app/shared/component/profile-option/profile-option.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    DatePickerModule,
    ClinicPageModule,
    DegreePageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilePage],
  entryComponents:[ClinicPage , DegreePage , ImageSelectorComponent , ProfileOptionComponent,RatingComponent]
})
export class ProfilePageModule {}
