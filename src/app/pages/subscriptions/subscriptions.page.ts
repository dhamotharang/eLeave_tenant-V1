import { Component, OnInit} from '@angular/core';
import {customerDummyData} from '../customers/customers.page';
import {customersDummiesData} from '../../app.component';


export let selectedSubscribersInfo;


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


  /**
   *Creates an instance of SubscriptionsPage.
   * @memberof SubscriptionsPage
   */
  constructor() { }


  /**
   * Initilization of SubscriptionsPage
   *
   * @memberof SubscriptionsPage
   */
  ngOnInit() { }


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
}
