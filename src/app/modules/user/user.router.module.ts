import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../user/pages/profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: 'session',
        children: [
          {
            path: '',
            loadChildren: '../user/pages/session/session.module#SessionPageModule'
          }
        ]
      },
      {
        path: 'review',
        children: [
          {
            path: '',
            loadChildren: '../user/pages/review/review.module#ReviewPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/user/profile',
        pathMatch: 'full'
      }
    ],
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule {}
