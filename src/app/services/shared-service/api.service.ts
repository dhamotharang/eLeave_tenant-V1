import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

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
   * @param {*} data input array to be passed
   * @param {string} address url to be passed 
   * @returns
   * @memberof APIService
   */
  patchApi(data: any, address: string) {
    this.headerAuthorization();
    return this.http.patch(this.ROOT_URL + address, data, { headers: this.headers }).pipe(map((res: Response) => res.json()));
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
}
