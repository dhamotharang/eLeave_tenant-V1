import { Component, OnInit } from '@angular/core';
import { settingPopoverCtrlr } from '../settings.page';
import { userDummiesData } from '../../../app.component';

import { Validators } from '@angular/forms';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss'],
})
export class AddNewUserComponent implements OnInit {

  constructor(public events: Events) { }

  public newUser;
  private errPass = false;
  public errMsg: any[];

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

  saveNewUser() {
    this.passValidation(this.newUser.password, this.newUser.password2);
    userDummiesData.push(this.newUser);
    this.events.publish('newUserAdded', userDummiesData);
    if (this.errPass === false) {
      this.cancelAddNew();
    }

  }

  passValidation(p1, p2) {
    if (p1 === p2) {
      this.errPass = false;
      return this.newUser.password = p1;
    } else {
      this.errMsg = [{val: 'Password Mismatch'}];
      this.errPass = true;
    }
  }

  async cancelAddNew() {
    return await settingPopoverCtrlr.dismiss();
  }

}
