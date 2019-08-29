import { Component, OnInit} from '@angular/core';
import {customerDummyData} from '../customers/customers.page';
import {customersDummiesData} from '../../app.component';

export let selectedSubscribersInfo;

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.page.html',
  styleUrls: ['./subscriptions.page.scss'],
})

export class SubscriptionsPage implements OnInit {

  public currentClient;
  public subscribers = customersDummiesData;

  constructor() { }

  ngOnInit() { }

  viewSubscriptionDetails(subscribersData) {
    return selectedSubscribersInfo = subscribersData;
  }
}
