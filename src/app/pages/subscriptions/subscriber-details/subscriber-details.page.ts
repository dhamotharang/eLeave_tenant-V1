import { Component, OnInit, } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Timestamp } from 'rxjs';
import {customersDummiesData} from '../../../app.component';
import { selectedSubscribersInfo } from '../subscriptions.page';
import { UpdateUserNumbersComponent } from './update-user-numbers/update-user-numbers.component';
import { SubscriberRecentActivitiesComponent } from './subscriber-recent-activities/subscriber-recent-activities.component';
import { SubscriberEditProfileComponent } from './subscriber-edit-profile/subscriber-edit-profile.component';
import { ReactiveSubscriptionComponent } from './reactive-subscription/reactive-subscription.component';
import { $ } from 'protractor';


export let subscriberUpdateInfo;
export let subsDtlPopoverCtrlr;

@Component({
  selector: 'app-subscriber-details',
  templateUrl: './subscriber-details.page.html',
  styleUrls: ['./subscriber-details.page.scss'],
})

export class SubscriberDetailsPage implements OnInit {

  constructor(public popoverController: PopoverController) { }


  public subscribersDetails = customersDummiesData;
  public subscriberInfo;
  public isShowingPicker = true;
  public subscriberDetailsDaysLeft;
  public subsProgressBarValue;
  public subsToggle = false;
  public prevToggleVal = true;

  ngOnInit() {
    // console.log(customersDummiesData);
    // console.log(this.subscriberInfo);
    this.subscriberInfo = selectedSubscribersInfo;
    subscriberUpdateInfo = this.subscriberInfo;
    this.subscriberDetailsDaysLeft = this.dateDifference(this.subscriberInfo.lastBillingOn,
      this.subscriberInfo.nextBillingOn);
    // this.subsProgressBarValue = this.subscriberInfo.employeeNumber / this.subscriberInfo.employeeQuota;
    this.updateProgressBar(this.subscriberInfo.employeeNumber, this.subscriberInfo.employeeQuota);
    subsDtlPopoverCtrlr = this.popoverController;
  }

  checkToggle() {
    if (this.subsToggle !== this.prevToggleVal) {
      if ((this.prevToggleVal === true) && (this.subsToggle === false)) {
        document.getElementById('reactivesubsnotice').hidden = false;
        this.openSubsPopover(Event, 'ReactiveSubscriptionComponent');
      } else {
        document.getElementById('reactivesubsnotice').hidden = true;
      }
      this.prevToggleVal = this.subsToggle;
    }
  }

  dateDifference(startdt, enddt) {
    const dropdt: number = Number(new Date(enddt));
    const pickdt: number = Number(new Date(startdt));
    let daysleft: number = (dropdt - pickdt) / (24 * 3600 * 1000);
    daysleft = isNaN(daysleft) ? daysleft = 0 : daysleft ;
    this.subsToggle = (daysleft === 0) ? false : true;
    return daysleft;
  }

  async openSubsPopover(evt, compName) {
    const popover = await this.popoverController.create({
      component: (compName === 'UpdateUserNumbersComponent') ? UpdateUserNumbersComponent :
                  (compName === 'SubscriberRecentActivitiesComponent') ? SubscriberRecentActivitiesComponent :
                   (compName === 'SubscriberEditProfileComponent') ? SubscriberEditProfileComponent :
                    ReactiveSubscriptionComponent,
      componentProps: {
        viewType: this
      },
      event: evt,
      cssClass: 'pop-over-style'
    });

    return await popover.present();
  }

  checkStatus(obj, statusVal) {
    console.log(obj);
    console.log(statusVal);
    document.getElementById('myonoffswitch');
    console.log(document.getElementById('myonoffswitch'));
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
    subscriberUpdateInfo = this.subscriberInfo;
    this.subscriberDetailsDaysLeft = this.dateDifference(updateSubscriberInfo.lastBillingOn, updateSubscriberInfo.nextBillingOn);
    // this.subsProgressBarValue = updateSubscriberInfo.employeeNumber / updateSubscriberInfo.employeeQuota;
    this.updateProgressBar(updateSubscriberInfo.employeeNumber, updateSubscriberInfo.employeeQuota);
  }

  updateProgressBar(currEmp, totalEmp) {
    this.subsProgressBarValue = currEmp / totalEmp;
    return this.subscriberInfo.progressBarValue =  this.subsProgressBarValue;
  }
}
