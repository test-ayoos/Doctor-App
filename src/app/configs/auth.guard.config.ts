import { OAuthService, JwksValidationHandler, AuthConfig } from 'angular-oauth2-oidc';
import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export const authConfig: AuthConfig = {

    issuer: 'http://35.237.193.86:8080/auth/realms/graeshoppe',
    redirectUri: window.location.origin,
    clientId: 'account',
    scope: 'openid profile email voucher offline_access',
    dummyClientSecret: '9dc04b00-55f1-49b5-88fa-21b401e442dd',
    tokenEndpoint: 'http://35.237.193.86:8080/auth/realms/graeshoppe/protocol/openid-connect/token',
    userinfoEndpoint: 'http://35.237.193.86:8080/auth/realms/graeshoppe/protocol/openid-connect/userinfo',
    oidc: false,
    requireHttps: false
};
@Injectable()
export class AuthGuardConfig {

    constructor(
        private oauthService: OAuthService
    ) {
        this.configureWithNewConfigApi();
    }

    private configureWithNewConfigApi() {

        this.oauthService.configure(authConfig);
        this.oauthService.setStorage(localStorage);
        this.oauthService.tokenValidationHandler = new JwksValidationHandler();
        this.oauthService.loadDiscoveryDocumentAndTryLogin();


        // Optional
        this.oauthService.setupAutomaticSilentRefresh();

        this.oauthService.events.subscribe(e => {
          // tslint:disable-next-line:no-console
          console.debug('oauth/oidc event', e);
        });

        this.oauthService.events
          .pipe(filter(e => e.type === 'session_terminated'))
          .subscribe(e => {
            // tslint:disable-next-line:no-console
            console.debug('Your session has been terminated!');
          });

        this.oauthService.events
          .pipe(filter(e => e.type === 'token_received'))
          .subscribe(e => {
            // this.oauthService.loadUserProfile();
          });
    }
}
