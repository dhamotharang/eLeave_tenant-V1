import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

/**
 * This injectable is to set authentication services for eLeave tenant
 * @export
 * @class AuthService
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * Creates an instance of AuthService.
   * @param {Router} router
   * @param {HttpClient} httpClient
   * @memberof AuthService
   */
  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { }

  /**
   * This property is to declare base Url body for http request
   * @memberof AuthService
   */
  public ROOT_URL = 'http://zencore.zen.com.my:3000';

  /**
   * This method is for execute login API.
   * It will return the user's access_token (token) and expires_in (timestamp)
   * @param {string} email
   * @param {string} password
   * @returns
   * @memberof AuthService
   */
  login(email: string, password: string) {
    return this.httpClient.post<any>(this.ROOT_URL + '/api/auth/login', {email, password}).pipe(
      map(data => {
        if (data && data.access_token) {
          localStorage.setItem('access_token', JSON.stringify(data.access_token));
        }
        return data;
      })
    );
  }

  /**
   * This method is to check if the access token is not empty. Means
   * it's logged on
   * @returns {boolean}
   * @memberof AuthService
   */
  loggedInStatus(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }

  /**
   * This method is used to clear out the storage in local and also route to login page
   * @memberof AuthService
   */
  logout(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('access_token');
    this.router.navigateByUrl('/login');
  }

  /**
   * This method is to set remember me function. It will
   * set username and password to session storage
   * @param {*} loginData
   * @memberof UserDataService
   */
  setRememberMe(loginData) {
    localStorage.setItem('username', loginData.username);
    localStorage.setItem('password', loginData.password);
  }

  /**
   * This method is to remove save remember me's username and password
   * from session storage
   * @param {*} loginData
   * @memberof UserDataService
   */
  removeRememberMe(loginData) {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }
}

