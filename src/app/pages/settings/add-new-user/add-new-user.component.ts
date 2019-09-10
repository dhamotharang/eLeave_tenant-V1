import { Component, OnInit } from '@angular/core';
import { settingPopoverCtrlr } from '../settings.page';
import { userDummiesData } from '../../../app.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss'],
})
export class AddNewUserComponent implements OnInit {

  constructor() { }

  public newUser;

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
    console.log(userDummiesData);
    this.cancelAddNew();
  }

  passValidation(p1, p2) {
    console.log(p1);
    console.log(p2);
    if (p1 === p2) {
      return this.newUser.password = p1;
    } else {
      console.error ('Password Mismatch');
      return null;
    }
  }

  async cancelAddNew() {
    return await settingPopoverCtrlr.dismiss();
  }

}
