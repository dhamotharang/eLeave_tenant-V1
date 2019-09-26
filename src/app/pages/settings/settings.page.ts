import { Component, OnInit } from '@angular/core';
import { PopoverController, Events } from '@ionic/angular';

import { PaginationServiceService } from '../../services/pagination-service.service';
import { SearchDataService } from '../../services/search-data.service';

import { userDummiesData } from '../../app.component';

import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

import {UserFilterRolesPipe} from './user-filter-roles/user-filter-roles.pipe';

export let selectedEditUser;
export let settingPopoverCtrlr;

/**
 * This component is to set up Settings page
 * @export
 * @class SettingsPage
 * @implements {OnInit}
 */
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})

export class SettingsPage implements OnInit {

  /**
   *Creates an instance of SettingsPage.
   * @param {PopoverController} popoverController
   * @param {Events} event
   * @param {PaginationServiceService} settingPaging
   * @param {SearchDataService} settingSearch
   * @memberof SettingsPage
   */
  constructor(
      private popoverController: PopoverController,
      private event: Events,
      private settingPaging: PaginationServiceService,
      private settingSearch: SearchDataService
    ) {
    event.subscribe('newUserAdded', (data) => {
      const nvar  = {srcElement: {innerText : this.selectedRole}};
      if (nvar.srcElement.innerText !== 'All roles') {
        this.clickRoles(nvar);
      }
    });
  }


  /**
   * This property is to set roles list of user
   * @memberof SettingsPage
   */
  public settingMenuList;

  /**
   * This property is to bind list of data for users
   * @memberof SettingsPage
   */
  public userData;

  /**
   * This property is to set selected role. By default is "All roles"
   * @memberof SettingsPage
   */
  public selectedRole = 'All roles';

  /**
   * This property is to set pagination in Setting page
   * @memberof SettingsPage
   */
  public configPageSetting;


  /**
   * This method is to set initial value of properties. It will
   * be executed when Setting page is loaded
   * @memberof SettingsPage
   */
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
    this.configPageSetting = this.settingPaging.pageConfig(10, 1, this.userData.length);
  }

  /**
   * This method is to open popoever component (Edit User and Add New User)
   * @memberof SettingsPage
   */
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

  /**
   * This method is to set initial value of properties for user to be edited
   * @memberof SettingsPage
   */
  initEditUserPopup(currRowData, evt, comp) {
    selectedEditUser = currRowData;
    this.openSettingPopover(evt, comp);
  }

  /**
   * This method is to update data to be shown in the table when roles is changed
   * @memberof SettingsPage
   */
  clickRoles(evt) {
    this.selectedRole = evt.srcElement.innerText;
    this.userData = (evt.srcElement.innerText === 'All roles') ? userDummiesData :
                      userDummiesData.filter(userObj => userObj.role === evt.srcElement.innerText);
    this.pageSettingChanged(1);
  }

  /**
   * This method is to set configurations for pagination in Setting page
   * @memberof SettingsPage
   */
  pageSettingChanged(event) {
    this.configPageSetting = this.settingPaging.pageConfig(10, event, this.userData.length);
  }

  /**
   * This method is to return data to be shown in the table based on search result
   * @memberof SettingsPage
   */
  onSearchSettings(event) {
    this.userData = userDummiesData;
    this.userData = (event.detail.value.length > 0 ) ?
                      this.settingSearch.filerSearch(event.detail.value, userDummiesData, 'username') :
                        userDummiesData;
    this.pageSettingChanged(1);
  }
}
