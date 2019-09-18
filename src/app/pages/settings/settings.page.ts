import { Component, OnInit } from '@angular/core';
import { PopoverController, Events } from '@ionic/angular';

import { userDummiesData } from '../../app.component';

import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

import {UserFilterRolesPipe} from './user-filter-roles/user-filter-roles.pipe';

export let selectedEditUser;
export let settingPopoverCtrlr;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})

export class SettingsPage implements OnInit {

  constructor(public popoverController: PopoverController, private event: Events) {
    event.subscribe('newUserAdded', (data) => {
      const nvar  = {srcElement: {innerText : this.selectedRole}};
      if (nvar.srcElement.innerText !== 'All roles') {
        this.clickRoles(nvar);
      }
    });
  }

  public settingMenuList;
  public userData;
  public selectedRole = 'All roles';

  ngOnInit() {
    this.settingMenuList = [
      {
        role: 'All roles'
      },
      {
        role: 'Super Admin'
      },
      {
        role: 'Salesperson'
      },
      {
        role: 'Support'
      },
    ];

    this.userData = userDummiesData;
    settingPopoverCtrlr = this.popoverController;
  }

  async openSettingPopover(evt, compName) {
    const setPopup = await this.popoverController.create({
      component:  (compName === 'EditUserComponent') ? EditUserComponent : AddNewUserComponent,
      // componentProps: {
      //   viewType: this
      // },
      // event: evt,
      cssClass: 'pop-over-style'
    });

    return await setPopup.present();
  }

  initEditUserPopup(currRowData, evt, comp) {
    selectedEditUser = currRowData;
    this.openSettingPopover(evt, comp);
  }

  clickRoles(evt) {
    this.selectedRole = evt.srcElement.innerText;
    this.userData = (evt.srcElement.innerText === 'All roles') ? userDummiesData :
                      userDummiesData.filter(userObj => userObj.role === evt.srcElement.innerText);
  }
}
