import { LogService } from './log.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { KeycloakAdminClient } from 'keycloak-admin/lib/client';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  kcAdminClient: KeycloakAdminClient;

  constructor(
    private oauthService: OAuthService, private log: LogService,
    private localStorage: LocalStorageService
  ) {
    this.kcAdminClient = new KeycloakAdminClient();
    this.kcAdminClient.setConfig({
      baseUrl: 'http://35.237.193.86:8080/auth'
    });
    this.configureKeycloakAdmin();
  }

  configureKeycloakAdmin() {
    this.kcAdminClient.auth({
      username: 'admin',
      password: 'admin',
      grantType: 'password',
      clientId: 'admin-cli'
    });
  }

  createAccount(user: any, password: string): Promise<void | { id: number }> {
    user.realm = 'graeshoppe';
    user.credentials = [{ type: 'password', value: password }];
    user.attributes = map;
    user.enabled = true;

    return this.kcAdminClient.users.create(user).then(res => {
      this.log.log('Account Created', res);
    });
  }

  async isAuthenticated(): Promise<boolean> {
    return await this.oauthService.hasValidAccessToken();
  }

  authenticate(username: string, password: string): Promise<object> {
    return this.oauthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(
      username,
      password,
      new HttpHeaders()
    );
  }

  getCurrentUserDetails(func) {
    this.log.log('Getting Current User Details From KeyCloak');

    this.oauthService.loadUserProfile().then(profileData => {
      this.log.log('Got User Details', profileData);
      func(profileData);
    });
  }

  updateCurrentUser(keycloakUser: any): Promise<void> {
    this.log.log('Trying to Update', keycloakUser);
    return this.kcAdminClient.users.update(
      {
        id: keycloakUser.sub,
        realm: 'graeshoppe'
      },
      {
        firstName: keycloakUser.name.split(' ')[0],
        lastName: keycloakUser.name.split(' ')[1],
        email: keycloakUser.email
      }
    );
  }

  updateCurrentUserDetails() {

      this.oauthService.loadUserProfile()
      .then(user => {
        this.localStorage.setItem('kuser' , JSON.stringify(user));
      });
  }

  logout() {
    this.oauthService.logOut();
  }
}
