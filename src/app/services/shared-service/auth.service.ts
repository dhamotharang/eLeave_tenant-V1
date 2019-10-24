import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { JwtHelperService } from '@auth0/angular-jwt';

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
    private httpClient: HttpClient,
    // public jwtHelper: JwtHelperService
  ) { }


  CryptoJS = require('crypto-js');

  /**
   * This property is to declare base Url body for http request
   * @memberof AuthService
   */
  public ROOT_URL = 'http://zencore.zen.com.my:3000';


  /**
   * This property is to use service from JwtHelperService
   * @type {JwtHelperService}
   * @memberof AuthService
   */
  public jwtHelper: JwtHelperService = new JwtHelperService();
  /**
   * This method is for execute login API.
   * It will return the user's access_token (token) and expires_in (timestamp)
   * @param {string} email
   * @param {string} password
   * @returns
   * @memberof AuthService
   */
  login(email: string, password: string) {
    const encryptPass = this.CryptoJS.AES.encrypt(password, 'secret key 123');
    console.log('login encryptedPass: ' + encryptPass);
    const decryptPass = (this.CryptoJS.AES.decrypt(encryptPass.toString(), 'secret key 123')).toString(this.CryptoJS.enc.Utf8);
    
    console.log('login password:    "' + password + '"');
    console.log('login decryptPass: "' + decryptPass + '"');
 
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
   * @memberof AuthService
   */
  logInStatus() {
    // if ( localStorage.getItem('access_token') !== null ) {
    //   return true;
    // } else {
    //   this.loginStatusInvalid();
    // }
    return (localStorage.getItem('access_token') !== null);
  }

  /**
   * This method is to check whether the token is authenticated and not yet expired
   * @returns {boolean}
   * @memberof AuthService
   */
  isAuthenticated(): boolean {
    // return localStorage.getItem('access_token') != null && !this.isTokenExpired();
    return !this.jwtHelper.isTokenExpired( localStorage.getItem('access_token'));
  }

  // simulate jwt token is valid
  // refer https://github.com/theo4u/angular4-auth/blob/master/src/app/helpers/jwt-helper.ts
  /**
   * This method is to check token expired
   * @returns {boolean}
   * @memberof AuthService
   */
  isTokenExpired(): boolean {
    return false;
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
    // const tempPass = this.CryptoJS.AES.encrypt(loginData.password, 'secret key 123');
    // console.log('remember me password: ' + tempPass);
    // localStorage.setItem('password', tempPass);
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

