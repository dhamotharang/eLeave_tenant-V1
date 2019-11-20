import { Observable } from 'rxjs';
import { Component, OnInit, } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import { PaginationServiceService } from '../../../services/pagination-service.service';
import { SearchDataService } from '../../../services/search-data.service';
import { APIService } from './../../../services/shared-service/api.service';
import { GlobalFunctionService } from '../../../services/global-function.service';

import { selectedSubscribersInfo, currSubsPage, subscribersObjGlobal } from '../subscriptions.page';
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
   *Creates an instance of SubscriberDetailsPage.
   * @param {PopoverController} popoverController This property is to get methods from PopoverController
   * @param {PaginationServiceService} subsDtlsPaging This property is to get methods from PaginationServiceService
   * @param {APIService} subsDtls This property is to get methods from APIService
   * @memberof SubscriberDetailsPage
   */
  constructor(
    private popoverController: PopoverController, 
    public subsDtlsPaging: PaginationServiceService,
    public subsDtls: APIService
  ) { }

  /**
   * This property is to get methods from AlertController
   * @private
   * @memberof SubscriberDetailsPage
   */
  private subsDtlsAlert = new AlertController;

  /**
   * This property is to get methods from GlobalFunctionService
   * @private
   * @memberof SubscriberDetailsPage
   */
  private subDtlsGlobalFn = new GlobalFunctionService;

  /**
   * This property is to get list of subscribers details
   * @memberof SubscriberDetailsPage
   */
  public subscribersDetails = subscribersObjGlobal;
  
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
  public subsToggle;

  /**
   * This property is to get previous status of subscriptions
   * @memberof SubscriberDetailsPage
   */
  public prevToggleVal;

  /**
   * This property is to set values of pagination's configurations
   * @memberof SubscriberDetailsPage
   */
  configPageSubDtls: any;

  /**
   * This property is to bind value from confirmation to deactive subcription's option
   * @private
   * @memberof SubscriberDetailsPage
   */
  private confirmOpt;

  /**
   * This property is to bind value from inactive subscription messages
   * @memberof SubscriberDetailsPage
   */
  public inactiveMsg = '';

  /**
   * This property is to bind value from inactivity subscription's reason
   * @memberof SubscriberDetailsPage
   */
  public inactiveReason = '';

  /**
   * This property is to set slides configurations
   * @memberof SubscriberDetailsPage
   */
  subsDtlsSlideOpts = this.subDtlsGlobalFn.slideOption();

  /**
   * This method is to set initial value of properties. And it will be
   * executed when subscriber details page is loaded
   * @memberof SubscriberDetailsPage
   */
  ngOnInit() {
    this.subscriberInfo = selectedSubscribersInfo;
    this.subsToggle = (this.subscriberInfo.STATUS === 1) ? true : false;
    this.prevToggleVal = !this.subsToggle;
    subscriberUpdateInfo = this.subscriberInfo;
    this.checkDayLeft();
    this.updateProgressBar(this.subscriberInfo.USED_QUOTA, this.subscriberInfo.QUOTA);
    subsDtlPopoverCtrlr = this.popoverController;
    this.configPageSubDtls = this.subsDtlsPaging.pageConfig(10, currSubsPage, 10);
    // this.configPageSubDtls = this.subsDtlsPaging.pageConfig(10, currSubsPage, this.subscribersDetails.length);
  }


  /**
   * This method is to calculate day(s) left between current date and next billing date. If it was expired, the 
   * system will automatically deactive the subscription. Else, will keep subscription activated
   * @memberof SubscriberDetailsPage
   */
  checkDayLeft() {
    this.subscriberDetailsDaysLeft = this.subDtlsGlobalFn.dateDiff(this.subscriberInfo.NEXT_BILLING_DATE);
    if (this.subscriberDetailsDaysLeft < 1) {
      this.prevToggleVal = true;
      this.subsToggle = false;
      document.getElementById('reasonTextId').hidden = true;
      this.inactiveMsg = 'This subscription was deactivated by system due to expired subscription. ';
      // this.inactiveReason = 'Expired subscription';
      document.getElementById('reactivesubsnotice').hidden = false;
    } else {
      this.prevToggleVal = false;
      this.subsToggle = true;
      document.getElementById('reactivesubsnotice').hidden = true;
    }
  }

  /**
   * This method is to check subscriber status. If subscriber from inactive changed
   * to active, then execute popover of reactive subscriptions.
   * @memberof SubscriberDetailsPage
   */
  checkToggle() {
    if (this.subsToggle !== this.prevToggleVal) {
      if ((this.prevToggleVal === false) && (this.subsToggle === true)) {
        this.confirmDeactive();
      } else {
        document.getElementById('reactivesubsnotice').hidden = true;
        this.openSubsPopover(Event, 'ReactiveSubscriptionComponent', 1);
      }
      this.prevToggleVal = this.subsToggle;
    }
  }

  /**
   * This method is to execute popover components based on it's Componet's name
   * @memberof SubscriberDetailsPage
   */
  async openSubsPopover(evtSubs, compName, type) {
    let popover;

    // if (type === 1) {
    popover = await this.popoverController.create({
      component: (compName === 'UpdateUserNumbersComponent') ? UpdateUserNumbersComponent :
        (compName === 'SubscriberRecentActivitiesComponent') ? SubscriberRecentActivitiesComponent :
          (compName === 'SubscriberEditProfileComponent') ? SubscriberEditProfileComponent :
            ReactiveSubscriptionComponent,
      cssClass: 'pop-over-style'
    });
    // } else {
    //   popover = await this.popoverController.create({
    //     component: ChangeNextBillingDateComponent,
    //     componentProps: { viewType: this },
    //     event: evtSubs
    //   });
    // }

    popover.onDidDismiss().then((data) => {
      if (compName === 'ReactiveSubscriptionComponent') {
        this.prevToggleVal = !data.data;
        this.subsToggle = data.data; 
        this.confirmOpt = !data.data;
        this.statusLog('Subscriptions has been reactivated');
      }
    });

    return await popover.present();
  }

  async openNextBillDatePopover(evtSubs) {
    let popup = await this.popoverController.create({
        component: ChangeNextBillingDateComponent,
        componentProps: { viewType: this },
        event: evtSubs
      });

    return await popup.present();
  }

  /**
   * This method is to get selected subcsriber data
   * @memberof SubscriberDetailsPage
   */
  selectedClient(updateSubscriberInfo) {
    this.subscriberInfo = updateSubscriberInfo;
    subscriberUpdateInfo = this.subscriberInfo;
    this.subscriberDetailsDaysLeft = this.checkDayLeft();
    this.updateProgressBar(updateSubscriberInfo.USED_QUOTA, updateSubscriberInfo.QUOTA);
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
   * This method is to configure popup that will be prompted when user trigger deactive slider  
   * @memberof SubscriberDetailsPage
   */
  async confirmDeactive() {
    const confirmAlert = await this.subsDtlsAlert.create({
      header: 'Confirmation',
      message: 'Are you sure want to deactive this subscription? Please fill in your reason',
      inputs: [
        {
          name: 'inactiveSubscription',
          type: 'text',
          placeholder: 'Reason...'
        }
      ],
      cssClass: 'alert-warning-confirm',
      buttons: this.confirmDeactiveButtons()
    });
    await confirmAlert.present();

  }

  /**
   * This method is to set handler of confirmation popup window to deactive the subscription
   * @returns
   * @memberof SubscriberDetailsPage
   */
  confirmDeactiveButtons() {
    return [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          this.prevToggleVal = false;
          this.subsToggle = true;
          this.confirmOpt = false;
        }
      },
      {
        text: 'Okay',
        handler: (data) => {
          this.inactiveMsg = 'This subscription was deactivated by salesperson. ';
          this.inactiveReason = data.inactiveSubscription;
          document.getElementById('reasonTextId').hidden = false;
          document.getElementById('reactivesubsnotice').hidden = false;
          this.confirmOpt = true;
          this.statusLog('Subscriptions has been deactivated by salesperson. Reason: ' + data.inactiveSubscription);
        }
      }
    ]
  }

  /**
   * This method is to get search result for subscriber list
   * @param {*} event
   * @memberof SubscriberDetailsPage
   */
  onSearchSubsDtls(event) {
    this.subscribersDetails = subscribersObjGlobal; // SearchDataService

    this.subscribersDetails = (event.detail.value.length > 0) ?
      SearchDataService.prototype.filerSearch(event.detail.value, this.subscribersDetails, 'COMPANY_NAME') :
      this.subscribersDetails;
    // this.subscribersDetails = (event.detail.value.length > 0 ) ?
    //   this.subsDtlsSearch.filerSearch(event.detail.value, this.subscribersDetails, 'COMPANY_NAME') :
    //     this.subscribersDetails;
    this.pageChanged(1);
  }

  /**
   * This method is to send request to API to into subscriber's activity log
   * @param {*} msg This parametere is to pass message to activity log
   * @memberof SubscriberDetailsPage
   */
  statusLog(msg) {
    this.subsDtls.reqPostApi({
      customerId: this.subscriberInfo.CUSTOMER_GUID,
      subscriptionId: this.subscriberInfo.SUBSCRIPTION_GUID,
      message: msg
    }, '/api/admin/activity-log').subscribe(data => {});
  }
}
