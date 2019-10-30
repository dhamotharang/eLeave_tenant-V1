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
   * @param {Events} events This property is to get methods from Events
   * @param {Storage} storage This property is to get methods from Storage
   * @memberof UserDataService
   */
  constructor(
    private events: Events,
    private storage: Storage,
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
