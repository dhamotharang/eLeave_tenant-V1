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
   * @param {APIService} chgNextBillAPISvs This property is to get methods from APIService
   * @param {InfoPopupService} chgNxtBillInfoPopup This property is to get methods from InfoPopupService
   * @memberof ChangeNextBillingDateComponent
   */
  constructor(
    private chgNextBillAPISvs: APIService,
    private chgNxtBillInfoPopup: InfoPopupService
  ) { }

  // public myDate;

  /**
   * This property is to bind value of next billing date in datetime format
   * @memberof ChangeNextBillingDateComponent
   */
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

  /**
   * This property is to bind initial value of next billing date before anything changed
   * @private
   * @memberof ChangeNextBillingDateComponent
   */
  private prevNextBillDate;

  /**
   * This method is to set initial value of properties. It will be executed when this component
   * is loaded
   * @memberof ChangeNextBillingDateComponent
   */
  ngOnInit() {  
    // this.myDate = Date.now();
    // this.myDate = new Date().toLocaleString();
    this.prevNextBillDate = subscriberUpdateInfo.SIMPLE_NEXT_BILLING_DATE;
  }

  /**
   * This method is to get updated Next Billing Date
   * @memberof ChangeNextBillingDateComponent
   */
  updateNextBillingDate(evt) {
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

  /**
   * This method is to send request to API to update next billing date, prompt alert popup and update to activity log 
   * when the next billing date is updated
   * @param {*} reqObj This parameter is to send 
   * @memberof ChangeNextBillingDateComponent
   */
  updNextBillDate(reqObj) {
    this.sendReqChgNextBill(reqObj, 0).subscribe(
      respUpd => {
        console.log('respUpd: ' + JSON.stringify(respUpd, null, " "));
        this.chgNxtBillInfoPopup.alertPopup('You have successfully update next billing date', 'alert-success');
        this.sendReqChgNextBill({
          customerId: subscriberUpdateInfo['CUSTOMER_GUID'],
          subscriptionId: subscriberUpdateInfo['SUBSCRIPTION_GUID'],
          message: 'Next billing date of subscriptions was updated from ' + this.prevNextBillDate + ' to ' +
            subscriberUpdateInfo.SIMPLE_NEXT_BILLING_DATE
        }, 1).subscribe(
          respUpdLog => { }
        );
      }
    );
    // this.sendReqChgNextBill(reqObj, 0).subscribe(
    //   respUpd => {
    //     console.log('respUpd: ' + JSON.stringify(respUpd, null, " "));
    //     this.chgNxtBillInfoPopup.alertPopup('You have successfully update next billing date', 'alert-success');
    //     this.sendReqChgNextBill({
    //       customerId: subscriberUpdateInfo['CUSTOMER_GUID'],
    //       subscriptionId: subscriberUpdateInfo['SUBSCRIPTION_GUID'],
    //       message: 'Next billing date of subscriptions was updated from ' + this.prevNextBillDate + ' to ' + 
    //         subscriberUpdateInfo.SIMPLE_NEXT_BILLING_DATE
    //     }, 1).subscribe(
    //       respUpdLog => {}
    //     );

    //   }
    // );
  }

  /**
   * This method is to send request to API based on type and request object passed
   * @param {*} reqObj This parameter will pass the request object to API
   * @param {*} type This parameter is to decide which API will be requested to. Eg: 
   * 0: To update subscription, 
   * 1: To insert data into activity logs
   * @returns {Observable <any>}
   * @memberof ChangeNextBillingDateComponent
   */
  sendReqChgNextBill(reqObj, type): Observable <any> {
    return (type === 0) ? this.chgNextBillAPISvs.patchApi(reqObj, '/api/admin/subscription')
      : this.chgNextBillAPISvs.postApi(reqObj, '/api/admin/activity-log');
  }
}
