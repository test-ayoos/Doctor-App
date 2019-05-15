import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './tabs/home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: '../home/pages/dashboard/dashboard.module#DashboardPageModule'
          }
        ]
      },

      {
        path: 'appointments',
        children: [
          {
            path: '',
            loadChildren: '../home/pages/appointments/appointments.module#AppointmentsPageModule'
          }
        ]
      },

      {
        path: 'consultation',
        children: [
          {
            path: '',
            loadChildren: '../home/pages/consultation/consultation.module#ConsultationPageModule'
          }
        ]
      },

      {
        path: '',
        redirectTo: '/home/dashboard',
        pathMatch: 'full'
      }
    ],
  },

  {
    path: '',
    redirectTo: '/home/dashboard',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
