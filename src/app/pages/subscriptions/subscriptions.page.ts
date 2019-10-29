import { Component, OnInit} from '@angular/core';

import { PaginationServiceService } from '../../services/pagination-service.service';

import {customersDummiesData} from '../../app.component';



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
    public subsPaging: PaginationServiceService
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
  public subscribers = customersDummiesData;

  /**
   * This property is to set values of pagination configurations
   * for Subscription page
   * @memberof SubscriptionsPage
   */
  configPageSubs: any;


  /**
   * This method is to initial values of properties. It will be
   * executed when Subscription page is being loaded
   * @memberof SubscriptionsPage
   */
  ngOnInit() {
    this.configPageSubs = this.subsPaging.pageConfig(10, 1, this.subscribers.length);
    console.log('init:' + this.subsPaging.getSideMenuType());
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
