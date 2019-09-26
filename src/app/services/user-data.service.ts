import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from '@ionic/angular';


/**
 * Service for user validation
 *
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
    public events: Events,
    public storage: Storage
  ) { }

  
  /**
   * Variable decalration
   *
   * @memberof UserDataService
   */
  HAS_LOGGED_IN = 'hasLoggedIn';


  /**
   * To user login
   * Set username to storage service
   * 
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
   * To set user logout
   * Remove username in storage servicd
   *
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
   * Function to set username to service
   *
   * @param {string} username
   * @returns {Promise<any>}
   * @memberof UserDataService
   */
  setUsername(username: string): Promise<any> {
    console.log('setUsername: ' + username);
    return this.storage.set('username', username);
  }

  getUsername() {
    console.log('getUsernameval');
    // return 'getUsername';
    return this.storage.get('username').then((value) => {
      console.log(value);
      return value;
    });
  }

  // getUsername() {
  //   console.log('getUsername');
  //   return this.storage.get('username').then((value) => {
  //     return value;
  //   });

  // }

  setRememberMe(loginData) {
    console.log('setRememberMe');
    console.log(loginData);
    localStorage.setItem('username', loginData.username);
    localStorage.setItem('password', loginData.password);
  }

  removeRememberMe(loginData) {
    console.log('removeRememberMe');
    // this.storage.remove('user_name');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  forgetPassword(emailData) {
    console.log('forgetPassword');
    console.log(emailData);
    console.log('need to notify superadmin');
  }
}
