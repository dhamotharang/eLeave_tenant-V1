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
   * @param {Http} http
   * @memberof APIService
   */
  constructor(
    public http: Http,
  ) { }

  /**
   * This property is to declare base url to http request API
   * @memberof APIService
   */
  public ROOT_URL = 'http://zencore.zen.com.my:3000';


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
    console.log('headerAuthorization');
    if ((this.headers as any)._headers.size !== 1) {
      (this.headers as any).append('Authorization', 'JWT ' + JSON.parse(localStorage.getItem('access_token')));
    }
  }

  /**
   * This method is to get endpoint with assigned path
   * @param {string} address
   * @returns
   * @memberof APIService
   */
  getApi(address: string) {
    this.headerAuthorization();
    return this.http.get(this.ROOT_URL + address, { headers: this.headers })
     .pipe(map((res: Response) => res.json()));
  }
}
