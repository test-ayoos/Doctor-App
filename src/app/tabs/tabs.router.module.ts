import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      // {
      //   path: 'appointments',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: '../page/appointments/appointments.module#AppointmentsPageModule'
      //     }
      //   ]
      // },
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: '../page/dashboard/dashboard.module#DashboardPageModule'
          }
        ]
      },
      // {
      //   path: 'patients',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: '../page/patients/patients.module#PatientsPageModule'
      //     }
      //   ]
      // },
      {
        path: '',
        redirectTo: '/home/tabs/dashboard',
        pathMatch: 'full'
      }
    ], 
  },

  {
    path: '',
    redirectTo: '/home/tabs/dashboard',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
