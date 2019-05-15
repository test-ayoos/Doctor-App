import { AuthGuardService } from './core/guards/auth-guard.service';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: './modules/home/home.module#HomeModule' , canActivate: [AuthGuardService]},
  { path: 'authentication', loadChildren: './modules/authentication/authentication.module#AuthenticationModule' },
  { path: 'user', loadChildren: './modules/user/user.module#UserModule' , canActivate: [AuthGuardService]}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
