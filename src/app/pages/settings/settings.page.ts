import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { Observable } from 'rxjs';

import { PaginationServiceService } from '../../services/pagination-service.service';
import { SearchDataService } from '../../services/search-data.service';

import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RolesDropDownComponent, selRolePopup } from './roles-drop-down/roles-drop-down.component';

import { APIService } from '../../services/shared-service/api.service';

/**
 * This variable is to store data of selected customer to be edited
 * @export
 * @class SettingsPage
 */
export let selectedEditUser;

/**
 * This variable is to store data of setting's popover configurations
 * @export
 * @class SettingsPage
 */
export let settingPopoverCtrlr;

/**
 * This variable is to bind value for roles
 * @export
 * @class SettingsPage
 */
export let userRolesList;

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
   * Creates an instance of SettingsPage.
   * @param {PopoverController} popoverController This property is to get methods from PopoverController
   * @param {SearchDataService} settingSearch This property is to get methods from SearchDataService
   * @param {APIService} settingApiService This property is to get methods from APIService
   * @param {PaginationServiceService} settingPaging This property is to get methods from PaginationServiceService
   * @memberof SettingsPage
   */
  constructor(
      private popoverController: PopoverController,
      // private settingSearch: SearchDataService,
      // private settingApiService: APIService,
      public settingPaging: PaginationServiceService,
    ) { }

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
   * This property is to bind the length of array for user data
   * returned from API
   * @memberof SettingsPage
   */
  public userDataLength;

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
   * This property is to bind initial data of user's data
   * @private
   * @memberof SettingsPage
   */
  private initUserData;

  /**
   * This method is to set initial value of properties. It will
   * be executed when Setting page is loaded
   * @memberof SettingsPage
   */
  ngOnInit() {
    this.settingMenuList = [
      {
        ROLE_TITLE: 'All roles',
        role: 'all'
      },
      {
        ROLE_TITLE: 'Super Admin',
        role: 'superadmin'
      },
      {
        ROLE_TITLE: 'Salesperson',
        role: 'salesperson'
      },
      {
        ROLE_TITLE: 'Support',
        role: 'support'
      },
    ];

    userRolesList = this.settingMenuList;
    settingPopoverCtrlr = this.popoverController;
    this.initGetUserList();

    this.configPageSetting = this.settingPaging.pageConfig(10, 1, this.userDataLength);
  }

  /**
   * This method is to get user list when the page is being initialized
   * @memberof SettingsPage
   */
  initGetUserList() {
    this.getUserList('all').subscribe(
      userListData => {
        this.initUserData = userListData;
        this.userData = userListData;
        this.userDataLength = userListData.length;
      }
    );
  }

  /**
   * This method is to get user user list from endpoint
   * @param {*} param
   * @returns {Observable<any>}
   * @memberof SettingsPage
   */
  getUserList(param): Observable<any> {
    return APIService.prototype.getApi('/api/admin/user-manage/' + param);
    // return this.settingApiService.getApi('/api/admin/user-manage/' + param);
  }

  /**
   * This method is to open popoever component (Edit User and Add New User)
   * @memberof SettingsPage
   */
  async openSettingPopover(evt, compName) {
    const setPopup = await this.popoverController.create({
      component:  (compName === 'EditUserComponent') ? EditUserComponent :
                   (compName === 'RolesDropDownComponent') ? RolesDropDownComponent :
                    AddNewUserComponent,
      cssClass: (compName === 'RolesDropDownComponent') ? 'pop-over-dropdown-style' : 'pop-over-style '
    });

    return await setPopup.present();
  }
  
  /**
   * This method is to open popover component for select user by roles
   * @param {*} evt
   * @returns
   * @memberof SettingsPage
   */
  async openRolesPopover(evt) {
    const popup = await this.popoverController.create({
      component:  RolesDropDownComponent,
      componentProps: { viewType: this },
      event: evt,
      cssClass: 'pop-over-dropdown-style'
    });

    await popup.present();

    return await popup.onWillDismiss().then(data => {
      this.clickRoles(selRolePopup);
    });
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
    this.selectedRole = this.initSelectedRoles(evt);
    const selParam = this.settingMenuList.filter( roleList => roleList.ROLE_TITLE === evt.srcElement.innerText);

    this.getUserList(selParam[0].role).subscribe( userListData => {
      this.userData = userListData;
      this.initUserData = userListData;
      this.userDataLength = userListData.length;
      this.pageSettingChanged(1);
    });
  }

  /**
   * This method is to set selected role value
   * @param {*} evtValue
   * @returns
   * @memberof SettingsPage
   */
  initSelectedRoles(evtValue) {
    return (evtValue === 'all') ? 'all' : evtValue.srcElement.innerText;
  }

  /**
   * This method is to set configurations for pagination in Setting page
   * @memberof SettingsPage
   */
  pageSettingChanged(event) {
    this.configPageSetting = this.settingPaging.pageConfig(10, event, this.userDataLength);
  }

  /**
   * This method is to return data to be shown in the table based on search result
   * @memberof SettingsPage
   */
  onSearchSettings(event) {
    this.userData = this.initUserData;
    this.userData = (event.detail.value.length > 0 ) ?
      SearchDataService.prototype.filerSearch(event.detail.value, this.initUserData, 'FULLNAME') :
      this.initUserData;
      // this.settingSearch.filerSearch(event.detail.value, this.initUserData, 'FULLNAME') :
    this.pageSettingChanged(1);
  }
}
