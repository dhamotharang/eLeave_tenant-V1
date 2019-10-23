import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { PaginationServiceService } from '../../../services/pagination-service.service';
import { SearchDataService } from '../../../services/search-data.service';

import { customerInfo, customerDummyData, currCustPage } from '../customers.page';
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
   * @param {PopoverController} popoverController
   * @param {PaginationServiceService} custDtlsPaging
   * @param {SearchDataService} custListSearch
   * @memberof CustomerDetailsPage
   */
  constructor(

    /**
     * This property is to get methods from PaginationServiceService
     * @memberof CustomerDetailsPage
     */
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
  public customerList = customerDummyData;

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
    this.slideOpts = this.daysLeftFn.subsDtlsSlideOpts;
    this.selectedCustomerInfo = customerInfo;
    customerUpdateInfo = this.selectedCustomerInfo;
    this.calcDays = this.daysLeftFn.dateDifference(this.selectedCustomerInfo.lastBillingOn, this.selectedCustomerInfo.nextBillingOn);
    this.custToggle = (this.calcDays < 0) ? false : true;
    this.progressBarValue = this.selectedCustomerInfo.employeeNumber / this.selectedCustomerInfo.employeeQuota;
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
    this.calcDays = this.daysLeftFn.dateDifference(this.selectedCustomerInfo.lastBillingOn, this.selectedCustomerInfo.nextBillingOn);
    this.custToggle = (this.calcDays < 0) ? false : true;
    this.progressBarValue = this.selectedCustomerInfo.employeeNumber / this.selectedCustomerInfo.employeeQuota;
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
    this.customerList = customerDummyData;
    this.customerList = (event.detail.value.length > 0 ) ?
                          this.custListSearch.filerSearch(event.detail.value, this.customerList, 'clientName') :
                            this.customerList;
    this.pageCustDtlsChanged(1);
  }


}
