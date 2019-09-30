import { Component, OnInit } from '@angular/core';
import {subscriberUpdateInfo, subsDtlPopoverCtrlr } from '../subscriber-details.page';

/**
 * This componenet is for Change Next Billing Date popup Under Subscriber Details page
 * @export
 * @class ChangeNextBillingDateComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-change-next-billing-date',
  templateUrl: './change-next-billing-date.component.html',
  styleUrls: ['./change-next-billing-date.component.scss'],
})
export class ChangeNextBillingDateComponent implements OnInit {

  /**
   * Creates an instance of ChangeNextBillingDateComponent.
   * @memberof ChangeNextBillingDateComponent
   */
  constructor() { }

  /**
   * This property is to bind value of next billing date (Full date with month's short name)
   * @memberof ChangeNextBillingDateComponent
   */
  public newDateShort;

  /**
   * This property is to bind value of next billing date (Full date with month's full name)
   * @memberof ChangeNextBillingDateComponent
   */
  public newDateFull = '';

  /**
   * This method is to set initial value of properties. It will be executed when this component
   * is loaded
   * @memberof ChangeNextBillingDateComponent
   */
  ngOnInit() {  }

  /**
   * This method is to get updated Next Billing Date
   * @memberof ChangeNextBillingDateComponent
   */
  updateNextBillingDate(evt) {
    const dd = (evt.target.valueAsDate.getDate() < 10) ? '0' + evt.target.valueAsDate.getDate() :
                  evt.target.valueAsDate.getDate();
    const mm = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
                ];
    const MM = [ 'January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'
                ];
    const mmshort = mm[evt.target.valueAsDate.getMonth()];
    const mmfull = MM[evt.target.valueAsDate.getMonth()];

    this.newDateShort = dd + ' ' + mmshort + ' ' + evt.target.valueAsDate.getFullYear();
    this.newDateFull = dd + ' ' + mmfull + ' ' + evt.target.valueAsDate.getFullYear();
  }

  /**
   * This method is to bind new next billing date with the old one. Then it will
   * dismiss this popup
   * @memberof ChangeNextBillingDateComponent
   */
  saveNextBillingDate() {
    subscriberUpdateInfo.nextBillingOn = this.newDateShort;
    subscriberUpdateInfo.expiryDate = this.newDateShort;
    this.cancelChgNextBillingDate();
  }

  /**
   * This method is to dismiss this popup
   * @memberof ChangeNextBillingDateComponent
   */
  async cancelChgNextBillingDate() {
    return await subsDtlPopoverCtrlr.dismiss();
  }
}
