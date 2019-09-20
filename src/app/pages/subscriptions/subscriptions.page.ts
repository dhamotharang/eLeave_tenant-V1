import { Component, OnInit} from '@angular/core';

import { PaginationServiceService } from '../../services/pagination-service.service';

import {customerDummyData} from '../customers/customers.page';
import {customersDummiesData} from '../../app.component';


export let selectedSubscribersInfo, currSubsPage;

/**
 * Component for subscriptions page
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

  public currentClient;
  public subscribers = customersDummiesData;
  configPageSubs: any;

  /**
   *Creates an instance of SubscriptionsPage.
   * @memberof SubscriptionsPage
   */
  constructor(
    public subsPaging: PaginationServiceService
    ) {
      this.configPageSubs = {
        itemsPerPage: 10,
        currentPage: 1,
        totalItems: this.subscribers.length
    };
  }


  /**
   * Initilization of SubscriptionsPage
   *
   * @memberof SubscriptionsPage
   */
  ngOnInit() {
    // currSubsPage = this.subsPaging.pageConfig(10, 1, this.subscribers.length);
  }


  /**
   * Getting selected subscriber to view details
   *
   * @param {*} subscribersData
   * @returns
   * @memberof SubscriptionsPage
   */
  viewSubscriptionDetails(subscribersData) {
    return selectedSubscribersInfo = subscribersData;
  }


  /**
   * Event for subscriber pagination changes
   *
   * @param {*} event
   * @memberof SubscriptionsPage
   */
  pageSubsChanged(event) {
    this.configPageSubs.currentPage = event;
    currSubsPage = this.configPageSubs.currentPage;
    // currSubsPage = this.subsPaging.pageConfig(10, this.configPageSubs.currentPage, this.subscribers.length);
  }
}
