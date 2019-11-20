import { Observable } from '../../../../../../node_modules/rxjs';
import { Component, OnInit } from '@angular/core';

import { GlobalFunctionService } from './../../../../services/global-function.service';
import { APIService } from './../../../../services/shared-service/api.service';
import { InfoPopupService } from './../../../../layout/notificationPopup/info-popup.service';

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
  constructor(
    private chgNextBillAPISvs: APIService,
    private chgNxtBillInfoPopup: InfoPopupService
  ) { }

  public myDate;

  public newNextBillDate;
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

  private prevNextBillDate;

  private crtlr;
  /**
   * This method is to set initial value of properties. It will be executed when this component
   * is loaded
   * @memberof ChangeNextBillingDateComponent
   */
  ngOnInit() {  
    // this.myDate = Date.now();
    this.myDate = new Date().toLocaleString();
    console.log('myDate init: ' + this.myDate);
    console.log('subscriberUpdateInfo: ' + JSON.stringify(subscriberUpdateInfo, null, " "));
    this.prevNextBillDate = subscriberUpdateInfo.SIMPLE_NEXT_BILLING_DATE;
    console.log('subscriberUpdateInfo NEXT_BILLING_DATE: ' + JSON.stringify(subscriberUpdateInfo.NEXT_BILLING_DATE, null, " "));
    // console.log('subsDtlPopoverCtrlr: ' + JSON.stringify(subsDtlPopoverCtrlr, null, " "));
  }

  /**
   * This method is to get updated Next Billing Date
   * @memberof ChangeNextBillingDateComponent
   */
  updateNextBillingDate(evt) {
    console.log('updateNextBillingDate evt.target.valueAsDate.: ' + JSON.stringify(evt.target.valueAsDate));
    if (evt.target.valueAsDate !== null) {
      this.newDateFull = GlobalFunctionService.prototype.changeDateFormatFull(evt.target.valueAsDate);
      this.newDateShort = GlobalFunctionService.prototype.changeDateFormatSimple(evt.target.valueAsDate);
      this.newNextBillDate = GlobalFunctionService.prototype.changeDateFormatYYYYMMDD(evt.target.valueAsDate, 0);
    }
  }

  /**
   * This method is to bind new next billing date with the old one. Then it will
   * dismiss this popup
   * @memberof ChangeNextBillingDateComponent
   */
  saveNextBillingDate() {
    subscriberUpdateInfo.FULL_NEXT_BILLING_DATE = GlobalFunctionService.prototype.changeDateFormatFull(this.newNextBillDate);
    subscriberUpdateInfo.SIMPLE_NEXT_BILLING_DATE = GlobalFunctionService.prototype.changeDateFormatSimple(this.newNextBillDate);
    const updObj = {
      'subscriptionLabel': subscriberUpdateInfo['SUBSCRIPTION_LABEL'],
      'customerGuid': subscriberUpdateInfo['CUSTOMER_GUID'],
      'subscriptionPlan': subscriberUpdateInfo['PLAN'],
      'subscriptionStatus': subscriberUpdateInfo['STATUS'],
      'subscriptionQuota': subscriberUpdateInfo['QUOTA'],
      'usedQuota': subscriberUpdateInfo['USED_QUOTA'],
      'activationDate': subscriberUpdateInfo['ACTIVATION_DATE'],
      'lastBillingDate': subscriberUpdateInfo['LAST_BILLING_DATE'],
      'nextBillingDate': this.newNextBillDate,
      'recurrIntervalVal': subscriberUpdateInfo['RECURR_INTERVAL_VAL'],
      'recurrInterval': subscriberUpdateInfo['RECURR_INTERVAL'],
      'billingCycle': subscriberUpdateInfo['BILLING_CYCLE'],
      'subscriptionGuid': subscriberUpdateInfo['SUBSCRIPTION_GUID']
      
    };
    this.updNextBillDate(updObj);
    this.cancelChgNextBillingDate();
  }

  /**
   * This method is to dismiss this popup
   * @memberof ChangeNextBillingDateComponent
   */
  async cancelChgNextBillingDate() {
    return await subsDtlPopoverCtrlr.dismiss();
  }

  updNextBillDate(reqObj) {
    this.sendReqChgNextBill(reqObj, 0).subscribe(
      respUpd => {
        console.log('respUpd: ' + JSON.stringify(respUpd, null, " "));
        this.chgNxtBillInfoPopup.alertPopup('You have successfully update next billing date!', 'alert-success');
        this.sendReqChgNextBill({
          customerId: subscriberUpdateInfo['CUSTOMER_GUID'],
          subscriptionId: subscriberUpdateInfo['SUBSCRIPTION_GUID'],
          message: 'Next billing date of subscriptions was updated from ' + this.prevNextBillDate + ' to ' + 
            subscriberUpdateInfo.SIMPLE_NEXT_BILLING_DATE
        }, 1).subscribe(
          respUpdLog => {}
        );

      }
    );
  }

  sendReqChgNextBill(reqObj, type): Observable <any> {
    return (type === 0) ? this.chgNextBillAPISvs.patchApi(reqObj, '/api/admin/subscription')
      : this.chgNextBillAPISvs.postApi(reqObj, '/api/admin/activity-log');
  }
}
