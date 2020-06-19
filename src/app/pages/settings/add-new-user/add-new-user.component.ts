import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { Events } from '@ionic/angular';

import { settingPopoverCtrlr } from '../settings.page';

import { APIService } from '../../../services/shared-service/api.service';

import { InfoPopupService } from '../../../layout/notificationPopup/info-popup.service';
/**
 * This component is to set up Add New User popover from Settings page
 * @export
 * @class AddNewUserComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss'],
})
export class AddNewUserComponent implements OnInit {

  /**
   * Creates an instance of AddNewUserComponent.
   * @param {Events} events This property is to get methods from Events
   * @param {APIService} addUserApiService This property is to get methods from APIService
   * @param {MatSnackBar} snackbar This property is to get methods from MatSnackBar
   * @memberof AddNewUserComponent
   */
  constructor(
    private events: Events,
    private addUserApiService: APIService,
    private addUserInfoPopup: InfoPopupService
  ) { }

  /**
   * This property is to bind new user values
   * @memberof AddNewUserComponent
   */
  public newUser;

  /**
   * This property is to set return value of password validation
   * @memberof AddNewUserComponent
   */
  public errPass = false;

  /**
   * This property is to set return value of error messages
   * @memberof AddNewUserComponent
   */
  public errMsg: any[];

  /**
   * This property is get methods from CryptoJS
   * @memberof AddNewUserComponent
   */
  cryptoJS = require('crypto-js');

  /**
   * This method is to set initial value of properties. It will be
   * executed when Add New User popover is being loaded
   * @memberof AddNewUserComponent
   */
  ngOnInit() {
    this.newUser = {
        name: '',
        email: '',
        role: '',
        password: '',
        password2: ''
      };

  }

  /**
   * This method is to do password validation process, bind values of
   * new user then will dismiss Add New User popover
   * @memberof AddNewUserComponent
   */
  saveNewUser() {
    this.passValidation(this.newUser.password, this.newUser.password2);
    if (!this.passValidation(this.newUser.password, this.newUser.password2)) {
      this.postNewUser();
      this.cancelAddNew();
    }

  }

  /**
   * This method is to post user data into database
   * @memberof AddNewUserComponent
   */
  postNewUser() {
    const newUserData = {
      name: this.newUser.name,
      email: this.newUser.email,
      loginId: this.newUser.email,
      password:  (this.cryptoJS.SHA256(this.newUser.password)).toString(this.cryptoJS.enc.Hex),
      role: this.newUser.role
    };
    this.addUserApiService.postApi(newUserData, '/api/admin/user-manage/sign-up').subscribe(
      data => {
        this.addUserInfoPopup.alertPopup('You have successfully create user', 'alert-success');
      }
    );
  }
  
  /**
   * This method is to do password validation. Validation is being
   * made by checking if first password is match with second password.
   * If success, bind password value. Else, return error.
   * @memberof AddNewUserComponent
   */
  passValidation(p1, p2) {
    if (p1 === p2) {
      this.newUser.password = p1;
      return this.errPass = false;
    } else {
      this.errMsg = [{val: 'Password Mismatch'}];
      return this.errPass = true;
    }
  }

  /**
   * This method is to close add new user popover
   * @memberof AddNewUserComponent
   */
  async cancelAddNew() {
    return await settingPopoverCtrlr.dismiss();
  }

}
