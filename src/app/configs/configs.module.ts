import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardConfig } from './auth.guard.config';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OAuthModule.forRoot(),
  ],
  providers:[AuthGuardConfig],
})
export class ConfigsModule {

  constructor(
    private a: AuthGuardConfig
  ) {}
}
