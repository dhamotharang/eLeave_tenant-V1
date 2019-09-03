import { Component, OnInit } from '@angular/core';
import {subscriberUpdateInfo, subsDtlPopoverCtrlr } from '../subscriber-details.page';

@Component({
  selector: 'app-reactive-subscription',
  templateUrl: './reactive-subscription.component.html',
  styleUrls: ['./reactive-subscription.component.scss'],
})
export class ReactiveSubscriptionComponent implements OnInit {

  constructor() { }

  public subsStartDate;
  public subsExpDate;
  public cycleNo;
  public cycleEvery;
  public userNo;

  ngOnInit() {
    this.subsStartDate = new Date;
    this.subsExpDate = new Date;
  }

  saveReactiveSubsChanges() {
    subscriberUpdateInfo.activationDate = this.subsStartDate;
    subscriberUpdateInfo.expiryDate = this.subsExpDate;
    subscriberUpdateInfo.repeatEvery = this.cycleNo + ' ' + this.cycleEvery;
    subscriberUpdateInfo.tenantNumber = this.userNo;
    this.dissmissReactiveSubsPopup();
  }

  async dissmissReactiveSubsPopup() {
    return await subsDtlPopoverCtrlr.dismiss();
  }

}
