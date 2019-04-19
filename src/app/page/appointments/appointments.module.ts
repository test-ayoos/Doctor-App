import { InputDropdownComponent } from './../../shared/component/input-dropdown/input-dropdown.component';
import { PrescriptionComponent } from './../../shared/component/prescription/prescription.component';
import { SharedModule } from './../../shared/component/shared.module';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppointmentsPage } from './appointments.page';
import { ConsultationPage } from '../consultation/consultation.page';


const routes: Routes = [
  {
    path: '',
    component: AppointmentsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppointmentsPage , ConsultationPage ],
  entryComponents:[ ConsultationPage , PrescriptionComponent , InputDropdownComponent]
})
export class AppointmentsPageModule {}
