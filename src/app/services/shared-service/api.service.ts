import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { map } from 'rxjs/operators'; 
import { Observable } from 'rxjs';

/**
 * This injectable is to set API services for eLeave tenant
 * @export
 * @class APIService
 */
@Injectable({
  providedIn: 'root'
})
export class APIService {

  /**
   * Creates an instance of APIService.
   * @param {Http} http This property is to bind methods from Http service
   * @memberof APIService
   */
  constructor(
    public http: Http
  ) { }

  /**
   * This property is to declare base url to http request API
   * @memberof APIService
   */
  public ROOT_URL = 'http://zencore.zen.com.my:3001';

  /**
   * This property is to decalre the headers and save it for token
   * authorization
   * @memberof APIService
   */
  public headers =  new Headers();

  /**
   * This method is to pass authorized token to headers
   * @memberof APIService
   */
  headerAuthorization() {
    if ((this.headers as any)._headers.size !== 1) {
      (this.headers as any).append('Authorization', 'JWT ' + JSON.parse(localStorage.getItem('access_token')));
    }
  }

  /**
   * This method is to set http request (get) with assigned path
   * @param {string} address
   * @returns
   * @memberof APIService
   */
  getApi(address: string) {
    this.headerAuthorization();
    return this.http.get(this.ROOT_URL + address, { headers: this.headers })
     .pipe(map((res: Response) => res.json()));
  }


  /**
   * This method is to set http request (patch) with assigned path and body
   * @param {*} patchData input array to be passed
   * @param {string} urlAddress url to be passed
   * @returns
   * @memberof APIService
   */
  patchApi(patchData: any, urlAddress: string) {
    this.headerAuthorization();
    return this.http.patch(this.ROOT_URL + urlAddress, patchData, { headers: this.headers }).pipe(map((res: Response) => res.json()));
  }

  /**
   * This method is to set http request (post) for login authenctication with
   * assigned path
   * @param {*} data
   * @param {string} address
   * @returns
   * @memberof APIService
   */
  postApiLogin(data: any, address: string) {
    return this.http.post(this.ROOT_URL + address, data)
        .pipe(map((res: Response) => res.json()));
  }

  /**
   * This method is to set http request (post) with assigned path
   * and parameters
   * @param {*} data
   * @param {string} address
   * @returns
   * @memberof APIService
   */
  postApi(data: any, address: string) {
    this.headerAuthorization();
    return this.http.post(this.ROOT_URL + address, data, { headers: this.headers })
        .pipe(map((res: Response) => res.json()
        ));
  }

  /**
   * This method is to send request to post API using requested body and address
   * @param {*} obj This parameter will pass object to request body 
   * @param {*} addr This parameter will pass string to request url addresss
   * @returns {Observable<any>}
   * @memberof APIService
   */
  reqPostApi(obj, addr): Observable<any> {
    return this.postApi(obj, addr);
  }

  /**
   * This method is to send request to get API using requested address
   * @param {*} addr This parameter will pass string to request url addresss
   * @returns {Observable<any>}
   * @memberof APIService
   */
  reqGetApi(addr): Observable<any> {
    return this.getApi(addr);
  }

  /**
   * This method is to send request to patch API using requested body and address
   * @param {*} obj This parameter will pass object to request body
   * @param {*} addr This parameter will pass string to request url addresss
   * @returns {Observable<any>}
   * @memberof APIService
   */
  reqPatchApi(obj, addr): Observable<any> {
    return this.patchApi(obj, addr);
  }


  // sendReqToAPI(): Observable<any> {
  //   return this.recentActAPISvs.getApi('/api/admin/activity-log/' + subscriberUpdateInfo.SUBSCRIPTION_GUID);
  // }
}
