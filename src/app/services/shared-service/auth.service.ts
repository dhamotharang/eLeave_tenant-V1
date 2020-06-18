import { environment as ENV } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { JwtHelperService } from '@auth0/angular-jwt';

import { map } from 'rxjs/operators';
import { APIService } from './api.service';
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
   * @param {Router} router  This property is get methods from Router
   * @param {HttpClient} httpClient  This property is get methods from HttpClient
   * @param {APIService} authApiService  This property is get methods from APIService
   * @memberof AuthService
   */
  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private authApiService: APIService
  ) { }


  /**
   * This proeperty is to get methods from CryptoJS
   * @memberof AuthService
   */
  CryptoJS = require('crypto-js');

  /**
   * This property is to declare base Url body for http request
   * @memberof AuthService
   */
  // public ROOT_URL = 'https://zencore.zen.com.my:3001';
  public ROOT_URL = ENV.URL_API;


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
  login(emailValue: string, passwordValue: string) {
    const encryptPass = (this.CryptoJS.SHA256(passwordValue)).toString(this.CryptoJS.enc.Hex);
    return this.authApiService.postApiLogin({ loginId: emailValue,  password: encryptPass }, '/api/auth/login/local').pipe(
      map(data => {
        return data;
      })
    );
  }

  /**
   * This method is to check whether the token is authenticated and not yet expired
   * @returns {boolean}
   * @memberof AuthService
   */
  isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired( localStorage.getItem('access_token'));
  }

  /**
   * This method is used to clear out the storage in local and also route to login page
   * @memberof AuthService
   */
  logout(): void {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('access_token');
    this.router.navigateByUrl('/login');
  }

  /**
   * This method is to set remember me function. It will
   * set email and password to session storage
   * @param {*} loginData
   * @memberof UserDataService
   */
  setRememberMe(loginData) {
    localStorage.setItem('email', loginData.email);
    localStorage.setItem('password', loginData.password);
  }

  /**
   * This method is to remove save remember me's email and password
   * from session storage
   * @param {*} loginData
   * @memberof UserDataService
   */
  removeRememberMe(loginData) {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  }
}

