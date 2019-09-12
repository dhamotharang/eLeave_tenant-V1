import { Component, OnInit } from '@angular/core';
import {subscriberUpdateInfo, subsDtlPopoverCtrlr } from '../subscriber-details.page';

@Component({
  selector: 'app-reactive-subscription',
  templateUrl: './reactive-subscription.component.html',
  styleUrls: ['./reactive-subscription.component.scss'],
})
export class ReactiveSubscriptionComponent implements OnInit {

  constructor() { }

  public subsStartDate: Date;
  public subsNStartDate: Date;
  public subsExpDate;
  public subsNewNextBillDate;
  public cycleNo;
  public cycleEvery;
  public currUser = '';
  public userNo;

  ngOnInit() {
    console.log(subscriberUpdateInfo);
    Object.assign(this.currUser, subscriberUpdateInfo.employeeQuota);
    console.log(this.currUser);
  }

  newStartDate(evtVal) {
    this.subsStartDate = evtVal.target.value;
    this.calcNextBillingDate();
  }

  newCycleTimes(num) {
    this.calcNextBillingDate();
  }

  newCyclePeriod() {
    this.calcNextBillingDate();
  }

  checkCycleType() {
    if (this.cycleEvery === 'Week(s)') {
      this.subsNStartDate = new Date(this.subsNStartDate.setDate(this.subsNStartDate.getDate() + (7 * this.cycleNo)));
    } else if (this.cycleEvery === 'Month(s)') {
      this.subsNStartDate = new Date(this.subsNStartDate.setMonth(this.subsNStartDate.getMonth() + this.cycleNo));
    } else {
      this.subsNStartDate = new Date(this.subsNStartDate.setFullYear(this.subsNStartDate.getFullYear() + this.cycleNo));
    }
  }

  getNextBillingDateFormat(valDate) {
    const dd = (valDate.getDate() < 10) ? '0' + valDate.getDate() : valDate.getDate();
    let mm = valDate.getMonth() + 1;
    mm = (mm < 10) ? '0' + mm : mm;
    this.subsNewNextBillDate = dd + '/' + mm + '/' + valDate.getFullYear();

  }
  calcNextBillingDate() {

    if ((this.subsStartDate !== undefined) && (this.cycleEvery !== undefined) && (this.cycleNo !== undefined) ) {
      this.subsNStartDate =  new Date(this.subsStartDate);
      this.checkCycleType();
      this.getNextBillingDateFormat(this.subsNStartDate);
    }
  }

  saveReactiveSubsChanges() {
    console.log(subscriberUpdateInfo);
    subscriberUpdateInfo.activationDate = this.subsNStartDate;
    subscriberUpdateInfo.lastBillingOn = this.subsNewNextBillDate;
    subscriberUpdateInfo.nextBillingOn = this.subsNewNextBillDate;
    subscriberUpdateInfo.expiryDate = this.subsExpDate;
    subscriberUpdateInfo.repeatEvery = this.cycleNo + ' ' + this.cycleEvery;
    subscriberUpdateInfo.employeeQuota = this.userNo;
    this.dissmissReactiveSubsPopup();
  }

  async dissmissReactiveSubsPopup() {
    return await subsDtlPopoverCtrlr.dismiss();
  }

}
