import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs';
import {customersDummiesData} from '../../../app.component';
import { selectedSubscribersInfo } from '../subscriptions.page';

@Component({
  selector: 'app-subscriber-details',
  templateUrl: './subscriber-details.page.html',
  styleUrls: ['./subscriber-details.page.scss'],
})

export class SubscriberDetailsPage implements OnInit {

  constructor() { }
  
  public subscribersDetails = customersDummiesData;
  public subscriberInfo = selectedSubscribersInfo;
  public isShowingPicker = true;
  public subscriberDetailsDaysLeft;
  public subsProgressBarValue;

  ngOnInit() {
    console.log(customersDummiesData);
    console.log(this.subscriberInfo);
    this.subscriberDetailsDaysLeft = this.dateDifference(this.subscriberInfo.lastBillingOn,
      this.subscriberInfo.nextBillingOn);
    this.subsProgressBarValue = this.subscriberInfo.employeeNumber / this.subscriberInfo.employeeQuota;
  }

  dateDifference(startdt, enddt) {
    const dropdt: number = Number(new Date(enddt));
    const pickdt: number = Number(new Date(startdt));
    let daysleft: number = (dropdt - pickdt) / (24 * 3600 * 1000);
    daysleft = isNaN(daysleft) ? daysleft = 0 : daysleft ;
    return daysleft;
  }

  async openSubsPopover(evt, compName) {
    console.log('openSubsPopover');
  // const popover = await this.popoverController.create({
  //   component: (compName === 'subsUpdateCustomerDetailsComponent') ? UpdateCustomerDetailsComponent : UpdateCustomerDetailsComponent,
  //   // component: (compName === 'UpdateCustomerDetailsComponent') ? UpdateCustomerDetailsComponent : CustomerHistoryComponent,
  //   componentProps: {
  //     viewType: this
  //   },
  //   event: evt,
  //   cssClass: 'pop-over-style'
  // });

  // return await popover.present();
  }

  checkStatus(obj, statusVal) {
    console.log(obj);
    console.log(statusVal);
  }

  checkvalue(val, val2) {
    console.log('checkvalue');
    console.log(val);
    console.log(val2);
  }
  showCalenderPicker() {
    console.log('hi: ' + this.isShowingPicker);

    if (this.isShowingPicker) {
      this.isShowingPicker = true;
    } else {
      this.isShowingPicker = false;
    }
    return this.isShowingPicker;
    // if (this.isShowingPicker) {
    //   this.isShowingPicker = true;
    // } else {
    //   this.isShowingPicker = false;
    // }
    // return this.isShowingPicker;
  }

  selectedClient(updateSubscriberInfo) {
    this.subscriberInfo = updateSubscriberInfo;
    this.subscriberDetailsDaysLeft = this.dateDifference(updateSubscriberInfo.lastBillingOn, updateSubscriberInfo.nextBillingOn);
    this.subsProgressBarValue = updateSubscriberInfo.employeeNumber / updateSubscriberInfo.employeeQuota;
  }


}
