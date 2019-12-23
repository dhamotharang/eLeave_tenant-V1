import { Component, OnInit, } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import { PaginationServiceService } from '../../../services/pagination-service.service';
import { SearchDataService } from '../../../services/search-data.service';
import { APIService } from './../../../services/shared-service/api.service';
import { GlobalFunctionService } from '../../../services/global-function.service';
import { InfoPopupService } from './../../../layout/notificationPopup/info-popup.service';

import { selectedSubscribersInfo, subscribersObjGlobal } from '../subscriptions.page';
// import { selectedSubscribersInfo, currSubsPage, subscribersObjGlobal } from '../subscriptions.page';
import { UpdateUserNumbersComponent } from './update-user-numbers/update-user-numbers.component';
import { SubscriberRecentActivitiesComponent } from './subscriber-recent-activities/subscriber-recent-activities.component';
import { SubscriberEditProfileComponent } from './subscriber-edit-profile/subscriber-edit-profile.component';
import { ReactiveSubscriptionComponent } from './reactive-subscription/reactive-subscription.component';
import { ChangeNextBillingDateComponent } from './change-next-billing-date/change-next-billing-date.component';

import { customerAllList, selectedCustomerList } from './../../customers/customer-details/customer-details.page';

 
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
   * @param {InfoPopupService} subsDtlsInfoPopup This property is to get methods from InfoPopupService
   * @param {PaginationServiceService} subsDtlsPaging This property is to get methods from PaginationServiceService
   * @param {APIService} subsDtlsApiSvs This property is to get methods from APIService
   * @memberof SubscriberDetailsPage
   */
  constructor(
    private popoverController: PopoverController, 
    private subsDtlsInfoPopup: InfoPopupService,
    public subsDtlsPaging: PaginationServiceService,
    public subsDtlsApiSvs: APIService,
  ) { }

  // public subsDtlsPaging = new PaginationServiceService;

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
  // configPageSubDtls: any;

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
   * This propery is to bind value from subscription inactivator 
   * @memberof SubscriberDetailsPage
   */
  public inactivePIC;

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
    this.subscribersDetails = (customerAllList !== undefined) ? customerAllList : subscribersObjGlobal;
    this.subscriberInfo = (selectedCustomerList !== undefined) ? selectedCustomerList : selectedSubscribersInfo;
    this.getSubscriptionsData(this.subscriberInfo);
    subscriberUpdateInfo = this.subscriberInfo;
    subsDtlPopoverCtrlr = this.popoverController;
    this.subsDtlsApiSvs.reqGetCurrUserDetails().subscribe(
      resData => {
        // console.log('reqGetCurrUserDetails');
        this.inactivePIC = resData[0];
      }
    );

    // this.configPageSubDtls = this.subsDtlsPaging.pageConfig(10, currSubsPage, this.subscribersDetails.length);
  }

  /**
   * This method is to check subscription's status
   * @param {*} selectedSubsData
   * @memberof SubscriberDetailsPage
   */
  checkStatus(selectedSubsData) {
    if (selectedSubsData.STATUS === 0) {
      this.subsToggle = false;
      this.prevToggleVal = !this.subsToggle;
      this.inactiveMsg =  selectedSubsData.REMARKS;// 'This subscription has been deactivated'
      document.getElementById('reactivesubsnotice').hidden = false;

    } else {
      // this.custToggle = true
      this.subsToggle = (this.subscriberDetailsDaysLeft < 0) ? false : true;
      this.prevToggleVal = !this.subsToggle;

    }
    
  } 

  /**
   * This method is to calculate day(s) left between current date and next billing date. If it was expired, the 
   * system will automatically deactive the subscription. Else, will keep subscription activated
   * @memberof SubscriberDetailsPage
   */
  checkDayLeft() {
    console.log('subscriberInfo:' + JSON.stringify(this.subscriberInfo, null, " "));
    this.subscriberDetailsDaysLeft = this.subDtlsGlobalFn.dateDiff(this.subscriberInfo.NEXT_BILLING_DATE);
    if (this.subscriberDetailsDaysLeft < 0) {
      this.prevToggleVal = true;
      this.subsToggle = false;
      // document.getElementById('reasonTextId').hidden = true;
      this.inactiveMsg = 'This subscription has been deactivated by system due to expired license. ';
      // this.inactiveReason = 'Expired subscription';
      document.getElementById('reactivesubsnotice').hidden = false;
      this.reqToUpdateSubs('expired', 0, this.inactiveMsg);
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
    console.log('toggle');
    console.log('this.subsToggle: ' + this.subsToggle);
    console.log('his.prevToggleVal: ' + this.prevToggleVal);
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
        
        document.getElementById('reactivesubsnotice').hidden = (data.data === false) ? false : true;
        this.prevToggleVal = !data.data;
        this.subsToggle = data.data; 
        this.confirmOpt = !data.data;
        console.log('this.subscriberInfo reactive: ' + JSON.stringify(this.subscriberInfo, null, " "));
        if (data.data === true) {
          this.statusLog('Subscriptions has been reactivated');
          this.selectedClient(this.subscriberInfo);
        }
      }
    });

    return await popover.present();
  }

  /**
   * This method is to execute popover components based on it's Componet's name
   * @memberof SubscriberDetailsPage
   */
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
    
    this.getSubscriptionsData(updateSubscriberInfo);
    // this.subscriberInfo = updateSubscriberInfo;
    // subscriberUpdateInfo = this.subscriberInfo;
    // this.subscriberDetailsDaysLeft = this.checkDayLeft();
    // this.updateProgressBar(updateSubscriberInfo.USED_QUOTA, updateSubscriberInfo.QUOTA);
  }

  /**
   * This method is to get current subscription data from subscription_guid
   * @param {*} data
   * @memberof SubscriberDetailsPage
   */
  getSubscriptionsData(data) {
    this.subsDtlsApiSvs.reqGetApi('/api/admin/subscription/customer_info/' + data.SUBSCRIPTION_GUID).subscribe(
      subsResp => {
        const newData = {
          CUSTOMER_GUID: data.CUSTOMER_GUID,
          CUSTOMER_LABEL: data.CUSTOMER_LABEL,
          FULLNAME: subsResp.customer_name,
          NICKNAME: data.NICKNAME,
          EMAIL: subsResp.customer_email,
          CONTACT_NO: subsResp.customer_contact_no,
          COMPANY_NAME: subsResp.customer_company_name,
          ADDRESS1: subsResp.customer_address1,
          ADDRESS2: subsResp.customer_address2,
          POSTCODE: subsResp.customer_zip,
          CITY: subsResp.customer_city,
          STATE: subsResp.customer_state,
          COUNTRY: subsResp.customer_country,
          CURRENCY: subsResp.customer_currency,
          SALESPERSON: subsResp.salesperson_pic,
          CREATION_TS: subsResp.creation_date,
          SUBSCRIPTION_GUID: subsResp.subscription_id,
          SUBSCRIPTION_LABEL: subsResp.subscription_label,
          PLAN: subsResp.subscription_plan,
          STATUS: subsResp.subscription_status,
          REMARKS: subsResp.remarks,
          QUOTA: subsResp.subscription_quota,
          USED_QUOTA: subsResp.subscription_used_quota,
          ACTIVATION_DATE: subsResp.activation_date,
          LAST_BILLING_DATE: subsResp.last_billing_date,
          NEXT_BILLING_DATE: subsResp.next_billing_date,
          RECURR_INTERVAL: subsResp.recurr_interval,
          RECURR_INTERVAL_VAL: subsResp.recurr_interval_val,
          BILLING_CYCLE: subsResp.billing_cycle,
          SIMPLE_CREATION_TS: this.subDtlsGlobalFn.changeDateFormatSimple(subsResp.creation_date),
          SIMPLE_ACTIVATION_DATE: this.subDtlsGlobalFn.changeDateFormatSimple(subsResp.activation_date),
          SIMPLE_LAST_BILLING_DATE: this.subDtlsGlobalFn.changeDateFormatSimple(subsResp.last_billing_date),
          SIMPLE_NEXT_BILLING_DATE: this.subDtlsGlobalFn.changeDateFormatSimple(subsResp.next_billing_date),
          FULL_CREATION_TS: this.subDtlsGlobalFn.changeDateFormatFull(subsResp.creation_date),
          FULL_ACTIVATION_DATE: this.subDtlsGlobalFn.changeDateFormatFull(subsResp.activation_date),
          FULL_LAST_BILLING_DATE: this.subDtlsGlobalFn.changeDateFormatFull(subsResp.last_billing_date),
          FULL_NEXT_BILLING_DATE: this.subDtlsGlobalFn.changeDateFormatFull(subsResp.next_billing_date),
        }
        this.subscriberInfo = newData;
        subscriberUpdateInfo = this.subscriberInfo;
        this.subsToggle = (this.subscriberInfo.STATUS === 1) ? true : false;
        this.prevToggleVal = !this.subsToggle;
        this.checkDayLeft();
        this.checkStatus(this.subscriberInfo);
        this.updateProgressBar(this.subscriberInfo.USED_QUOTA, this.subscriberInfo.QUOTA);


      }
    );
  }

  /**
   * This method is to calculate percentage of current used employee qouta over total qouta 
   * @memberof SubscriberDetailsPage
   */
  updateProgressBar(currEmp, totalEmp) {
    this.subsProgressBarValue = currEmp / totalEmp;
    return this.subscriberInfo.progressBarValue =  this.subsProgressBarValue;
  }

  // /**
  //  * This method is to update Subscriber's list pagination
  //  * @memberof SubscriberDetailsPage
  //  */
  // pageChanged(event) {
  //   // this.configPageSubDtls = this.subsDtlsPaging.pageConfig(10, event, this.subscribersDetails.length);
  // }

  /**
   * This method is to configure popup that will be prompted when user trigger deactive slider  
   * @memberof SubscriberDetailsPage
   */
  async confirmDeactive() {
    const confirmAlert = await this.subsDtlsAlert.create({
      header: 'Confirmation',
      message: 'Deactivate this subscription? Please fill in your reason',
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
        text: 'Deactivate',
        handler: (data) => {
          console.log('this.inactivePIC 1: ' + JSON.stringify(this.inactivePIC, null, " "));
          this.inactiveMsg = 'This subscription has been deactivated by ' + this.inactivePIC.FULLNAME + ' (' + 
            this.inactivePIC.ROLE + '). Reason: ' + data.inactiveSubscription;
          this.inactiveReason = data.inactiveSubscription;
          // document.getElementById('reasonTextId').hidden = false;
          document.getElementById('reactivesubsnotice').hidden = false;
          this.confirmOpt = true;
          this.statusLog('Subscriptions has been deactivated');
          console.log('this.inactiveMsg: ' + JSON.stringify(this.inactiveMsg, null, " "));
          this.reqToUpdateSubs('deactivated', 0, this.inactiveMsg);
        }
      }
    ]
  }

  /**
   * This method is to send request to API to update subscription
   * @param {*} type This parameter is to bind value of deacrivation type
   * @param {*} status This parameter is to pass subscriptions status value
   * @param {*} reason This parameter is to pass subscriptions remarks value
   * @memberof SubscriberDetailsPage
   */
  reqToUpdateSubs(type, status, reason) {
    this.subsDtlsApiSvs.reqPatchApi({
      subscriptionLabel: this.subscriberInfo.SUBSCRIPTION_LABEL,
      customerGuid: this.subscriberInfo.CUSTOMER_GUID,
      subscriptionPlan: this.subscriberInfo.PLAN,
      subscriptionStatus: status,// this.subscriberInfo.STATUS,
      subscriptionQuota: this.subscriberInfo.QUOTA,
      activationDate: this.subscriberInfo.ACTIVATION_DATE,
      lastBillingDate: this.subscriberInfo.LAST_BILLING_DATE,
      nextBillingDate: this.subscriberInfo.NEXT_BILLING_DATE,
      recurrInterval: this.subscriberInfo.RECURR_INTERVAL,
      recurrIntervalVal: this.subscriberInfo.RECURR_INTERVAL_VAL,
      billingCycle: this.subscriberInfo.BILLING_CYCLE,
      subscriptionGuid: this.subscriberInfo.SUBSCRIPTION_GUID,
      remarks: reason,
    }, '/api/admin/subscription').subscribe(
      resData => {
        if (type === 'deactivated') {
          this.subsDtlsInfoPopup.alertPopup('Subscription is deactivated', 'alert-success');
        }
      }
    );
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
    // this.pageChanged(1);
  }

  /**
   * This method is to send request to API to into subscriber's activity log
   * @param {*} msg This parametere is to pass message to activity log
   * @memberof SubscriberDetailsPage
   */
  statusLog(msg) {
    this.subsDtlsApiSvs.reqPostApi({
      customerId: this.subscriberInfo.CUSTOMER_GUID,
      subscriptionId: this.subscriberInfo.SUBSCRIPTION_GUID,
      message: msg
    }, '/api/admin/activity-log').subscribe(data => {});
  }
}
