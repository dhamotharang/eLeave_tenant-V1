import { Component, OnInit } from '@angular/core';
import { userRolesList, settingPopoverCtrlr } from '../settings.page';


/**
 * This property is to bind value of roles globally
 * @memberof RolesDropDownComponent
 */
export let selRolePopup;

/**
 * This component is to open popup for user's roles list
 * @export
 * @class RolesDropDownComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-roles-drop-down',
  templateUrl: './roles-drop-down.component.html',
  styleUrls: ['./roles-drop-down.component.scss'],
})

export class RolesDropDownComponent implements OnInit {

  /**
   * Creates an instance of RolesDropDownComponent.
   * @memberof RolesDropDownComponent
   */
  constructor(  ) { }

  /**
   * This property is to bind value of roles
   * @memberof RolesDropDownComponent
   */
  public rolesList;

  /**
   * This method is to set initial value of property. It will be
   * executed when this component is loaded
   * @memberof RolesDropDownComponent
   */
  ngOnInit() {
    this.rolesList = userRolesList;
  }

  /**
   * This method is to set value of selected role then will dissmiss
   * the popup
   * @param {*} evt
   * @memberof RolesDropDownComponent
   */
  onClickRoles(evt) {
    selRolePopup = evt;
    this.dismissRolesPopup();
  }

  /**
   * This method is to dismiss the popup
   * @returns
   * @memberof RolesDropDownComponent
   */
  async dismissRolesPopup() {
    return await settingPopoverCtrlr.dismiss();
  }

}
