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

  public userInfo;
  public initUser;
  public toggleVal;

  ngOnInit() {
    this.initUser = selectedEditUser;
    console.log(this.initUser);
    // Object.assign(this.userInfo, this.initUser);
    this.userInfo = {...this.initUser, password2: this.initUser.password};
    console.log(this.userInfo);
    // this.userInfo.password2 = this.userInfo.password;
    this.toggleVal = (this.userInfo.status === 'active') ? true : false;
  }

  checkSettingToggle() {
    this.userInfo.status = (this.toggleVal === true) ? 'inactive' : 'active';
  }

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

  saveEditUser() {
    this.editPassValidation(this.userInfo.password, this.userInfo.password2);
    Object.assign(this.initUser, this.userInfo);
    this.cancelEditUser();
  }

  async cancelEditUser() {
    return await settingPopoverCtrlr.dismiss();
  }

}
