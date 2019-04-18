import { SharedModule } from '../../shared/component/shared.module';
import { DataLayerManager } from '@agm/core';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClinicPage } from './clinic.page';

const routes: Routes = [

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [ClinicPage],
  exports:[ClinicPage],
  providers: [ 
    DataLayerManager
 ]
})
export class ClinicPageModule {}
