/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ContactInfoDTO } from '../models/contact-info-dto';
import { DoctorDTO } from '../models/doctor-dto';
import { QualificationDTO } from '../models/qualification-dto';
import { SessionInfoDTO } from '../models/session-info-dto';
import { WorkPlaceDTO } from '../models/work-place-dto';

/**
 * Command Resource
 */
@Injectable({
  providedIn: 'root',
})
class CommandResourceService extends __BaseService {
  static readonly createContactInfoUsingPOSTPath = '/api/commands/contact-infos';
  static readonly updateContactInfoUsingPUTPath = '/api/commands/contact-infos';
  static readonly deleteContactInfoUsingDELETEPath = '/api/commands/contact-infos/{id}';
  static readonly testUsingPOSTPath = '/api/commands/doc';
  static readonly createDoctorUsingPOSTPath = '/api/commands/doctors';
  static readonly updateDoctorUsingPUTPath = '/api/commands/doctors';
  static readonly createQualificationUsingPOSTPath = '/api/commands/qualifications';
  static readonly updateQualificationUsingPUTPath = '/api/commands/qualifications';
  static readonly deleteQualificationUsingDELETEPath = '/api/commands/qualifications';
  static readonly createSessionInfoUsingPOSTPath = '/api/commands/sessionInfo';
  static readonly createWorkPlaceUsingPOSTPath = '/api/commands/work-places';
  static readonly updateWorkPlaceUsingPUTPath = '/api/commands/work-places';
  static readonly deleteWorkPlaceUsingDELETEPath = '/api/commands/work-places';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param contactInfoDTO contactInfoDTO
   * @return OK
   */
  createContactInfoUsingPOSTResponse(contactInfoDTO: ContactInfoDTO): __Observable<__StrictHttpResponse<ContactInfoDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = contactInfoDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/commands/contact-infos`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ContactInfoDTO>;
      })
    );
  }
  /**
   * @param contactInfoDTO contactInfoDTO
   * @return OK
   */
  createContactInfoUsingPOST(contactInfoDTO: ContactInfoDTO): __Observable<ContactInfoDTO> {
    return this.createContactInfoUsingPOSTResponse(contactInfoDTO).pipe(
      __map(_r => _r.body as ContactInfoDTO)
    );
  }

  /**
   * @param contactInfoDTO contactInfoDTO
   * @return OK
   */
  updateContactInfoUsingPUTResponse(contactInfoDTO: ContactInfoDTO): __Observable<__StrictHttpResponse<ContactInfoDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = contactInfoDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/commands/contact-infos`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ContactInfoDTO>;
      })
    );
  }
  /**
   * @param contactInfoDTO contactInfoDTO
   * @return OK
   */
  updateContactInfoUsingPUT(contactInfoDTO: ContactInfoDTO): __Observable<ContactInfoDTO> {
    return this.updateContactInfoUsingPUTResponse(contactInfoDTO).pipe(
      __map(_r => _r.body as ContactInfoDTO)
    );
  }

  /**
   * @param id id
   */
  deleteContactInfoUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/commands/contact-infos/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id id
   */
  deleteContactInfoUsingDELETE(id: number): __Observable<null> {
    return this.deleteContactInfoUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return OK
   */
  testUsingPOSTResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/commands/doc`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @return OK
   */
  testUsingPOST(): __Observable<string> {
    return this.testUsingPOSTResponse().pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param doctorDTO doctorDTO
   * @return OK
   */
  createDoctorUsingPOSTResponse(doctorDTO: DoctorDTO): __Observable<__StrictHttpResponse<DoctorDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = doctorDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/commands/doctors`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DoctorDTO>;
      })
    );
  }
  /**
   * @param doctorDTO doctorDTO
   * @return OK
   */
  createDoctorUsingPOST(doctorDTO: DoctorDTO): __Observable<DoctorDTO> {
    return this.createDoctorUsingPOSTResponse(doctorDTO).pipe(
      __map(_r => _r.body as DoctorDTO)
    );
  }

  /**
   * @param doctorDTO doctorDTO
   * @return OK
   */
  updateDoctorUsingPUTResponse(doctorDTO: DoctorDTO): __Observable<__StrictHttpResponse<DoctorDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = doctorDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/commands/doctors`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DoctorDTO>;
      })
    );
  }
  /**
   * @param doctorDTO doctorDTO
   * @return OK
   */
  updateDoctorUsingPUT(doctorDTO: DoctorDTO): __Observable<DoctorDTO> {
    return this.updateDoctorUsingPUTResponse(doctorDTO).pipe(
      __map(_r => _r.body as DoctorDTO)
    );
  }

  /**
   * @param qualificationDTO qualificationDTO
   * @return OK
   */
  createQualificationUsingPOSTResponse(qualificationDTO: QualificationDTO): __Observable<__StrictHttpResponse<QualificationDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = qualificationDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/commands/qualifications`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<QualificationDTO>;
      })
    );
  }
  /**
   * @param qualificationDTO qualificationDTO
   * @return OK
   */
  createQualificationUsingPOST(qualificationDTO: QualificationDTO): __Observable<QualificationDTO> {
    return this.createQualificationUsingPOSTResponse(qualificationDTO).pipe(
      __map(_r => _r.body as QualificationDTO)
    );
  }

  /**
   * @param qualificationDTO qualificationDTO
   * @return OK
   */
  updateQualificationUsingPUTResponse(qualificationDTO: QualificationDTO): __Observable<__StrictHttpResponse<QualificationDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = qualificationDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/commands/qualifications`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<QualificationDTO>;
      })
    );
  }
  /**
   * @param qualificationDTO qualificationDTO
   * @return OK
   */
  updateQualificationUsingPUT(qualificationDTO: QualificationDTO): __Observable<QualificationDTO> {
    return this.updateQualificationUsingPUTResponse(qualificationDTO).pipe(
      __map(_r => _r.body as QualificationDTO)
    );
  }

  /**
   * @param id id
   */
  deleteQualificationUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/commands/qualifications`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id id
   */
  deleteQualificationUsingDELETE(id: number): __Observable<null> {
    return this.deleteQualificationUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CommandResourceService.CreateSessionInfoUsingPOSTParams` containing the following parameters:
   *
   * - `sessionInfoDTO`: sessionInfoDTO
   *
   * - `monthList`: monthList
   */
  createSessionInfoUsingPOSTResponse(params: CommandResourceService.CreateSessionInfoUsingPOSTParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.sessionInfoDTO;
    (params.monthList || []).forEach(val => {if (val != null) __params = __params.append('monthList', val.toString())});
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/commands/sessionInfo`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CommandResourceService.CreateSessionInfoUsingPOSTParams` containing the following parameters:
   *
   * - `sessionInfoDTO`: sessionInfoDTO
   *
   * - `monthList`: monthList
   */
  createSessionInfoUsingPOST(params: CommandResourceService.CreateSessionInfoUsingPOSTParams): __Observable<null> {
    return this.createSessionInfoUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param workPlaceDTO workPlaceDTO
   * @return OK
   */
  createWorkPlaceUsingPOSTResponse(workPlaceDTO: WorkPlaceDTO): __Observable<__StrictHttpResponse<WorkPlaceDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = workPlaceDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/commands/work-places`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<WorkPlaceDTO>;
      })
    );
  }
  /**
   * @param workPlaceDTO workPlaceDTO
   * @return OK
   */
  createWorkPlaceUsingPOST(workPlaceDTO: WorkPlaceDTO): __Observable<WorkPlaceDTO> {
    return this.createWorkPlaceUsingPOSTResponse(workPlaceDTO).pipe(
      __map(_r => _r.body as WorkPlaceDTO)
    );
  }

  /**
   * @param workPlaceDTO workPlaceDTO
   * @return OK
   */
  updateWorkPlaceUsingPUTResponse(workPlaceDTO: WorkPlaceDTO): __Observable<__StrictHttpResponse<WorkPlaceDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = workPlaceDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/commands/work-places`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<WorkPlaceDTO>;
      })
    );
  }
  /**
   * @param workPlaceDTO workPlaceDTO
   * @return OK
   */
  updateWorkPlaceUsingPUT(workPlaceDTO: WorkPlaceDTO): __Observable<WorkPlaceDTO> {
    return this.updateWorkPlaceUsingPUTResponse(workPlaceDTO).pipe(
      __map(_r => _r.body as WorkPlaceDTO)
    );
  }

  /**
   * @param id id
   */
  deleteWorkPlaceUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/commands/work-places`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id id
   */
  deleteWorkPlaceUsingDELETE(id: number): __Observable<null> {
    return this.deleteWorkPlaceUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CommandResourceService {

  /**
   * Parameters for createSessionInfoUsingPOST
   */
  export interface CreateSessionInfoUsingPOSTParams {

    /**
     * sessionInfoDTO
     */
    sessionInfoDTO: Array<SessionInfoDTO>;

    /**
     * monthList
     */
    monthList: Array<number>;
  }
}

export { CommandResourceService }
