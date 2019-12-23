
import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

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
   *Creates an instance of EditUserComponent.
   * @param {APIService} editUserApiSvs This property is go get methods from APIService
   * @param {InfoPopupService} editUserInfoPopup This property is go get methods from InfoPopupService
   * @memberof EditUserComponent
   */
  constructor(
    private editUserApiSvs: APIService,
    private editUserInfoPopup: InfoPopupService
  ) { }

  /**
   * This property is to get methods from AlertController
   * @private
   * @memberof EditUserComponent
   */
  private editUserAlert = new AlertController();

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
   * This property is to bind deactivation value
   * @memberof EditUserComponent
   */
  public confirmDeactive;

  /**
   * This method is to set initial value of properties. And
   * it will be executed when this component is being loaded
   * @memberof EditUserComponent
   */
  ngOnInit() {
    this.initUser = selectedEditUser;
    this.userInfo = {...this.initUser, password2: this.initUser.password};
    this.toggleVal = (this.userInfo.ACTIVATION_FLAG === 1) ? true : false;
  }

  /**
   * This method is to check user status
   * @memberof EditUserComponent
   */
  checkSettingToggle() {
    this.confirmDeactive = this.toggleVal;
    this.userInfo.ACTIVATION_FLAG = (this.toggleVal === true) ? 1 : 0;
  }

  // async confirmDeactivePopover() {
  //   const confirmDeactive = await this.editUserAlert.create({
  //     header: 'Confirmation',
  //     message: 'Are you sure want to deactive this user? Please fill up your reason',
  //     inputs: [
  //       {
  //         name: 'inactiveSubscription',
  //         type: 'text',
  //         placeholder: 'Reason...'
  //       }
  //     ],
  //     cssClass: 'alert-warning-confirm',
  //     buttons: this.confirmDeactivePopoverButtons()
  //   });
  // }

  // confirmDeactivePopoverButtons() {
  //   return [
  //     {
  //       text: 'Cancel',
  //       role: 'cancel',
  //       handler: () => {
  //         console.log('cancel')
  //       }
  //     },
  //     {
  //       text: 'Okay',
  //       handler: (data) => {
  //         this.inactiveMsg = 'This subscription has been deactivated by salesperson. ';
  //         this.inactiveReason = data.inactiveSubscription;
  //         document.getElementById('reasonTextId').hidden = false;
  //         document.getElementById('reactivesubsnotice').hidden = false;
  //         this.confirmOpt = true;
  //         this.statusLog('Subscriptions has been deactivated by salesperson. Reason: ' + data.inactiveSubscription);
  //       }
  //     }
  //   ]

  // }

  /**
   * This method is to validate updated password in this coomponent
   * @memberof EditUserComponent
   */
  editPassValidation(pass1, pass2) {
    if (pass1 === pass2) {
      return this.userInfo.password = pass1;
    } else {
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

  /**
   * This method is to send request to API to save edited user
   * @param {*} obj
   * @memberof EditUserComponent
   */
  reqSaveEditUser(obj) {
    this.editUserApiSvs.patchApi({
      userId: obj.USER_GUID,
      email: obj.EMAIL,
      fullname: obj.FULLNAME,
      role: obj.ROLE,
      status: obj.ACTIVATION_FLAG
    }, '/api/admin/user-manage/user-main').subscribe(
      retData => {
        this.editUserInfoPopup.alertPopup('You have successfully update user profile', 'alert-success');
      }
    );
  }

}
