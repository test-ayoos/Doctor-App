import { LocalStorageService } from './local-storage.service';
import { QualificationDTO } from './../../api/models/qualification-dto';
import { WorkPlaceDTO } from 'src/app/api/models';
import { LogService } from './log.service';
import { KeycloakService } from './keycloak.service';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { DoctorDTO } from './../../api/models/doctor-dto';
import { Injectable } from '@angular/core';
import { QueryResourceService } from 'src/app/api/services';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {


  constructor(
    private queryResourceService: QueryResourceService,
    private localStorage: LocalStorageService ,
    private log: LogService
  ) {}

  /**
   *  Get the current Doctor details from Doctor Microservice
   *  Using Keycloak username
   */
  getCurrentDoctorDetails(username: string , func) {

    this.log.log('Getting Doctor Details From Doctor Micro Service using id' , username);

    return this.queryResourceService
    .findDoctorUsingGETResponse(username)
    .subscribe(func);
  }

  /**
   *  Get the current Doctor Workplaces from Doctor Microservice
   *  Using Doctor id
   */
  getCurrentDoctorWorkPlaces(username: string , func) {

    this.log.log('Getting Doctor Workplaces From Doctor Micro Service using id' , username);

    return this.queryResourceService.findWorkPlaceUsingGET({searchTerm: username + ''})
      .subscribe(func);
  }

  /**
   *  Get the current Doctor Qualification from Doctor Microservice
   *  Using Doctor id
   */
  getCurrentDoctorQualification(username: string , func) {

    this.log.log('Getting Doctor Qualifications From Doctor Micro Service using id' , username);

    this.queryResourceService.findAllQualificationUsingGET({searchTerm: username + ''})
      .subscribe(func);
  }


  getCurrentSessions(username: string , workplaceId: number ,  func) {
    this.log.log('Getting Doctor Sessions From Doctor Micro Service using id' , username);

    this.queryResourceService
    .findAllSesionInfoByDoctorsWorkPlaceUsingGET({
      workPlaceId: workplaceId,
      doctorId: username
    })
    .subscribe(func);
  }

  updateCurrentSessions(func) {
    this.localStorage.getItem('doctor')
    .subscribe(doc => {
      this.localStorage.getItem('workplaces')
      .subscribe(workplaces => {
        for (let workplace of JSON.parse(workplaces)) {
          console.log(workplace);
          this.queryResourceService.findAllSesionInfoByDoctorsWorkPlaceUsingGET(
            {doctorId: JSON.parse(doc).doctorId , workPlaceId: workplace.id})
          .subscribe(
            sessions => {
              console.log('Updating Sessions for workplace ' , workplace.id , 'GOT ' , sessions);
              this.localStorage.setItem('sessions' + workplace.id , JSON.stringify(sessions));
          });
        }
        func();
      });
    });
  }
  /**
   *  Update the Observalble for Doctor
   *  Using Keycloak username
   *  Just Calls the Above function
   */
  updateCurrentDoctorDetails(username: string) {

      this.queryResourceService.findDoctorUsingGETResponse(username)
      .subscribe(doc => {
        this.log.log('Getting Doctor Details From Doctor Micro Service using id' , username);
        this.localStorage.setItem('doctor' , JSON.stringify(doc.body));
      });

  }

  /**
   *  Update the Observalble for Workplaces
   *  Using doctor id
   *  Just Calls the Above function
   */
  updateCurrentDoctorWorkPlaces() {
    this.localStorage.getItem('doctor')
    .subscribe(doc => {
     this.queryResourceService.findWorkPlaceUsingGET({searchTerm: JSON.parse(doc).doctorId + ''})
     .subscribe(workplaces => {
       this.localStorage.setItem('workplaces' , JSON.stringify(workplaces));
     });
    });
  }

  /**
   *  Update the Observalble for Qualification
   *  Using doctor id
   *  Just Calls the Above function
   */
  updateCurrentDoctorQualifications() {
   this.localStorage.getItem('doctor')
   .subscribe(doc => {
     console.log(JSON.parse(doc).doctorId);
    this.queryResourceService.findAllQualificationUsingGET(JSON.parse(doc).doctorId)
    .subscribe(qualifications => {
      console.log('Got Qualifications' , qualifications);
      this.localStorage.setItem('qualifications' , JSON.stringify(qualifications));
    })
   })
  }
}
