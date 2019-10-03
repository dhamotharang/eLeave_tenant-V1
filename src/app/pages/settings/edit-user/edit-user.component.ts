import { Component, OnInit } from '@angular/core';
import { selectedEditUser, settingPopoverCtrlr } from '../settings.page';

/**
 * This component is to set up Edit User pop over 
 * @export
 * @class EditUserComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {

  /**
   *Creates an instance of EditUserComponent.
   * @memberof EditUserComponent
   */
  constructor() { }

  /**
   * This property is to bind value of user data
   * @memberof EditUserComponent
   */
  public userInfo;

  /**
   * This property is to get data of user to be edited
   * @memberof EditUserComponent
   */
  public initUser;

  /**
   * This property is to set value of user status
   * @memberof EditUserComponent
   */
  public toggleVal;

  /**
   * This method is to set initial value of properties. And
   * it will be executed when this component is being loaded
   * @memberof EditUserComponent
   */
  ngOnInit() {
    this.initUser = selectedEditUser;
    this.userInfo = {...this.initUser, password2: this.initUser.password};
    this.toggleVal = (this.userInfo.status === 'active') ? true : false;
  }

  /**
   * This method is to check user status
   * @memberof EditUserComponent
   */
  checkSettingToggle() {
    this.userInfo.status = (this.toggleVal === true) ? 'inactive' : 'active';
  }

  /**
   * This method is to validate updated password in this coomponent
   * @memberof EditUserComponent
   */
  editPassValidation(pass1, pass2) {
    console.log(pass1);
    console.log(pass2);
    if (pass1 === pass2) {
      return this.userInfo.password = pass1;
    } else {
      console.error ('Password is Mismatch');
      return null;
    }
  }

  /**
   * This method is to bind edited values then close this
   * component
   * @memberof EditUserComponent
   */
  saveEditUser() {
    this.editPassValidation(this.userInfo.password, this.userInfo.password2);
    Object.assign(this.initUser, this.userInfo);
    this.cancelEditUser();
  }

  /**
   * This method is to close this component
   * @memberof EditUserComponent
   */
  async cancelEditUser() {
    return await settingPopoverCtrlr.dismiss();
  }

}
