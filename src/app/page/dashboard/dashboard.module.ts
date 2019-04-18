import { NotificationPageModule } from './../notification/notification.module';
import { NotificationPage } from './../notification/notification.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DashboardPage } from './dashboard.page';


const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardPage],
  entryComponents:[ NotificationPage ]

})
export class DashboardPageModule {}
