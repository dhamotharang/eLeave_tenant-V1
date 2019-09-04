import { Component, OnInit } from '@angular/core';
import { selectedEditUser, settingPopoverCtrlr } from '../settings.page';
import { userDummiesData } from '../../../app.component';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {

  constructor() { }

  public userInfo = {};
  public initUser = {};
  public toggleVal;

  ngOnInit() {
    this.initUser = selectedEditUser;
    Object.assign(this.userInfo, this.initUser);
    this.toggleVal = (this.userInfo.status === 'active') ? true : false;
  }

  checkSettingToggle() {
    this.userInfo.status = (this.toggleVal === true) ? 'inactive' : 'active';
  }

  saveEditUser() {
    Object.assign(this.initUser, this.userInfo);
    this.cancelEditUser();
  }

  async cancelEditUser() {
    return await settingPopoverCtrlr.dismiss();
  }

}
