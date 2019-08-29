import { Component, OnInit} from '@angular/core';
import {customerDummyData} from '../customers/customers.page';
import {customersDummiesData} from '../../app.component';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.page.html',
  styleUrls: ['./subscriptions.page.scss'],
})

export class SubscriptionsPage implements OnInit {

  public currentClient;
  public subscribers = customersDummiesData;

  constructor() { }

  ngOnInit() {
    // console.log(customersDummiesData);
    // console.log(this.subscribers);
    // this.subscribers = customersDummiesData;
    // console.log(this.subscribers);

  }
}