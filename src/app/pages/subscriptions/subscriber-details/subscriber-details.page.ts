import { Component, OnInit, } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { PaginationServiceService } from '../../../services/pagination-service.service';
import { SearchDataService } from '../../../services/search-data.service';

import {customersDummiesData} from '../../../app.component';

import { selectedSubscribersInfo, currSubsPage } from '../subscriptions.page';
import { UpdateUserNumbersComponent } from './update-user-numbers/update-user-numbers.component';
import { SubscriberRecentActivitiesComponent } from './subscriber-recent-activities/subscriber-recent-activities.component';
import { SubscriberEditProfileComponent } from './subscriber-edit-profile/subscriber-edit-profile.component';
import { ReactiveSubscriptionComponent } from './reactive-subscription/reactive-subscription.component';
import { ChangeNextBillingDateComponent } from './change-next-billing-date/change-next-billing-date.component';



/**
 * This variable is to store updated data of subscriber info
 * @export
 * @class SubscriberDetailsPage
 */
export let subscriberUpdateInfo;

/**
 * This variable is to store data of subscriber detail's popup
 * @export
 * @class SubscriberDetailsPage
 */
export let subsDtlPopoverCtrlr;

/**
 * This component is to set up Subscriber Details page
 * @export
 * @class SubscriberDetailsPage
 * @implements {OnInit}
 */
@Component({
  selector: 'app-subscriber-details',
  templateUrl: './subscriber-details.page.html',
  styleUrls: ['./subscriber-details.page.scss'],
})

export class SubscriberDetailsPage implements OnInit {

  /**
   * Creates an instance of SubscriberDetailsPage.
   * @param {PopoverController} popoverController This property is to get methods from PopoverController
   * @param {SearchDataService} subsDtlsSearch This property is to get methods from SearchDataService
   * @param {PaginationServiceService} subsDtlsPaging This property is to get methods from PaginationServices
   * @memberof SubscriberDetailsPage
   */
  constructor(
    private popoverController: PopoverController,
    private subsDtlsSearch: SearchDataService,
    public subsDtlsPaging: PaginationServiceService
  ) { }

  /**
   * This property is to get list of subscribers details
   * @memberof SubscriberDetailsPage
   */
  public subscribersDetails = customersDummiesData;

  /**
   * This property is to get selected subscriber data
   * @memberof SubscriberDetailsPage
   */
  public subscriberInfo;

  /**
   * This property is to set value of days different
   * @memberof SubscriberDetailsPage
   */
  public subscriberDetailsDaysLeft;

  /**
   * This property is to set value of number of subscriber over total subscribers qouta
   * @memberof SubscriberDetailsPage
   */
  public subsProgressBarValue;

  /**
   * This property is to set the subscriptions status of subscriber
   * @memberof SubscriberDetailsPage
   */
  public subsToggle = false;

  /**
   * This property is to get previous status of subscriptions
   * @memberof SubscriberDetailsPage
   */
  public prevToggleVal = true;

  /**
   * This property is to set values of pagination's configurations
   * @memberof SubscriberDetailsPage
   */
  configPageSubDtls: any;

  /**
   * This property is to set slides configurations
   * @memberof SubscriberDetailsPage
   */
  subsDtlsSlideOpts = {
    slidesPerView: 3,
    on: {
      beforeInit() {
        const swiper = this;

        swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      }
    }
  };

  /**
   * This method is to set initial value of properties. And it will be
   * executed when subscriber details page is loaded
   * @memberof SubscriberDetailsPage
   */
  ngOnInit() {
    this.subscriberInfo = selectedSubscribersInfo;
    subscriberUpdateInfo = this.subscriberInfo;
    this.subscriberDetailsDaysLeft = this.dateDifference(this.subscriberInfo.lastBillingOn,
      this.subscriberInfo.nextBillingOn);
    this.updateProgressBar(this.subscriberInfo.employeeNumber, this.subscriberInfo.employeeQuota);
    subsDtlPopoverCtrlr = this.popoverController;
    this.configPageSubDtls = this.subsDtlsPaging.pageConfig(10, currSubsPage, this.subscribersDetails.length);
  }

  /**
   * This method is to check subscriber status. If subscriber from inactive changed
   * to active, then execute popover of reactive subscriptions.
   * @memberof SubscriberDetailsPage
   */
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

  /**
   * This method is to calcualte date difference between last billing date
   * and next billing date. If the value is < 0 then set subsription's
   * status to inactive
   * @memberof SubscriberDetailsPage
   */
  dateDifference(startdt, enddt) {
    const dropdt: number = Number(new Date(enddt));
    const pickdt: number = Number(new Date(startdt));
    let daysleft: number = (dropdt - pickdt) / (24 * 3600 * 1000);
    daysleft = isNaN(daysleft) ? daysleft = 0 : daysleft ;
    this.subsToggle = (daysleft < 0) ? false : true;
    return daysleft;
  }

  /**
   * This method is to execute pop over to change next billing date
   * @memberof SubscriberDetailsPage
   */
  async openChangeDatePopup(evt) {
    const popup = await this.popoverController.create({
      component: ChangeNextBillingDateComponent,
      componentProps: { viewType: this},
      event: evt
    });

    return await popup.present();
  }

  /**
   * This method is to execute popover components based on it's Componet's name
   * @memberof SubscriberDetailsPage
   */
  async openSubsPopover(evtSubs, compName) {
    const popover = await this.popoverController.create({
      component: (compName === 'UpdateUserNumbersComponent') ? UpdateUserNumbersComponent :
                  (compName === 'SubscriberRecentActivitiesComponent') ? SubscriberRecentActivitiesComponent :
                   (compName === 'SubscriberEditProfileComponent') ? SubscriberEditProfileComponent :
                    ReactiveSubscriptionComponent,
      cssClass: 'pop-over-style'
    });

    return await popover.present();
  }

  /**
   * This method is to get selected subcsriber data
   * @memberof SubscriberDetailsPage
   */
  selectedClient(updateSubscriberInfo) {
    this.subscriberInfo = updateSubscriberInfo;
    subscriberUpdateInfo = this.subscriberInfo;
    this.subscriberDetailsDaysLeft = this.dateDifference(updateSubscriberInfo.lastBillingOn, updateSubscriberInfo.nextBillingOn);
    this.updateProgressBar(updateSubscriberInfo.employeeNumber, updateSubscriberInfo.employeeQuota);
  }

  /**
   * This method is to calculate percentage of current used employee qouta over total qouta 
   * @memberof SubscriberDetailsPage
   */
  updateProgressBar(currEmp, totalEmp) {
    this.subsProgressBarValue = currEmp / totalEmp;
    return this.subscriberInfo.progressBarValue =  this.subsProgressBarValue;
  }

  /**
   * This method is to update Subscriber's list pagination
   * @memberof SubscriberDetailsPage
   */
  pageChanged(event) {
    this.configPageSubDtls = this.subsDtlsPaging.pageConfig(10, event, this.subscribersDetails.length);
  }

  /**
   * This method is to get search result for subscriber list
   * @param {*} event
   * @memberof SubscriberDetailsPage
   */
  onSearchSubsDtls(event) {
    this.subscribersDetails = customersDummiesData;
    this.subscribersDetails = (event.detail.value.length > 0 ) ?
                          this.subsDtlsSearch.filerSearch(event.detail.value, this.subscribersDetails, 'subscription') :
                            this.subscribersDetails;
    this.pageChanged(1);
  }
}
