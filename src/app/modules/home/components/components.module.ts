import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular/';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionComponent } from './prescription/prescription.component';
import { InputDropdownComponent } from './input-dropdown/input-dropdown.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  exports: [PrescriptionComponent , InputDropdownComponent],
  declarations: [PrescriptionComponent , InputDropdownComponent],
})
export class ComponentsModule { }
