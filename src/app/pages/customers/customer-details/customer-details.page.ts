import { Component, OnInit } from '@angular/core';
import {customerInfo, customerDummyData} from '../customers.page';
import {SubscriberDetailsPage} from '../../subscriptions/subscriber-details/subscriber-details.page';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.page.html',
  styleUrls: ['./customer-details.page.scss'],
})

export class CustomerDetailsPage implements OnInit {

  public customerList;
  public selectedCustomerInfo;
  public calcDays: number;
  public progressBarValue;

  public daysLeftFn: SubscriberDetailsPage = new SubscriberDetailsPage();
  constructor() { }

  ngOnInit() {
    this.customerList = customerDummyData;
    this.selectedCustomerInfo = customerInfo;
    this.calcDays = this.daysLeftFn.dateDifference(this.selectedCustomerInfo.lastBillingOn, this.selectedCustomerInfo.nextBillingOn);
    this.progressBarValue = this.selectedCustomerInfo.employeeNumber / this.selectedCustomerInfo.employeeQuota;
    console.log(this.selectedCustomerInfo.childrenCompany);
    // this.selectedCustomerInfo.childrenCompany = JSON.stringify(this.selectedCustomerInfo.childrenCompany);
  }

  onChangeSelectedCustomer(changedCustomerItem) {
    this.selectedCustomerInfo = changedCustomerItem;
    this.calcDays = this.daysLeftFn.dateDifference(this.selectedCustomerInfo.lastBillingOn, this.selectedCustomerInfo.nextBillingOn);
    this.progressBarValue = this.selectedCustomerInfo.employeeNumber / this.selectedCustomerInfo.employeeQuota;

  }
}
