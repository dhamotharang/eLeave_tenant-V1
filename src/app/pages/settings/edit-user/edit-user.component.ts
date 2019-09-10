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
    console.log(this.userInfo);
    this.userInfo.password2 = this.userInfo.password;
    this.toggleVal = (this.userInfo.status === 'active') ? true : false;
  }
  checkSettingToggle() {
    this.userInfo.status = (this.toggleVal === true) ? 'inactive' : 'active';
  }

  editPassValidation(p1, p2) {
    console.log(p1);
    console.log(p2);
    if (p1 === p2) {
      return this.userInfo.password = p1;
    } else {
      console.error ('Password Mismatch');
      return null;
    }
  }

  saveEditUser() {
    this.editPassValidation(this.userInfo.password1, this.userInfo.password2);
    Object.assign(this.initUser, this.userInfo);
    this.cancelEditUser();
  }

  async cancelEditUser() {
    return await settingPopoverCtrlr.dismiss();
  }

}
