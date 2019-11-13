import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { APIService } from '../../../../services/shared-service/api.service';
import { GlobalFunctionService } from '../../../../services/global-function.service';
import { InfoPopupService } from '../../../../layout/notificationPopup/info-popup.service';

import {subscriberUpdateInfo, subsDtlPopoverCtrlr } from '../subscriber-details.page';

/**
 * This component is to set up Reactive Subscriptions popup
 * @export
 * @class ReactiveSubscriptionComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-reactive-subscription',
  templateUrl: './reactive-subscription.component.html',
  styleUrls: ['./reactive-subscription.component.scss'],
})
export class ReactiveSubscriptionComponent implements OnInit {

  /**
   * Creates an instance of ReactiveSubscriptionComponent.
   * @memberof ReactiveSubscriptionComponent
   */
  constructor(
    private reactiveAPISvs: APIService,
    private reactiveInfoPopup: InfoPopupService
  ) { }

  /**
   * This property is to get current subscription's start date
   * @type {Date}
   * @memberof ReactiveSubscriptionComponent
   */
  public subsStartDate: Date;

  /**
   * This property is to bind new subscription's start date
   * @type {Date}
   * @memberof ReactiveSubscriptionComponent
   */
  public subsNStartDate: Date;

  /**
   * This property is to get date of current subscription's activated on
   * @type {Date}
   * @memberof ReactiveSubscriptionComponent
   */
  public subsActivatedDate;

  /**
   * This property is to set date of current subscription's expired date
   * @type {Date}
   * @memberof ReactiveSubscriptionComponent
   */
  public subsExpDate;

  /**
   * This property is to set date of current subscription's next billing date date
   * @type {Date}
   * @memberof ReactiveSubscriptionComponent
   */
  public subsNextBillDate;

  /**
   * This property is to bind date of new subscription's next billing date
   * @type {Date}
   * @memberof ReactiveSubscriptionComponent
   */
  public subsNewNextBillDate;

  /**
   * This property is to get period of cycle for next billing date (Cycle numbers)
   * @type {Date}
   * @memberof ReactiveSubscriptionComponent
   */
  public cycleNo;

  /**
   * This property is to get period of cycle for next billing date (Week/Month/Year)
   * @type {Date}
   * @memberof ReactiveSubscriptionComponent
   */
  public cycleEvery;

  /**
   * This property is to get current client name
   * @type {Date}
   * @memberof ReactiveSubscriptionComponent
   */
  public currUser;

  public reactiveSubsData;

  public reactiveGlobalFn = new GlobalFunctionService;

  /**
   * This method is to set initial value of properties. It will be executed when
   * this popup is loaded
   * @memberof ReactiveSubscriptionComponent
   */
  ngOnInit() {
    this.currUser = subscriberUpdateInfo.QUOTA;
    this.cycleNo = subscriberUpdateInfo.RECURR_INTERVAL_VAL;
    this.cycleEvery = subscriberUpdateInfo.RECURR_INTERVAL; 
    this.reactiveSubsData = subscriberUpdateInfo;
    console.log('reactiveSubsData: ' + JSON.stringify(this.reactiveSubsData, null, " "));
    // this.cycleNo = this.reactiveSubsData.RECURR_INTERVAL_VAL;
    // this.cycleEvery = this.reactiveSubsData.RECURR_INTERVAL; 
  }

  /**
   * This method is to set new start date value. Then calculate the next
   * billing date based on configured cycle and and new start date
   * @memberof ReactiveSubscriptionComponent
   */
  newStartDate(evtVal) {
    this.subsStartDate = evtVal.target.value;
    this.calcNextBillingDate();
  }

  /**
   * This method is to calculate next billing date when cycle number was changed
   * @memberof ReactiveSubscriptionComponent
   */
  newCycleTimes(num) {
    this.calcNextBillingDate();
  }

  /**
   * This method is to calculate next billing date when cycle period was changed
   * @memberof ReactiveSubscriptionComponent
   */
  newCyclePeriod() {
    this.calcNextBillingDate();
  }

  /**
   * This method is to get next billing date based on cycle type (cycle period and cycle number)
   * @memberof ReactiveSubscriptionComponent
   */
  checkCycleType() {
    if (this.cycleEvery === 'Week(s)') {
      this.subsNextBillDate = new Date(this.subsNStartDate.setDate(this.subsNStartDate.getDate() + (7 * this.cycleNo)));
    } else if (this.cycleEvery === 'Month(s)') {
      this.subsNextBillDate = new Date(this.subsNStartDate.setMonth(this.subsNStartDate.getMonth() + this.cycleNo));
    } else {
      this.subsNextBillDate = new Date(this.subsNStartDate.setFullYear(this.subsNStartDate.getFullYear() + this.cycleNo));
    }
  }

  /**
   * This method is to set next billing date formats
   * @memberof ReactiveSubscriptionComponent
   */
  getNextBillingDateFormat(valDate) {
    const dd = (valDate.getDate() < 10) ? '0' + valDate.getDate() : valDate.getDate();
    let mm = valDate.getMonth() + 1;
    mm = (mm < 10) ? '0' + mm : mm;

    this.subsNewNextBillDate = dd + '/' + mm + '/' + valDate.getFullYear();
  }

  /**
   * This method is to calculate next billing date
   * @memberof ReactiveSubscriptionComponent
   */
  calcNextBillingDate() {
    if ((this.subsStartDate !== undefined) && (this.cycleEvery !== undefined) && (this.cycleNo !== undefined) ) {
      this.subsNStartDate =  new Date(this.subsStartDate);
      this.subsActivatedDate = new Date(this.subsStartDate);
      this.checkCycleType();
      this.getNextBillingDateFormat(this.subsNextBillDate);
    }
  }

  /**
   * This method is to set format of activated date and expired date to be shown in cards
   * @memberof ReactiveSubscriptionComponent
   */
  dateFormatOnCard(activatedOn, expiredOn) {
    const ddStart = (activatedOn.getDate() < 10) ? '0' + activatedOn.getDate() : activatedOn.getDate();
    const ddEnd = (expiredOn.getDate() < 10) ? '0' + expiredOn.getDate() : expiredOn.getDate();
    const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    this.subsActivatedDate = ddStart + ' ' + months[activatedOn.getMonth()] + ' ' + activatedOn.getFullYear();
    this.subsExpDate = ddEnd + ' ' + months[expiredOn.getMonth()] + ' ' + expiredOn.getFullYear();

  }

  /**
   * This method is to bind values then close this popup
   * @memberof ReactiveSubscriptionComponent
   */
  saveReactiveSubsChanges() {
    this.dateFormatOnCard(this.subsActivatedDate, this.subsNextBillDate);
    subscriberUpdateInfo.FULL_ACTIVATION_DATE = this.getReactiveDate();
    subscriberUpdateInfo.FULL_LAST_BILLING_DATE = this.reactiveGlobalFn.changeDateFormatFull(this.subsActivatedDate);
    subscriberUpdateInfo.FULL_NEXT_BILLING_DATE = this.reactiveGlobalFn.changeDateFormatFull(this.subsExpDate);
    subscriberUpdateInfo.RECURR_INTERVAL_VAL = this.cycleNo,
    subscriberUpdateInfo.RECURR_INTERVAL = this.cycleEvery,
    subscriberUpdateInfo.QUOTA = this.currUser;
    console.log('saveReactiveSubsChanges subscriberUpdateInfo: ' + JSON.stringify(subscriberUpdateInfo, null, " "));
    console.log('saveReactiveSubsChanges reactiveSubsData: ' + JSON.stringify(this.reactiveSubsData, null, " "));
    // check if quota is < employee quota then notify user error
    const saveData = {
      'customerGuid': this.reactiveSubsData['CUSTOMER_GUID'],
      'subscriptionPlan': this.reactiveSubsData['PLAN'],
      'subscriptionStatus': this.reactiveSubsData['STATUS'],
      // 'subscriptionQuota': this.reactiveSubsData['QUOTA'],
      'subscriptionQuota': this.currUser,
      'usedQuota': this.reactiveSubsData['USED_QUOTA'],
      'activationDate': this.reactiveGlobalFn.changeDateFormatYYYYMMDD(this.subsActivatedDate),
      'lastBillingDate': this.reactiveGlobalFn.changeDateFormatYYYYMMDD(this.subsActivatedDate),
      'nextBillingDate': this.reactiveGlobalFn.changeDateFormatYYYYMMDD(this.subsExpDate),
      'recurrIntervalVal': this.cycleNo,
      'recurrInterval': this.cycleEvery,
      'billingCycle': this.reactiveSubsData['BILLING_CYCLE'],
      'subscriptionGuid': this.reactiveSubsData['SUBSCRIPTION_GUID'],
    };
    console.log('saveReactiveSubsChanges saveData: ' + JSON.stringify(saveData, null, " "));
    this.patchUpdateSubs(saveData);
    document.getElementById('reactivesubsnotice').hidden = true;
    this.dissmissReactiveSubsPopup();
  }

  getReactiveDate() {
    return this.reactiveGlobalFn.changeDateFormatFull(new Date());
    
  }
  patchUpdateSubs(obj) {
    this.sendReqPatchUpdateSubs(obj).subscribe(
      respondData => {
        console.log('sendReqPatchUpdateSubs: ' + JSON.stringify(respondData, null, " "));
        this.reactiveInfoPopup.alertPopup('You have successfully reactive subscription!', 'alert-success');
      }
    );
  }

  sendReqPatchUpdateSubs(obj): Observable<any> {
    return this.reactiveAPISvs.patchApi(obj, '/api/admin/subscription');
  }
  /**
   * This method is to close this popup
   * @memberof ReactiveSubscriptionComponent
   */
  async dissmissReactiveSubsPopup() {
    return await subsDtlPopoverCtrlr.dismiss();
  }

}
