import { Component, OnInit } from '@angular/core';

import { InfoPopupService } from './../../../layout/notificationPopup/info-popup.service';
import { APIService } from './../../../services/shared-service/api.service';

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
   * Creates an instance of EditUserComponent.
   * @memberof EditUserComponent
   */
  constructor(
    private editUserApiSvs: APIService,
    private editUserInfoPopup: InfoPopupService
  ) { }

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
    console.log('initUser: ' + JSON.stringify(this.initUser, null, " "));
    this.userInfo = {...this.initUser, password2: this.initUser.password};
    console.log('userInfo: ' + JSON.stringify(this.userInfo, null, " "));
    this.toggleVal = (this.userInfo.ACTIVATION_FLAG === 1) ? true : false;
  }

  /**
   * This method is to check user status
   * @memberof EditUserComponent
   */
  checkSettingToggle() {
    this.userInfo.ACTIVATION_FLAG = (this.toggleVal === true) ? 1 : 0;
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
    this.reqSaveEditUser(this.initUser);
    this.cancelEditUser();
  }

  /**
   * This method is to close this component
   * @memberof EditUserComponent
   */
  async cancelEditUser() {
    return await settingPopoverCtrlr.dismiss();
  }

  reqSaveEditUser(obj) {
    console.log('req save user obj: ' + JSON.stringify(obj, null, " "));
    this.editUserApiSvs.patchApi({
      userId: obj.USER_GUID,
      email: obj.EMAIL,
      fullname: obj.FULLNAME,
      role: obj.ROLE,
      status: obj.ACTIVATION_FLAG
    }, '/api/admin/user-manage/user-main').subscribe(
      retData => {
        console.log('retData: ' + JSON.stringify(retData, null, " "));
        this.editUserInfoPopup.alertPopup('You have successfully update user profile!', 'alert-success');
      }
    );
  }

}
