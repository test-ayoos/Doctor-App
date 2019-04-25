import { PrescriptionComponent } from './../../shared/component/prescription/prescription.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConsultationPage } from './consultation.page';
import { SharedModule } from 'src/app/shared/component/shared.module';


const routes: Routes = [
  {
    path: '',
    component: ConsultationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ConsultationPage ],
  entryComponents:[PrescriptionComponent]
})
export class ConsultationPageModule {}
