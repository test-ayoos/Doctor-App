import { SessionSaveComponent } from './../../shared/component/session-save/session-save.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SessionPage } from './session.page';
import { SharedModule } from 'src/app/shared/component/shared.module';

const routes: Routes = [
  {
    path: '',
    component: SessionPage
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
  declarations: [SessionPage],
  entryComponents: [SessionSaveComponent]
})
export class SessionPageModule {}
