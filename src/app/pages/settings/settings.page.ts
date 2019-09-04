import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { userDummiesData } from '../../app.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

export let selectedEditUser;
export let settingPopoverCtrlr;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})

export class SettingsPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  public settingMenuList;
  public userSagment;
  public userData;

  ngOnInit() {
    this.settingMenuList = [
      {
        title: 'Users & Icon',
        url: '/userroles',
        icon: 'menu'
      }
    ];

    this.userSagment = 'users';
    this.userData = userDummiesData;
    settingPopoverCtrlr = this.popoverController;
  }

  async openSettingPopover(evt, compName) {
    const setPopup = await this.popoverController.create({
      component:  (compName === 'EditUserComponent') ? EditUserComponent : AddNewUserComponent,
      componentProps: {
        viewType: this
      },
      event: evt,
      cssClass: 'pop-over-style'
    });

    return await setPopup.present();
  }

  initEditUserPopup(currRowData, evt, comp) {
    selectedEditUser = currRowData;
    this.openSettingPopover(evt, comp);
  }
}
