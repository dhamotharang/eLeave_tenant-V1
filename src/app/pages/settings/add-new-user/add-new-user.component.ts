import { Component, OnInit } from '@angular/core';
import { settingPopoverCtrlr } from '../settings.page';
import { userDummiesData } from '../../../app.component';

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
        status: 'active'
      };

  }

  saveNewUser() {
    userDummiesData.push(this.newUser);
    this.cancelAddNew();
  }

  async cancelAddNew() {
    return await settingPopoverCtrlr.dismiss();
  }

}
