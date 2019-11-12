import { Observable } from 'rxjs';
import { Component, OnInit} from '@angular/core';

import { PaginationServiceService } from '../../services/pagination-service.service';

// import {customersDummiesData} from '../../app.component';

import { APIService } from '../../services/shared-service/api.service';
import { SearchDataService } from '../../services/search-data.service';
import { GlobalFunctionService } from '../../services/global-function.service';

/**
 * This variable is to store data of selected subscribers
 * @export
 * @class SubscriptionsPage
 */
export let selectedSubscribersInfo;

/**
 * This variable is to store data of current subscribers viewed
 * @export
 * @class SubscriptionsPage
 */
export let currSubsPage;


export let subscribersObjGlobal;

/**
 * This component is to set up Subscriptions page
 *
 * @export
 * @class SubscriptionsPage
 * @implements {OnInit}
 */
@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.page.html',
  styleUrls: ['./subscriptions.page.scss'],
})

export class SubscriptionsPage implements OnInit {

  /**
   * Creates an instance of SubscriptionsPage.
   * @param {PaginationServiceService} subsPaging This property is to get method from PaginationServiceService
   * @memberof SubscriptionsPage
   */
  constructor(
    public subsPaging: PaginationServiceService,
    private subsAPISvs: APIService,
    private subsSearch: SearchDataService
    ) {  }

  /**
   * This property is to set value of selected client
   * @memberof SubscriptionsPage
   */
  public currentClient;

  /**
   * This property is to bind values of subscribers data
   * @memberof SubscriptionsPage
   */
  // public subscribers = customersDummiesData;
  public subscribers;

  /**
   * This property is to set values of pagination configurations
   * for Subscription page
   * @memberof SubscriptionsPage
   */
  configPageSubs: any;

  public subscribersObj;
  // private subscribersObjGlobal;
  public subscribersObjLength;
  public activationDateDisplay;
  public globalFn = new GlobalFunctionService();
  /**
   * This method is to initial values of properties. It will be
   * executed when Subscription page is being loaded
   * @memberof SubscriptionsPage
   */
  ngOnInit() {
    // this.subsData.subscribeCustList();
    this.subscribers = [];
    this.subscribeCustList();
    this.configPageSubs = this.subsPaging.pageConfig(10, 1, 10);
    // this.configPageSubs = this.subsPaging.pageConfig(10, 1, this.subscribers.length);
    // console.log('init:' + this.subsPaging.getSideMenuType());
  }

  subscribeCustList() {
    this.getCustListAPI().subscribe(
      objCust => {
        this.subscribeSubsList(objCust);
      }
    );
  }

  subscribeSubsList(custObj) {
    return this.getSubsListAPI().subscribe(
      objSubs => {
        custObj.forEach(elementCust => {
          this.mergeCustWithSubsObj(elementCust, objSubs);
        });
        // this.subscribersObj = custObj;
        // this.subscribers = [];
        this.subscribers = custObj;
        this.subscribersObjLength = this.subscribers.length;
        subscribersObjGlobal = custObj;
        console.log('dataaa: ' + JSON.stringify(this.subscribers, null, " "));
        // this.activationDateDisplay = new GlobalFunctionService().changeDateFormat(this.subscribers.CREATION_TS); 
        // const dt1 = new GlobalFunctionService().changeDateFormat(this.subscribers.ACTIVATION_DATE); 
        // const dt2 = new GlobalFunctionService().changeDateFormat(this.subscribers.LAST_BILLING_DATE); 
        // const dt3 = new GlobalFunctionService().changeDateFormat(this.subscribers.NEXT_BILLING_DATE); 
        // CREATION_TS, ACTIVATION_DATE, LAST_BILLING_DATE, NEXT_BILLING_DATE
        // console.log('activationDateDisplay: ' + this.activationDateDisplay);
        // console.log('dt3: ' + dt3);
      }
    );
  }

  async mergeCustWithSubsObj(custElmt, subsObj) {
    await subsObj.forEach(subsElmt => {
      if (custElmt.CUSTOMER_GUID === subsElmt.CUSTOMER_GUID) {
        const convertDateStyle = {
          'SIMPLE_CREATION_TS': this.globalFn.changeDateFormatSimple(subsElmt.CREATION_TS),
          'SIMPLE_ACTIVATION_DATE': this.globalFn.changeDateFormatSimple(subsElmt.ACTIVATION_DATE),
          'SIMPLE_LAST_BILLING_DATE': this.globalFn.changeDateFormatSimple(subsElmt.LAST_BILLING_DATE),
          'SIMPLE_NEXT_BILLING_DATE': this.globalFn.changeDateFormatSimple(subsElmt.NEXT_BILLING_DATE),
          'FULL_CREATION_TS': this.globalFn.changeDateFormatFull(subsElmt.CREATION_TS),
          'FULL_ACTIVATION_DATE': this.globalFn.changeDateFormatFull(subsElmt.ACTIVATION_DATE),
          'FULL_LAST_BILLING_DATE': this.globalFn.changeDateFormatFull(subsElmt.LAST_BILLING_DATE),
          'FULL_NEXT_BILLING_DATE': this.globalFn.changeDateFormatFull(subsElmt.NEXT_BILLING_DATE),
        };
        custElmt = Object.assign(custElmt, subsElmt, convertDateStyle);
      }
    });
  }

  /**
   * This method is to send get request to API to get customers list
   * @returns {Observable<any>}
   * @memberof CustomersPage
   */
  getCustListAPI(): Observable<any> {
    return this.subsAPISvs.getApi('/api/admin/customer');
  }

  /**
   * This method is to send get request to API to get subscriptions list
   * @returns {Observable<any>}
   * @memberof CustomersPage
   */
  getSubsListAPI(): Observable<any> {
    return this.subsAPISvs.getApi('/api/admin/subscription');
  }

  /**
   * This method is to get selected subscriber to view details
   * @param {*} subscribersData
   * @returns
   * @memberof SubscriptionsPage
   */
  viewSubscriptionDetails(subscribersData) {
    return selectedSubscribersInfo = subscribersData;
  }

  /**
   * This method is to set search function for this component
   * @param {*} event
   * @memberof SubscriptionsPage
   */
  onSearchSubs(event) {
    this.subscribers = subscribersObjGlobal;
    this.subscribers = (event.detail.value.length > 0) ?
      this.subsSearch.filerSearch(event.detail.value, this.subscribers, 'FULLNAME') :
      this.subscribers;
    this.pageSubsChanged(1);
  }

  /**
   * This method is to update current pagination's configurations
   * when user change to other page
   * @param {*} event
   * @memberof SubscriptionsPage
   */
  pageSubsChanged(event) {
    currSubsPage = this.configPageSubs.currentPage;
    this.configPageSubs = this.subsPaging.pageConfig(10, event, this.subscribers.length);
  }
}
