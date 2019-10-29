import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from '@ionic/angular';

// import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
// import { map } from 'rxjs/operators';


/**
 * This service is for user store or delete user's login, logout and validations
 * @export
 * @class UserDataService
 */
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  /**
   * Creates an instance of UserDataService.
   * @param {Events} events This property is to get methods from Events
   * @param {Storage} storage This property is to get methods from Storage
   * @memberof UserDataService
   */
  constructor(
    private events: Events,
    private storage: Storage,
    // private http: HttpClient
  ) { }

  /**
   * This property is a variable declarations for user loggin or not
   * @memberof UserDataService
   */
  HAS_LOGGED_IN = 'hasLoggedIn';

  /**
   * This property is a variable declaration for user profile picture's
   * url
   * @memberof UserDataService
   */
  public userPicture;

  // public ROOT_URL = 'http://zencore.zen.com.my:3000';
  // /**
  //  * This method is to set user login.
  //  * Then set email to storage service
  //  * @param {string} email
  //  * @returns {Promise<any>}
  //  * @memberof UserDataService
  //  */
  // login(email: string, password: string): Promise<any> {
  //   return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
  //     this.setUsername(email);
  //     return this.events.publish('user:login');
  //   });
  // }

  // loginDummy(email: string, password: string) {
  //   return this.http.post<any>(this.ROOT_URL + '/api/auth/login', {email, password}).pipe(
  //     map(data => {
  //       if (data && data.access_token) {
  //         localStorage.setItem('access_token', JSON.stringify(data.access_token));
  //       }
  //       return data;
  //     })
  //   );
  // }

  // /**
  //  * This method is to set user logout.
  //  * This will remove username in storage service
  //  * @returns {Promise<any>}
  //  * @memberof UserDataService
  //  */
  // logout(): Promise<any> {
  //   return this.storage.remove(this.HAS_LOGGED_IN).then(() => {
  //     return this.storage.remove('username');
  //   }).then(() => {
  //     this.events.publish('user:logout');
  //   });
  // }


  /**
   * This method is to set email to storage service
   * @param {string} email
   * @returns {Promise<any>}
   * @memberof UserDataService
   */
  setName(email: string): Promise<any> {
    return this.storage.set('email', email);
  }

  /**
   * This method is to get email from storage
   * @returns
   * @memberof UserDataService
   */
  getName() {
    return this.storage.get('email').then((value) => {
      return value;
    });
  }

  // /**
  //  * This method is to set remember me function. It will
  //  * set username and password to session storage
  //  * @param {*} loginData
  //  * @memberof UserDataService
  //  */
  // setRememberMe(loginData) {
  //   localStorage.setItem('username', loginData.username);
  //   localStorage.setItem('password', loginData.password);
  // }

  // /**
  //  * This method is to remove save remember me's username and password
  //  * from session storage
  //  * @param {*} loginData
  //  * @memberof UserDataService
  //  */
  // removeRememberMe(loginData) {
  //   localStorage.removeItem('username');
  //   localStorage.removeItem('password');
  // }

  /**
   * This method is to set forget password. It will
   * notify admin's to reset user's password
   * @param {*} emailData
   * @memberof UserDataService
   */
  forgetPassword(emailData) {
    console.log('forgetPassword');
    console.log(emailData);
    console.log('need to notify superadmin');
  }

  /**
   * This method is to bind value of pictureUrl to userPicture
   * @param {*} pictureUrl
   * @returns
   * @memberof UserDataService
   */
  setUserProfilePicture(pictureUrl) {
    return this.userPicture = pictureUrl;
  }

  /**
   * This method is to get the value of userPicture
   * @returns
   * @memberof UserDataService
   */
  getUserProfilePicture() {
    return this.userPicture;
  }
}
