import { Component, OnInit } from '@angular/core';
import {subscriberUpdateInfo, subsDtlPopoverCtrlr } from '../subscriber-details.page';

@Component({
  selector: 'app-change-next-billing-date',
  templateUrl: './change-next-billing-date.component.html',
  styleUrls: ['./change-next-billing-date.component.scss'],
})
export class ChangeNextBillingDateComponent implements OnInit {

  constructor() { }

  public newDateShort;
  public newDateFull = '';

  ngOnInit() {  }

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

  saveNextBillingDate() {
    subscriberUpdateInfo.nextBillingOn = this.newDateShort;
    subscriberUpdateInfo.expiryDate = this.newDateShort;
    this.cancelChgNextBillingDate();
  }

  async cancelChgNextBillingDate() {
    return await subsDtlPopoverCtrlr.dismiss();
  }
}
