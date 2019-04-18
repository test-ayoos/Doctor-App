import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthInterceptor } from './security/auth-interceptor';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {  GoogleMapsAPIWrapper, AgmCoreModule, InfoWindowManager } from '@agm/core';
import { OAuthModule } from 'angular-oauth2-oidc';
import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    OAuthModule.forRoot(),
    HttpClientModule,
     AgmCoreModule.forRoot({
         apiKey:'AIzaSyCQc2iiem96Es76TEOcPkcSvfHx5wpvs28',
         libraries:['places','geometry']
       })
  ],
  providers: [
    StatusBar,
    Geolocation,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GoogleMapsAPIWrapper,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
}
  ],

  bootstrap: [AppComponent]
  
})
export class AppModule {

}