/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ConsultationRequest } from '../models/consultation-request';
import { DefaultInfoRequest } from '../models/default-info-request';
import { ParamedicalExaminationRequest } from '../models/paramedical-examination-request';
import { PrescriptionRequest } from '../models/prescription-request';
import { ContactInfoDTO } from '../models/contact-info-dto';
import { DoctorDTO } from '../models/doctor-dto';
import { InitiateMedicalSummaryRequest } from '../models/initiate-medical-summary-request';
import { QualificationDTO } from '../models/qualification-dto';
import { SessionInfoDTO } from '../models/session-info-dto';
import { ReservedSlotDTO } from '../models/reserved-slot-dto';
import { WorkPlaceDTO } from '../models/work-place-dto';

/**
 * Command Resource
 */
@Injectable({
  providedIn: 'root',
})
class CommandResourceService extends __BaseService {
  static readonly collectConsultationInformationsUsingPOSTPath = '/api/commands/collect-Consultation-Info/{taskId}';
  static readonly collectInformationsUsingPOSTPath = '/api/commands/collect-Default-info/{taskId}';
  static readonly collectParamedicalExaminationInformationsUsingPOSTPath = '/api/commands/collect-ParamedicalExamination-Info/{taskId}';
  static readonly collectPrescriptionInformationsUsingPOSTPath = '/api/commands/collect-Prescription-Info/{taskId}';
  static readonly createContactInfoUsingPOSTPath = '/api/commands/contact-infos';
  static readonly updateContactInfoUsingPUTPath = '/api/commands/contact-infos';
  static readonly deleteContactInfoUsingDELETEPath = '/api/commands/contact-infos/{id}';
  static readonly testUsingPOSTPath = '/api/commands/doc';
  static readonly createDoctorUsingPOSTPath = '/api/commands/doctors';
  static readonly updateDoctorUsingPUTPath = '/api/commands/doctors';
  static readonly initiateUsingPOSTPath = '/api/commands/initiate-Consultation';
  static readonly createQualificationUsingPOSTPath = '/api/commands/qualifications';
  static readonly updateQualificationUsingPUTPath = '/api/commands/qualifications';
  static readonly deleteQualificationUsingDELETEPath = '/api/commands/qualifications';
  static readonly createSessionInfoUsingPOSTPath = '/api/commands/sessionInfo';
  static readonly createSlotUsingPOSTPath = '/api/commands/slot/{date}/{doctorId}';
  static readonly uploadPrescriptionUsingPOSTPath = '/api/commands/upload-File';
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
   * @param params The `CommandResourceService.CollectConsultationInformationsUsingPOSTParams` containing the following parameters:
   *
   * - `taskId`: taskId
   *
   * - `consultationRequest`: consultationRequest
   */
  collectConsultationInformationsUsingPOSTResponse(params: CommandResourceService.CollectConsultationInformationsUsingPOSTParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.consultationRequest;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/commands/collect-Consultation-Info/${params.taskId}`,
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
   * @param params The `CommandResourceService.CollectConsultationInformationsUsingPOSTParams` containing the following parameters:
   *
   * - `taskId`: taskId
   *
   * - `consultationRequest`: consultationRequest
   */
  collectConsultationInformationsUsingPOST(params: CommandResourceService.CollectConsultationInformationsUsingPOSTParams): __Observable<null> {
    return this.collectConsultationInformationsUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CommandResourceService.CollectInformationsUsingPOSTParams` containing the following parameters:
   *
   * - `taskId`: taskId
   *
   * - `defaultInfoRequest`: defaultInfoRequest
   */
  collectInformationsUsingPOSTResponse(params: CommandResourceService.CollectInformationsUsingPOSTParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.defaultInfoRequest;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/commands/collect-Default-info/${params.taskId}`,
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
   * @param params The `CommandResourceService.CollectInformationsUsingPOSTParams` containing the following parameters:
   *
   * - `taskId`: taskId
   *
   * - `defaultInfoRequest`: defaultInfoRequest
   */
  collectInformationsUsingPOST(params: CommandResourceService.CollectInformationsUsingPOSTParams): __Observable<null> {
    return this.collectInformationsUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CommandResourceService.CollectParamedicalExaminationInformationsUsingPOSTParams` containing the following parameters:
   *
   * - `taskId`: taskId
   *
   * - `paramedicalExaminationRequest`: paramedicalExaminationRequest
   */
  collectParamedicalExaminationInformationsUsingPOSTResponse(params: CommandResourceService.CollectParamedicalExaminationInformationsUsingPOSTParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.paramedicalExaminationRequest;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/commands/collect-ParamedicalExamination-Info/${params.taskId}`,
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
   * @param params The `CommandResourceService.CollectParamedicalExaminationInformationsUsingPOSTParams` containing the following parameters:
   *
   * - `taskId`: taskId
   *
   * - `paramedicalExaminationRequest`: paramedicalExaminationRequest
   */
  collectParamedicalExaminationInformationsUsingPOST(params: CommandResourceService.CollectParamedicalExaminationInformationsUsingPOSTParams): __Observable<null> {
    return this.collectParamedicalExaminationInformationsUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CommandResourceService.CollectPrescriptionInformationsUsingPOSTParams` containing the following parameters:
   *
   * - `taskId`: taskId
   *
   * - `prescriptionRequest`: prescriptionRequest
   */
  collectPrescriptionInformationsUsingPOSTResponse(params: CommandResourceService.CollectPrescriptionInformationsUsingPOSTParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.prescriptionRequest;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/commands/collect-Prescription-Info/${params.taskId}`,
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
   * @param params The `CommandResourceService.CollectPrescriptionInformationsUsingPOSTParams` containing the following parameters:
   *
   * - `taskId`: taskId
   *
   * - `prescriptionRequest`: prescriptionRequest
   */
  collectPrescriptionInformationsUsingPOST(params: CommandResourceService.CollectPrescriptionInformationsUsingPOSTParams): __Observable<null> {
    return this.collectPrescriptionInformationsUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as null)
    );
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
   * @param medicalSummaryRequest medicalSummaryRequest
   * @return OK
   */
  initiateUsingPOSTResponse(medicalSummaryRequest: InitiateMedicalSummaryRequest): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = medicalSummaryRequest;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/commands/initiate-Consultation`,
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
   * @param medicalSummaryRequest medicalSummaryRequest
   * @return OK
   */
  initiateUsingPOST(medicalSummaryRequest: InitiateMedicalSummaryRequest): __Observable<string> {
    return this.initiateUsingPOSTResponse(medicalSummaryRequest).pipe(
      __map(_r => _r.body as string)
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
   *
   * @return OK
   */
  createSessionInfoUsingPOSTResponse(params: CommandResourceService.CreateSessionInfoUsingPOSTParams): __Observable<__StrictHttpResponse<Array<SessionInfoDTO>>> {
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
        return _r as __StrictHttpResponse<Array<SessionInfoDTO>>;
      })
    );
  }
  /**
   * @param params The `CommandResourceService.CreateSessionInfoUsingPOSTParams` containing the following parameters:
   *
   * - `sessionInfoDTO`: sessionInfoDTO
   *
   * - `monthList`: monthList
   *
   * @return OK
   */
  createSessionInfoUsingPOST(params: CommandResourceService.CreateSessionInfoUsingPOSTParams): __Observable<Array<SessionInfoDTO>> {
    return this.createSessionInfoUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as Array<SessionInfoDTO>)
    );
  }

  /**
   * @param params The `CommandResourceService.CreateSlotUsingPOSTParams` containing the following parameters:
   *
   * - `doctorId`: doctorId
   *
   * - `date`: date
   *
   * @return OK
   */
  createSlotUsingPOSTResponse(params: CommandResourceService.CreateSlotUsingPOSTParams): __Observable<__StrictHttpResponse<Array<ReservedSlotDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/commands/slot/${params.date}/${params.doctorId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ReservedSlotDTO>>;
      })
    );
  }
  /**
   * @param params The `CommandResourceService.CreateSlotUsingPOSTParams` containing the following parameters:
   *
   * - `doctorId`: doctorId
   *
   * - `date`: date
   *
   * @return OK
   */
  createSlotUsingPOST(params: CommandResourceService.CreateSlotUsingPOSTParams): __Observable<Array<ReservedSlotDTO>> {
    return this.createSlotUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as Array<ReservedSlotDTO>)
    );
  }

  /**
   * @param file file
   * @return OK
   */
  uploadPrescriptionUsingPOSTResponse(file: Blob): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers.append('Content-Type', 'multipart/form-data');
    let __formData = new FormData();
    __body = __formData;
   if(file !== null && typeof file !== "undefined") { __formData.append('file', file as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/commands/upload-File`,
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
   * @param file file
   * @return OK
   */
  uploadPrescriptionUsingPOST(file: Blob): __Observable<string> {
    return this.uploadPrescriptionUsingPOSTResponse(file).pipe(
      __map(_r => _r.body as string)
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
   * Parameters for collectConsultationInformationsUsingPOST
   */
  export interface CollectConsultationInformationsUsingPOSTParams {

    /**
     * taskId
     */
    taskId: string;

    /**
     * consultationRequest
     */
    consultationRequest: ConsultationRequest;
  }

  /**
   * Parameters for collectInformationsUsingPOST
   */
  export interface CollectInformationsUsingPOSTParams {

    /**
     * taskId
     */
    taskId: string;

    /**
     * defaultInfoRequest
     */
    defaultInfoRequest: DefaultInfoRequest;
  }

  /**
   * Parameters for collectParamedicalExaminationInformationsUsingPOST
   */
  export interface CollectParamedicalExaminationInformationsUsingPOSTParams {

    /**
     * taskId
     */
    taskId: string;

    /**
     * paramedicalExaminationRequest
     */
    paramedicalExaminationRequest: ParamedicalExaminationRequest;
  }

  /**
   * Parameters for collectPrescriptionInformationsUsingPOST
   */
  export interface CollectPrescriptionInformationsUsingPOSTParams {

    /**
     * taskId
     */
    taskId: string;

    /**
     * prescriptionRequest
     */
    prescriptionRequest: Array<PrescriptionRequest>;
  }

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

  /**
   * Parameters for createSlotUsingPOST
   */
  export interface CreateSlotUsingPOSTParams {

    /**
     * doctorId
     */
    doctorId: number;

    /**
     * date
     */
    date: string;
  }
}

export { CommandResourceService }
