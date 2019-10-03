import { Component, OnInit } from '@angular/core';
import { subscriberUpdateInfo, subsDtlPopoverCtrlr} from '../subscriber-details.page';

/**
 * This component is to set up Update User's Qouta popup under Subscriber Details
 * @export
 * @class UpdateUserNumbersComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-update-user-numbers',
  templateUrl: './update-user-numbers.component.html',
  styleUrls: ['./update-user-numbers.component.scss'],
})
export class UpdateUserNumbersComponent implements OnInit {

  /**
   * Creates an instance of UpdateUserNumbersComponent.
   * @memberof UpdateUserNumbersComponent
   */
  constructor() { }

  /**
   * This property is to get current subscriber's data
   * @memberof UpdateUserNumbersComponent
   */
  public selectedSubscriberInfo;

  /**
   * This property is to set value of new susbcriber's qouta
   * @memberof UpdateUserNumbersComponent
   */
  public updateEmployeeQuota;

  /**
   * This property is to set value of current usage of subsriber qouta over total qouta
   * @memberof UpdateUserNumbersComponent
   */
  public updateClientData;

  /**
   * This method is to initiate properties values in this component. It will
   * be executed the this popup is loaded
   * @memberof UpdateUserNumbersComponent
   */
  ngOnInit() {
    this.selectedSubscriberInfo = subscriberUpdateInfo;
    this.updateClientData = {...this.selectedSubscriberInfo, progressBarValue:
                      this.selectedSubscriberInfo.employeeNumber / this.selectedSubscriberInfo.employeeQuota};
    this.updateEmployeeQuota = this.selectedSubscriberInfo.employeeQuota;
  }

  /**
   * This method is to bind updated data and close the popup
   * @memberof UpdateUserNumbersComponent
   */
  saveChanges() {
    this.updateClientData.progressBarValue = this.updateClientData.employeeNumber / this.updateClientData.employeeQuota;
    Object.assign(this.selectedSubscriberInfo,  this.updateClientData);
    this.dissmissPopup();
  }

  /**
   * This method is to close popup
   * @returns
   * @memberof UpdateUserNumbersComponent
   */
  async dissmissPopup() {
    return await subsDtlPopoverCtrlr.dismiss();
  }

}
