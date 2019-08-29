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

  ngOnInit() {
    console.log(customersDummiesData);
    console.log(this.subscriberInfo);
    this.subscriberDetailsDaysLeft = this.dateDifference(this.subscriberInfo.lastBillingOn, 
                                      this.subscriberInfo.nextBillingOn);
  }

  dateDifference(startdt, enddt) {
    const dropdt: number = Number(new Date(enddt));
    const pickdt: number = Number(new Date(startdt));
    let daysleft: number = (dropdt - pickdt) / (24 * 3600 * 1000);
    daysleft = isNaN(daysleft) ? daysleft = 0 : daysleft ;
    return daysleft;
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
  }


}
