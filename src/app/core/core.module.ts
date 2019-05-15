import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GoogleMapsAPIWrapper, AgmCoreModule } from '@agm/core';
import { AuthInterceptor } from './guards/auth-interceptor';
import { LogService } from './services/log.service';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCommonModule } from '@angular/material/core';
import { KeycloakService } from './services/keycloak.service';
import { DoctorService } from './services/doctor.service';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocationService } from './services/location.service';
import { LocalStorageService } from './services/local-storage.service';
import StorageService from './services/storage.service';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatCommonModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.LOG,
      serverLogLevel: NgxLoggerLevel.OFF
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCQc2iiem96Es76TEOcPkcSvfHx5wpvs28',
      libraries: ['places', 'geometry']
    })
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [
    LogService ,
    KeycloakService ,
    LocationService,
    LocalStorageService,
    GoogleMapsAPIWrapper,
    Geolocation,
    DoctorService ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
