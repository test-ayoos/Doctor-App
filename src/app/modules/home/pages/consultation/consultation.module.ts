import { PrescriptionComponent } from './../../components/prescription/prescription.component';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConsultationPage } from './consultation.page';


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
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ConsultationPage ],
  entryComponents:[PrescriptionComponent]
})
export class ConsultationPageModule {}
