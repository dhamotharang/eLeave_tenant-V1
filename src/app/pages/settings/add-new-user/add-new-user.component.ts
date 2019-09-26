import { Component, OnInit } from '@angular/core';
import { settingPopoverCtrlr } from '../settings.page';
import { userDummiesData } from '../../../app.component';

import { Validators } from '@angular/forms';
import { Events } from '@ionic/angular';

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
   *Creates an instance of AddNewUserComponent.
   * @param {Events} events
   * @memberof AddNewUserComponent
   */
  constructor(
    private events: Events
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
  private errPass = false;

  /**
   * This property is to set return value of error messages
   * @memberof AddNewUserComponent
   */
  public errMsg: any[];

  /**
   * This method is to set initial value of properties. It will be
   * executed when Add New User popover is being loaded
   * @memberof AddNewUserComponent
   */
  ngOnInit() {
    this.newUser = {
        username: '',
        email: '',
        role: '',
        status: 'active',
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
    userDummiesData.push(this.newUser);
    this.events.publish('newUserAdded', userDummiesData);
    if (this.errPass === false) {
      this.cancelAddNew();
    }

  }

  /**
   * This method is to do password validation. Validation is being
   * made by checking if first password is match with second password.
   * If success, bind password value. Else, return error.
   * @memberof AddNewUserComponent
   */
  passValidation(p1, p2) {
    if (p1 === p2) {
      this.errPass = false;
      return this.newUser.password = p1;
    } else {
      this.errMsg = [{val: 'Password Mismatch'}];
      this.errPass = true;
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
