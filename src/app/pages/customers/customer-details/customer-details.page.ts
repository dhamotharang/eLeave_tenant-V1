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
  public comp;
  public custToggle = false;
  public prevCustToggleVal = true;
  public daysLeftFn: SubscriberDetailsPage = new SubscriberDetailsPage(this.comp);
  constructor(
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
    // this.customerList = customerDummyData;
    this.selectedCustomerInfo = customerInfo;
    customerUpdateInfo = this.selectedCustomerInfo;
    this.calcDays = this.daysLeftFn.dateDifference(this.selectedCustomerInfo.lastBillingOn, this.selectedCustomerInfo.nextBillingOn);
    this.custToggle = (this.calcDays < 0) ? false : true;
    this.progressBarValue = this.selectedCustomerInfo.employeeNumber / this.selectedCustomerInfo.employeeQuota;
    popovrCtrlr = this.popoverController;
  }

  onChangeSelectedCustomer(changedCustomerItem) {
    this.selectedCustomerInfo = changedCustomerItem;
    customerUpdateInfo = this.selectedCustomerInfo;
    this.calcDays = this.daysLeftFn.dateDifference(this.selectedCustomerInfo.lastBillingOn, this.selectedCustomerInfo.nextBillingOn);
    this.custToggle = (this.calcDays < 0) ? false : true;
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

  checkStatus() {
    console.log('checkStatus');
    
    // if (this.custToggle !== this.prevCustToggleVal) {
    //   if ((this.prevCustToggleVal === true) && (this.custToggle === false)) {
    //     console.log('ddd');
    //   } else {
    //     console.log('ssss');
    //   }
    // }
  }

  optionsSelected(obj) {
    console.log('optionsSelected');
    console.log(obj);
  }


}
