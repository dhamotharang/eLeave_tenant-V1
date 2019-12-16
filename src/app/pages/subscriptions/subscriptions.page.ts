import { Observable } from 'rxjs';
import { Component, OnInit} from '@angular/core';

import { PaginationServiceService } from '../../services/pagination-service.service';

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

/**
 * This variable is to store data of for all subscriptions
 * @export
 * @class SubscriptionsPage
 */
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
  /**
   * Creates an instance of SubscriptionsPage.
   * @param {PaginationServiceService} subsPaging This property is to get method from PaginationServiceService
   * @param {APIService} subsAPISvs This property is to get method from APIService
   * @param {SearchDataService} subsSearch This property is to get method from SearchDataService
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
  public subscribers;

  /**
   * This property is to set values of pagination configurations
   * for Subscription page
   * @memberof SubscriptionsPage
   */
  configPageSubs: any;

  /**
   * This property is to bind values of subscribers objects
   * @memberof SubscriptionsPage
   */
  public subscribersObj;

  /**
   * This property is to bind object length of subscribersObj
   * @memberof SubscriptionsPage
   */
  public subscribersObjLength;
  
  /**
   * This property is to get methods from GlobalFunctionService
   * @memberof SubscriptionsPage
   */
  public globalFn = new GlobalFunctionService();

  /**
   * This method is to initial values of properties. It will be
   * executed when Subscription page is being loaded
   * @memberof SubscriptionsPage
   */
  ngOnInit() {
    this.subscribers = [];
    this.subscribeCustList();
    this.configPageSubs = this.subsPaging.pageConfig(10, 1, 10);
    // this.configPageSubs = this.subsPaging.pageConfig(10, 1, this.subscribers.length);
  }

  /**
   * This method is to iterate the customers data list
   * @memberof SubscriptionsPage
   */
  subscribeCustList() {
    this.getCustListAPI().subscribe(
      objCust => {
        this.subscribeSubsList(objCust);
      }
    );
  }

  /**
   * This method is to iterate the subscribers data list then marge
   * customer & subscriber data
   * @param {*} custObj This property is to pass customer objects
   * @returns
   * @memberof SubscriptionsPage
   */
  subscribeSubsList(custObj) {
    return this.getSubsListAPI().subscribe(
      objSubs => {
        custObj.forEach(elementCust => {
          this.mergeCustWithSubsObj(elementCust, objSubs);
        });

        this.subscribers = custObj;
        this.subscribersObjLength = this.subscribers.length;
        subscribersObjGlobal = custObj;
      }
    );
  }

  /**
   * This method is to merge customer object and subscriber object
   * @param {*} custElmt This property is to pass customer object
   * @param {*} subsObj This property is to pass subscriptions object
   * @memberof SubscriptionsPage
   */
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
    console.log('subscribersData: ' + JSON.stringify(subscribersData, null, " "));
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
