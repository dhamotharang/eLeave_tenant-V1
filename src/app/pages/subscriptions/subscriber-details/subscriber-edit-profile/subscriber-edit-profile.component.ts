import { Component, OnInit } from '@angular/core';
import { subscriberUpdateInfo, subsDtlPopoverCtrlr } from '../subscriber-details.page';
import { salesmanDummiesData } from '../../../../app.component';

/**
 * This component is to set up the Subscriber Edit Profile under
 * Subscriber Details page
 * @export
 * @class SubscriberEditProfileComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-subscriber-edit-profile',
  templateUrl: './subscriber-edit-profile.component.html',
  styleUrls: ['./subscriber-edit-profile.component.scss'],
})
export class SubscriberEditProfileComponent implements OnInit {

  /**
   * Creates an instance of SubscriberEditProfileComponent.
   * @memberof SubscriberEditProfileComponent
   */
  constructor() { }

  /**
   * This property is to get current client detail's data
   * @memberof SubscriberEditProfileComponent
   */
  public selectedClientInfo = {};

  /**
   * This property is to set value of client's new details
   * @memberof SubscriberEditProfileComponent
   */
  public updateClientInfo = {};

  /**
   * This property is to get salesman list data
   * @memberof SubscriberEditProfileComponent
   */
  public salesmanLists;

  /**
   * This method is to set initial properties value. It
   * will be executed when this popup is being loaded
   * @memberof SubscriberEditProfileComponent
   */
  ngOnInit() {
    this.selectedClientInfo = subscriberUpdateInfo;
    Object.assign(this.updateClientInfo, this.selectedClientInfo);
    this.salesmanLists = salesmanDummiesData;
  }

  /**
   * This method is to bind client's new details to
   * current details then dismiss this popup
   * @memberof SubscriberEditProfileComponent
   */
  saveChanges() {
    Object.assign(this.selectedClientInfo, this.updateClientInfo);
    this.dissmissPopup();
  }

  /**
   * This method is to dismiss this popup
   * @memberof SubscriberEditProfileComponent
   */
  async dissmissPopup() {
    return await subsDtlPopoverCtrlr.dismiss();
  }

}
