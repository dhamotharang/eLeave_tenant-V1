import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import {customerInfo, customerDummyData} from '../customers.page';
import {SubscriberDetailsPage} from '../../subscriptions/subscriber-details/subscriber-details.page';
import { UpdateCustomerDetailsComponent } from './update-customer-details/update-customer-details.component';
import { CustomerHistoryComponent } from './customer-history/customer-history.component';


export let customerUpdateInfo;
export let popovrCtrlr;

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.page.html',
  styleUrls: ['./customer-details.page.scss'],
})

export class CustomerDetailsPage implements OnInit {

  public customerList = customerDummyData;
  public selectedCustomerInfo;
  public calcDays: number;
  public progressBarValue;

  public daysLeftFn: SubscriberDetailsPage = new SubscriberDetailsPage();
  constructor(
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
    // this.customerList = customerDummyData;
    this.selectedCustomerInfo = customerInfo;
    customerUpdateInfo = this.selectedCustomerInfo;
    this.calcDays = this.daysLeftFn.dateDifference(this.selectedCustomerInfo.lastBillingOn, this.selectedCustomerInfo.nextBillingOn);
    this.progressBarValue = this.selectedCustomerInfo.employeeNumber / this.selectedCustomerInfo.employeeQuota;
    popovrCtrlr = this.popoverController;
  }

  onChangeSelectedCustomer(changedCustomerItem) {
    this.selectedCustomerInfo = changedCustomerItem;
    customerUpdateInfo = this.selectedCustomerInfo;
    this.calcDays = this.daysLeftFn.dateDifference(this.selectedCustomerInfo.lastBillingOn, this.selectedCustomerInfo.nextBillingOn);
    this.progressBarValue = this.selectedCustomerInfo.employeeNumber / this.selectedCustomerInfo.employeeQuota;
  }

  async openPopover(evt, compName) {
    const historyPopOver = await this.popoverController.create({
      component: (compName === 'UpdateCustomerDetailsComponent') ? UpdateCustomerDetailsComponent : CustomerHistoryComponent,
      componentProps: {
        viewType: this
      },
      event: evt,
      cssClass: 'pop-over-style'
    });

    return await historyPopOver.present();
  }

  checkStatus(remainingDays) {
    // console.log('checkStatus');
    // console.log(remainingDays);
    if (remainingDays < 1) {
      document.getElementById('myonoffswitch');
    }
  }

  optionsSelected(obj) {
    console.log('optionsSelected');
    console.log(obj);
  }


}
