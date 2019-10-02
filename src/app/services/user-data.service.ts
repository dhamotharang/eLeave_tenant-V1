import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from '@ionic/angular';


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
   * @param {Events} events
   * @param {Storage} storage
   * @memberof UserDataService
   */
  constructor(
    private events: Events,
    private storage: Storage
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

  /**
   * This method is to set user login.
   * Then set username to storage service
   * @param {string} username
   * @returns {Promise<any>}
   * @memberof UserDataService
   */
  login(username: string): Promise<any> {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUsername(username);
      return this.events.publish('user:login');
    });
  }

  /**
   * This method is to set user logout.
   * This will remove username in storage service
   * @returns {Promise<any>}
   * @memberof UserDataService
   */
  logout(): Promise<any> {
    return this.storage.remove(this.HAS_LOGGED_IN).then(() => {
      return this.storage.remove('username');
    }).then(() => {
      this.events.publish('user:logout');
    });
  }


  /**
   * This method is to set username to storage service
   * @param {string} username
   * @returns {Promise<any>}
   * @memberof UserDataService
   */
  setUsername(username: string): Promise<any> {
    // console.log('setUsername: ' + username);
    return this.storage.set('username', username);
  }

  /**
   * This method is to get username from storage
   * @returns
   * @memberof UserDataService
   */
  getUsername() {
    // return 'getUsername';
    return this.storage.get('username').then((value) => {
      // console.log(value);
      return value;
    });
  }

  // getUsername() {
  //   console.log('getUsername');
  //   return this.storage.get('username').then((value) => {
  //     return value;
  //   });

  // }

  /**
   * This method is to set remember me function. It will
   * set username and password to session storage
   * @param {*} loginData
   * @memberof UserDataService
   */
  setRememberMe(loginData) {
    // console.log('setRememberMe');
    // console.log(loginData);
    sessionStorage.setItem('username', loginData.username);
    sessionStorage.setItem('password', loginData.password);
    // localStorage.setItem('username', loginData.username);
    // localStorage.setItem('password', loginData.password);
  }

  /**
   * This method is to remove save remember me's username and password
   * from session storage
   * @param {*} loginData
   * @memberof UserDataService
   */
  removeRememberMe(loginData) {
    // console.log('removeRememberMe');
    // this.storage.remove('user_name');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
    // localStorage.removeItem('username');
    // localStorage.removeItem('password');
  }

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
