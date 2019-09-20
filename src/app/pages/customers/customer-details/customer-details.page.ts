import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { PaginationServiceService } from '../../../services/pagination-service.service';
import { SearchDataService } from '../../../services/search-data.service';

import {customerInfo, customerDummyData, currCustPage} from '../customers.page';
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
  public configPageCustDtls;
  public searchCust = '';

  constructor(
    public popoverController: PopoverController,
    private custDtlsPaging: PaginationServiceService,
    private custListSearch: SearchDataService
  ) { }

  ngOnInit() {
    this.selectedCustomerInfo = customerInfo;
    customerUpdateInfo = this.selectedCustomerInfo;
    this.calcDays = this.daysLeftFn.dateDifference(this.selectedCustomerInfo.lastBillingOn, this.selectedCustomerInfo.nextBillingOn);
    this.custToggle = (this.calcDays < 0) ? false : true;
    this.progressBarValue = this.selectedCustomerInfo.employeeNumber / this.selectedCustomerInfo.employeeQuota;
    popovrCtrlr = this.popoverController;
    this.configPageCustDtls = this.custDtlsPaging.pageConfig(9, currCustPage, this.customerList.length);
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
      // componentProps: {
      //   viewType: this
      // },
      // event: evt,
      cssClass: 'pop-over-style'
    });

    return await historyPopOver.present();
  }

  pageCustDtlsChanged(event) {
    this.configPageCustDtls = this.custDtlsPaging.pageConfig(9, event, this.customerList.length);
  }

  onSearchCustDtls(event) {
    this.customerList = customerDummyData;
    this.customerList = (event.detail.value.length > 0 ) ?
                          this.custListSearch.filerSearch(event.detail.value, this.customerList, 'clientName') :
                            this.customerList;
    this.pageCustDtlsChanged(1);
  }


}
