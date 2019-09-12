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
  public subsActivatedDate;
  public subsExpDate;
  public subsNextBillDate;
  public subsNewNextBillDate;
  public cycleNo;
  public cycleEvery;
  public currUser;

  ngOnInit() {
    this.currUser = subscriberUpdateInfo.employeeQuota;
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
      this.subsNextBillDate = new Date(this.subsNStartDate.setDate(this.subsNStartDate.getDate() + (7 * this.cycleNo)));
    } else if (this.cycleEvery === 'Month(s)') {
      this.subsNextBillDate = new Date(this.subsNStartDate.setMonth(this.subsNStartDate.getMonth() + this.cycleNo));
    } else {
      this.subsNextBillDate = new Date(this.subsNStartDate.setFullYear(this.subsNStartDate.getFullYear() + this.cycleNo));
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
      this.subsActivatedDate = new Date(this.subsStartDate);
      this.checkCycleType();
      this.getNextBillingDateFormat(this.subsNextBillDate);
    }
  }

  dateFormatOnCard(activatedOn, expiredOn) {
    const ddStart = (activatedOn.getDate() < 10) ? '0' + activatedOn.getDate() : activatedOn.getDate();
    const ddEnd = (expiredOn.getDate() < 10) ? '0' + expiredOn.getDate() : expiredOn.getDate();
    const months = [
                      'Jan',
                      'Feb',
                      'Mar',
                      'Apr',
                      'May',
                      'Jun',
                      'Jul',
                      'Aug',
                      'Sept',
                      'Oct',
                      'Nov',
                      'Dec'
                    ];

    this.subsActivatedDate = ddStart + ' ' + months[activatedOn.getMonth()] + ' ' + activatedOn.getFullYear();
    this.subsExpDate = ddEnd + ' ' + months[expiredOn.getMonth()] + ' ' + expiredOn.getFullYear();

  }
  saveReactiveSubsChanges() {
    this.dateFormatOnCard(this.subsActivatedDate, this.subsNextBillDate);
    subscriberUpdateInfo.activationDate = this.subsActivatedDate;
    subscriberUpdateInfo.lastBillingOn = this.subsActivatedDate;
    subscriberUpdateInfo.nextBillingOn = this.subsExpDate;
    subscriberUpdateInfo.expiryDate = this.subsExpDate;
    subscriberUpdateInfo.repeatEvery = this.cycleNo + ' ' + this.cycleEvery;
    subscriberUpdateInfo.employeeQuota = this.currUser;
    this.dissmissReactiveSubsPopup();
  }

  async dissmissReactiveSubsPopup() {
    return await subsDtlPopoverCtrlr.dismiss();
  }

}
