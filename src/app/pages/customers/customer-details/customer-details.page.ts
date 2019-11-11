import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { PaginationServiceService } from '../../../services/pagination-service.service';
import { SearchDataService } from '../../../services/search-data.service';

import { customerInfo, customerDataList, currCustPage } from '../customers.page';
import { SubscriberDetailsPage } from '../../subscriptions/subscriber-details/subscriber-details.page';
import { UpdateCustomerDetailsComponent } from './update-customer-details/update-customer-details.component';
import { CustomerHistoryComponent } from './customer-history/customer-history.component';


/**
 * This variable is to store data of customer details
 * @export
 * @class CustomerDetailsPage
 */
export let customerUpdateInfo;

/**
 * This variable is to store data of popup in Customer Details page
 * @export
 * @class CustomerDetailsPage
 */
export let popovrCtrlr;

/**
 * This component is to set Customer Details page
 * @export
 * @class CustomerDetailsPage
 * @implements {OnInit}
 */
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.page.html',
  styleUrls: ['./customer-details.page.scss'],
})

export class CustomerDetailsPage implements OnInit {

  /**
   * Creates an instance of CustomerDetailsPage.
   * @param {PaginationServiceService} custDtlsPaging This property is to get methods from PaginationServiceService
   * @param {PopoverController} popoverController  This property is to get methods from PopoverController
   * @param {SearchDataService} custListSearch  This property is to get methods from SearchDataService
   * @memberof CustomerDetailsPage
   */
  constructor(
    public custDtlsPaging: PaginationServiceService,
    private popoverController: PopoverController,
    private custListSearch: SearchDataService
  ) { }

  /**
   * This property is to bind configurations for slides
   * @memberof CustomerDetailsPage
   */
  slideOpts;

  /**
   * This property is to bind the list of all customer
   * @memberof CustomerDetailsPage
   */
  public customerList = customerDataList;

  /**
   * This property is to bind the value to selected customer name
   * @memberof CustomerDetailsPage
   */
  public selectedCustomerInfo;

  /**
   * This property is to bind the value of date difference between last billing date and next billing date
   * @memberof CustomerDetailsPage
   */
  public calcDays: number;

  /**
   * This property is to set value of current employee number over subscription's qouta
   * @memberof CustomerDetailsPage
   */
  public progressBarValue;
  
  /**
   * This property is to decalre the constructor from subscriber details page
   * @memberof CustomerDetailsPage
   */
  public comp;

  /**
   * This property is to decalre the constructor from subscriber details page
   * @memberof CustomerDetailsPage
   */
  public subsDtlsCompSearch;

  /**
   * This property is to decalre the constructor from subscriber details page
   * @memberof CustomerDetailsPage
   */
  public subsDtlsCompPaging;
  
  /**
   * This property is to set value for toggle the subscriptions status
   * @memberof CustomerDetailsPage
   */
  public custToggle = false;

  /**
   * This property is to get the previous value of subscription status
   * @memberof CustomerDetailsPage
   */
  public prevCustToggleVal = true;
  
  /**
   * This property is to calculate the days different between last billing date
   * and next billing date
   * @memberof CustomerDetailsPage
   */
  public daysLeftFn: SubscriberDetailsPage = new SubscriberDetailsPage(this.comp, this.subsDtlsCompSearch, this.subsDtlsCompPaging);
  
  /**
   * This property is to set customer page's pagination configurations
   * @memberof CustomerDetailsPage
   */
  public configPageCustDtls;

  /**
   * This property is to bind value in searchbar
   * @memberof CustomerDetailsPage
   */
  public searchCust = '';


  /**
   * This method is to set initial value of properties.
   * And it will be executed when customer page is loaded.
   * @memberof CustomerDetailsPage
   */
  ngOnInit() {
    console.log('customerList: ' + JSON.stringify(this.customerList, null, " "));
    this.slideOpts = this.daysLeftFn.subsDtlsSlideOpts;
    this.selectedCustomerInfo = customerInfo;
    console.log('this.selectedCustomerInfo: ' + JSON.stringify(this.selectedCustomerInfo, null, " "));
    customerUpdateInfo = this.selectedCustomerInfo;
    this.calcDays = this.daysLeftFn.dateDifference(this.selectedCustomerInfo.LAST_BILLING_DATE, this.selectedCustomerInfo.NEXT_BILLING_DATE);
    this.custToggle = (this.calcDays < 0) ? false : true;
    this.progressBarValue = this.selectedCustomerInfo.USED_QUOTA / this.selectedCustomerInfo.QUOTA;
    popovrCtrlr = this.popoverController;
    this.configPageCustDtls = this.custDtlsPaging.pageConfig(9, currCustPage, this.customerList.length);
  }

  /**
   * This method is to set the value of selected customer details in the property.
   * And it will be executed when user select customer in client list
   * @memberof CustomerDetailsPage
   */
  onChangeSelectedCustomer(changedCustomerItem) {
    this.selectedCustomerInfo = changedCustomerItem;
    customerUpdateInfo = this.selectedCustomerInfo;
    this.calcDays = this.daysLeftFn.dateDifference(this.selectedCustomerInfo.LAST_BILLING_DATE, this.selectedCustomerInfo.NEXT_BILLING_DATE);
    this.custToggle = (this.calcDays < 0) ? false : true;
    this.progressBarValue = this.selectedCustomerInfo.USED_QUOTA / this.selectedCustomerInfo.QUOTA;
  }

  /**
   * This method is to load popover component under customer details page (Update Customer Details and Customer History)
   * @memberof CustomerDetailsPage
   */
  async openPopover(evt, compName) {
    const historyPopOver = await this.popoverController.create({
      component: (compName === 'UpdateCustomerDetailsComponent') ? UpdateCustomerDetailsComponent : CustomerHistoryComponent,
      cssClass: 'pop-over-style'
    });

    return await historyPopOver.present();
  }

  /**
   * This method is to set pagination configuration in  Customer Details page
   * @memberof CustomerDetailsPage
   */
  pageCustDtlsChanged(event) {
    this.configPageCustDtls = this.custDtlsPaging.pageConfig(9, event, this.customerList.length);
  }

  /**
   * This method is to get search result for customer list
   * @memberof CustomerDetailsPage
   */
  onSearchCustDtls(event) {
    this.customerList = customerDataList;
    this.customerList = (event.detail.value.length > 0 ) ?
      this.custListSearch.filerSearch(event.detail.value, this.customerList, 'FULLNAME') :
                            this.customerList;
    this.pageCustDtlsChanged(1);
  }


}
