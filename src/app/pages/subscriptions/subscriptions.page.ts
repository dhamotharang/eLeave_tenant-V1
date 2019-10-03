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
   * @memberof SubscriptionsPage
   */
  constructor(
    private subsPaging: PaginationServiceService
    ) {
      this.configPageSubs = {
        itemsPerPage: 10,
        currentPage: 1,
        totalItems: this.subscribers.length
    };
  }

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
  ngOnInit() { }


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
    this.configPageSubs.currentPage = event;
    currSubsPage = this.configPageSubs.currentPage;
  }
}
