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
import { WorkPlaceDTO } from '../models/work-place-dto';
import { QualificationDTO } from '../models/qualification-dto';
import { PageOfReview } from '../models/page-of-review';
import { PageOfSessionInfo } from '../models/page-of-session-info';

/**
 * Query Resource
 */
@Injectable({
  providedIn: 'root',
})
class QueryResourceService extends __BaseService {
  static readonly findContactInfoUsingGETPath = '/api/queries/contact-infos/{searchTerm}';
  static readonly findDoctorUsingGETPath = '/api/queries/doctor/{searchTerm}';
  static readonly findAllWorkPlacesByDoctorIdUsingGETPath = '/api/queries/findworkplacesBydoctorId/{doctorId}';
  static readonly findAllQualificationByDoctorIdUsingGETPath = '/api/queries/qualifications/{doctorId}';
  static readonly findAllQualificationUsingGETPath = '/api/queries/qualifications/{searchTerm}';
  static readonly findAllReviewUsingGETPath = '/api/queries/review';
  static readonly findAllSesionInfoUsingGETPath = '/api/queries/session-infos';
  static readonly findWorkPlaceUsingGETPath = '/api/queries/work-places/{searchTerm}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param searchTerm searchTerm
   * @return OK
   */
  findContactInfoUsingGETResponse(searchTerm: string): __Observable<__StrictHttpResponse<ContactInfoDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/queries/contact-infos/${searchTerm}`,
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
   * @param searchTerm searchTerm
   * @return OK
   */
  findContactInfoUsingGET(searchTerm: string): __Observable<ContactInfoDTO> {
    return this.findContactInfoUsingGETResponse(searchTerm).pipe(
      __map(_r => _r.body as ContactInfoDTO)
    );
  }

  /**
   * @param searchTerm searchTerm
   * @return OK
   */
  findDoctorUsingGETResponse(searchTerm: string): __Observable<__StrictHttpResponse<DoctorDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/queries/doctor/${searchTerm}`,
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
   * @param searchTerm searchTerm
   * @return OK
   */
  findDoctorUsingGET(searchTerm: string): __Observable<DoctorDTO> {
    return this.findDoctorUsingGETResponse(searchTerm).pipe(
      __map(_r => _r.body as DoctorDTO)
    );
  }

  /**
   * @param doctorId doctorId
   * @return OK
   */
  findAllWorkPlacesByDoctorIdUsingGETResponse(doctorId: number): __Observable<__StrictHttpResponse<Array<WorkPlaceDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/queries/findworkplacesBydoctorId/${doctorId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<WorkPlaceDTO>>;
      })
    );
  }
  /**
   * @param doctorId doctorId
   * @return OK
   */
  findAllWorkPlacesByDoctorIdUsingGET(doctorId: number): __Observable<Array<WorkPlaceDTO>> {
    return this.findAllWorkPlacesByDoctorIdUsingGETResponse(doctorId).pipe(
      __map(_r => _r.body as Array<WorkPlaceDTO>)
    );
  }

  /**
   * @param doctorId doctorId
   * @return OK
   */
  findAllQualificationByDoctorIdUsingGETResponse(doctorId: number): __Observable<__StrictHttpResponse<Array<QualificationDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/queries/qualifications/${doctorId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<QualificationDTO>>;
      })
    );
  }
  /**
   * @param doctorId doctorId
   * @return OK
   */
  findAllQualificationByDoctorIdUsingGET(doctorId: number): __Observable<Array<QualificationDTO>> {
    return this.findAllQualificationByDoctorIdUsingGETResponse(doctorId).pipe(
      __map(_r => _r.body as Array<QualificationDTO>)
    );
  }

  /**
   * @param params The `QueryResourceService.FindAllQualificationUsingGETParams` containing the following parameters:
   *
   * - `searchTerm`: searchTerm
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllQualificationUsingGETResponse(params: QueryResourceService.FindAllQualificationUsingGETParams): __Observable<__StrictHttpResponse<Array<QualificationDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/queries/qualifications/${params.searchTerm}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<QualificationDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindAllQualificationUsingGETParams` containing the following parameters:
   *
   * - `searchTerm`: searchTerm
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllQualificationUsingGET(params: QueryResourceService.FindAllQualificationUsingGETParams): __Observable<Array<QualificationDTO>> {
    return this.findAllQualificationUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<QualificationDTO>)
    );
  }

  /**
   * @param params The `QueryResourceService.FindAllReviewUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllReviewUsingGETResponse(params: QueryResourceService.FindAllReviewUsingGETParams): __Observable<__StrictHttpResponse<PageOfReview>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/queries/review`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageOfReview>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindAllReviewUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllReviewUsingGET(params: QueryResourceService.FindAllReviewUsingGETParams): __Observable<PageOfReview> {
    return this.findAllReviewUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageOfReview)
    );
  }

  /**
   * @param params The `QueryResourceService.FindAllSesionInfoUsingGETParams` containing the following parameters:
   *
   * - `searchTerm`: searchTerm
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllSesionInfoUsingGETResponse(params: QueryResourceService.FindAllSesionInfoUsingGETParams): __Observable<__StrictHttpResponse<PageOfSessionInfo>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/queries/session-infos`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageOfSessionInfo>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindAllSesionInfoUsingGETParams` containing the following parameters:
   *
   * - `searchTerm`: searchTerm
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllSesionInfoUsingGET(params: QueryResourceService.FindAllSesionInfoUsingGETParams): __Observable<PageOfSessionInfo> {
    return this.findAllSesionInfoUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageOfSessionInfo)
    );
  }

  /**
   * @param params The `QueryResourceService.FindWorkPlaceUsingGETParams` containing the following parameters:
   *
   * - `searchTerm`: searchTerm
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findWorkPlaceUsingGETResponse(params: QueryResourceService.FindWorkPlaceUsingGETParams): __Observable<__StrictHttpResponse<Array<WorkPlaceDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/queries/work-places/${params.searchTerm}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<WorkPlaceDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindWorkPlaceUsingGETParams` containing the following parameters:
   *
   * - `searchTerm`: searchTerm
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findWorkPlaceUsingGET(params: QueryResourceService.FindWorkPlaceUsingGETParams): __Observable<Array<WorkPlaceDTO>> {
    return this.findWorkPlaceUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<WorkPlaceDTO>)
    );
  }
}

module QueryResourceService {

  /**
   * Parameters for findAllQualificationUsingGET
   */
  export interface FindAllQualificationUsingGETParams {

    /**
     * searchTerm
     */
    searchTerm: string;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for findAllReviewUsingGET
   */
  export interface FindAllReviewUsingGETParams {

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for findAllSesionInfoUsingGET
   */
  export interface FindAllSesionInfoUsingGETParams {

    /**
     * searchTerm
     */
    searchTerm: string;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for findWorkPlaceUsingGET
   */
  export interface FindWorkPlaceUsingGETParams {

    /**
     * searchTerm
     */
    searchTerm: string;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }
}

export { QueryResourceService }
