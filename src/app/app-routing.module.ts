import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OAuthModule } from 'angular-oauth2-oidc';

const routes: Routes = [
  { path: '', loadChildren: './page/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './page/register/register.module#RegisterPageModule' },
  { path: 'home', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'profile', loadChildren: './page/profile/profile.module#ProfilePageModule' },
  { path: 'review', loadChildren: './page/review/review.module#ReviewPageModule' },
  { path: 'appointment', loadChildren: './page/appointments/appointments.module#AppointmentsPageModule' },
  { path: 'construction', loadChildren: './page/construction/construction.module#ConstructionPageModule' },
  { path: 'consultation', loadChildren: './page/consultation/consultation.module#ConsultationPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
