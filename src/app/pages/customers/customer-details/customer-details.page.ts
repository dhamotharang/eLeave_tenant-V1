import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { PaginationServiceService } from '../../../services/pagination-service.service';
import { SearchDataService } from '../../../services/search-data.service';
import { GlobalFunctionService } from '../../../services/global-function.service';
import { APIService } from './../../../services/shared-service/api.service';

import { customerInfo, customerDataList, currCustPage } from '../customers.page';
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

export let customerAllList;

export let selectedCustomerList;
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
    private custListSearch: SearchDataService,
    private custDtlsAPISvs: APIService
  ) { }


  /**
   * This property is to get methods from GlobalFunctionService
   * @private
   * @memberof CustomerDetailsPage
   */
  private custDtlsGlobalFn = new GlobalFunctionService();

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
  
  // /**
  //  * This property is to set customer page's pagination configurations
  //  * @memberof CustomerDetailsPage
  //  */
  // public configPageCustDtls;

  /**
   * This property is to bind value in searchbar
   * @memberof CustomerDetailsPage
   */
  public searchCust = '';
  
  /**
   * This property is to bind value of child company list
   *
   * @memberof CustomerDetailsPage
   */
  public childCompList;

  /**
   * This property is to bind length value of child company list
   * @memberof CustomerDetailsPage
   */
  public childCompLength;

  public subsInactiveMsg;

  /**
   * This method is to set initial value of properties.
   * And it will be executed when customer page is loaded.
   * @memberof CustomerDetailsPage
   */
  ngOnInit() {
    // this.slideOpts = this.daysLeftFn.subsDtlsSlideOpts;
    // this.configPageCustDtls = this.custDtlsPaging.pageConfig(9, currCustPage, this.customerList.length);
    this.slideOpts = this.custDtlsGlobalFn.slideOption();
    console.log('customerInfo: ' + JSON.stringify(customerInfo, null, " "));
    this.selectedCustomerInfo = customerInfo;
    this.getDataCustomerDetails(customerInfo);
    // console.log('this.selectedCustomerInfo 1: ' + JSON.stringify(this.selectedCustomerInfo, null, " "));
    // this.selectedCustomerInfo = this.addDateFormat(this.selectedCustomerInfo);
    customerUpdateInfo = this.selectedCustomerInfo;
    this.checkCustomerStatus(this.selectedCustomerInfo);
    // this.progressBarValue = this.selectedCustomerInfo.USED_QUOTA / this.selectedCustomerInfo.QUOTA;
    popovrCtrlr = this.popoverController;
    // this.getChildCompanyList(this.selectedCustomerInfo);
  }
  

  checkCustomerStatus(selectedCustData) {
    if (selectedCustData.STATUS === 0) {
      this.custToggle = false;
      this.prevCustToggleVal = !this.custToggle;
    } else {
    //   // this.custToggle = true
    //   // this.calcDays = this.custDtlsGlobalFn.dateDiff(this.selectedCustomerInfo.NEXT_BILLING_DATE);
      this.custToggle = (this.calcDays < 0) ? false : true;
      this.prevCustToggleVal = !this.custToggle;


    }
  }

  calcSubsDaysLeft() {
    this.calcDays = this.custDtlsGlobalFn.dateDiff(this.selectedCustomerInfo.NEXT_BILLING_DATE);
    if (this.calcDays < 0) {
      this.custToggle = false;
      this.prevCustToggleVal = !this.custToggle;
      this.updateSubsRemarks(0, 'This subscription has been deactivated by system due to expired license.');
      this.subsInactiveMsg =  'This subscription has been deactivated by system due to expired license.';
      document.getElementById('reactivesubsnotice').hidden = false;
    } else {
      this.custToggle = true;
      this.prevCustToggleVal = !this.custToggle;
      this.updateSubsRemarks(1, '-');
      document.getElementById('reactivesubsnotice').hidden = true;

    }



  }

  updateSubsRemarks(currStatus, remarksNote) {
    this.custDtlsAPISvs.reqPatchApi({
      subscriptionLabel: this.selectedCustomerInfo.SUBSCRIPTION_LABEL,
      customerGuid: this.selectedCustomerInfo.CUSTOMER_GUID,
      subscriptionPlan: this.selectedCustomerInfo.PLAN,
      subscriptionStatus: currStatus,// this.subscriberInfo.STATUS,
      subscriptionQuota: this.selectedCustomerInfo.QUOTA,
      activationDate: this.selectedCustomerInfo.ACTIVATION_DATE,
      lastBillingDate: this.selectedCustomerInfo.LAST_BILLING_DATE,
      nextBillingDate: this.selectedCustomerInfo.NEXT_BILLING_DATE,
      recurrInterval: this.selectedCustomerInfo.RECURR_INTERVAL,
      recurrIntervalVal: this.selectedCustomerInfo.RECURR_INTERVAL_VAL,
      billingCycle: this.selectedCustomerInfo.BILLING_CYCLE,
      subscriptionGuid: this.selectedCustomerInfo.SUBSCRIPTION_GUID,
      remarks: remarksNote,
    }, '/api/admin/subscription').subscribe(
      data => { }
    );
  }
  // /**
  //  * This method is to append element into object that contain formatted date time
  //  * @param {*} obj This property will pass the customer details data into method
  //  * @returns
  //  * @memberof CustomerDetailsPage
  //  */
  // addDateFormat(obj) {
  //   const addDateFormat = {
  //     'FULL_LAST_BILLING_DATE': this.custDtlsGlobalFn.changeDateFormatFull(this.selectedCustomerInfo.LAST_BILLING_DATE),
  //     'FULL_NEXT_BILLING_DATE': this.custDtlsGlobalFn.changeDateFormatFull(this.selectedCustomerInfo.NEXT_BILLING_DATE),
  //   };
  //   return Object.assign(obj, addDateFormat);
  // }

  /**
   * This method is to set the value of selected customer details in the property.
   * And it will be executed when user select customer in client list
   * @memberof CustomerDetailsPage
   */
  onChangeSelectedCustomer(changedCustomerItem) {
    // console.log(changedCustomerItem);
    this.getDataCustomerDetails(changedCustomerItem);
    // customerUpdateInfo = this.selectedCustomerInfo;
  }

  optionToDeactivateCustomer() {
    console.log('optionToDeactivateCustomer');
    console.log(this.custToggle);  //true == change to inactive
    console.log(this.selectedCustomerInfo);

  }


  getDataCustomerDetails(data) {
    this.custDtlsAPISvs.reqGetApi('/api/admin/subscription/customer_info/' + data.SUBSCRIPTION_GUID).subscribe(
      custData => {
        // console.log('custData: ' + JSON.stringify(custData, null, " "));
        const newData = {
          CUSTOMER_GUID: data.CUSTOMER_GUID,
          CUSTOMER_LABEL: data.CUSTOMER_LABEL,
          FULLNAME: custData.customer_name,
          NICKNAME: data.NICKNAME,
          EMAIL: custData.customer_email,
          CONTACT_NO: custData.customer_contact_no,
          COMPANY_NAME: custData.customer_company_name,
          ADDRESS1: custData.customer_address1,
          ADDRESS2: custData.customer_address2,
          POSTCODE: custData.customer_zip,
          CITY: custData.customer_city,
          STATE: custData.customer_state,
          COUNTRY: custData.customer_country,
          CURRENCY: custData.customer_currency,
          SALESPERSON: custData.salesperson_pic,
          CREATION_TS: custData.creation_date,
          SUBSCRIPTION_GUID: custData.subscription_id,
          SUBSCRIPTION_LABEL: custData.subscription_label,
          PLAN: custData.subscription_plan,
          STATUS: custData.subscription_status,
          SUBS_REMARKS: custData.remarks,
          QUOTA: custData.subscription_quota,
          USED_QUOTA: custData.subscription_used_quota,
          ACTIVATION_DATE: custData.activation_date,
          LAST_BILLING_DATE: custData.last_billing_date,
          NEXT_BILLING_DATE: custData.next_billing_date,
          RECURR_INTERVAL: custData.recurr_interval,
          RECURR_INTERVAL_VAL: custData.recurr_interval_val,
          BILLING_CYCLE: custData.billing_cycle,
          FULL_LAST_BILLING_DATE: this.custDtlsGlobalFn.changeDateFormatFull(custData.last_billing_date),
          FULL_NEXT_BILLING_DATE: this.custDtlsGlobalFn.changeDateFormatFull(custData.next_billing_date),
        }
        this.selectedCustomerInfo = newData;
        customerUpdateInfo = this.selectedCustomerInfo;
        // console.log('this.selectedCustomerInfo a');
        // console.log(this.selectedCustomerInfo);

        // this.custToggle = (this.selectedCustomerInfo.STATUS === 1) ? true : false;
        // this.prevCustToggleVal = !this.custToggle;
        this.checkCustomerStatus(this.selectedCustomerInfo);
        
        this.calcSubsDaysLeft();
        this.progressBarValue = this.selectedCustomerInfo.USED_QUOTA / this.selectedCustomerInfo.QUOTA;
        this.getChildCompanyList(this.selectedCustomerInfo);


      }
    );

  }


  onViewSubscriptionDetails(obj) {
    console.log('objeee: ' + JSON.stringify(obj, null, " "));
    console.log('this.selectedCustomerInfo: ' + JSON.stringify(this.selectedCustomerInfo, null, " "));
    console.log('this.customerList: ' + JSON.stringify(this.customerList, null, " ")); 
    selectedCustomerList = this.selectedCustomerInfo;
    customerAllList = this.customerList;
    
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

  // /**
  //  * This method is to set pagination configuration in  Customer Details page
  //  * @memberof CustomerDetailsPage
  //  */
  // pageCustDtlsChanged(event) {
  //   // this.configPageCustDtls = this.custDtlsPaging.pageConfig(9, event, this.customerList.length);
  // }

  /**
   * This method is to get search result for customer list
   * @memberof CustomerDetailsPage
   */
  onSearchCustDtls(event) {
    this.customerList = customerDataList;
    this.customerList = (event.detail.value.length > 0 ) ?
      this.custListSearch.filerSearch(event.detail.value, this.customerList, 'FULLNAME') :
                            this.customerList;
    // this.pageCustDtlsChanged(1);
  }

  /**
   * This method is to get child company list from API
   * @param {*} custData This parameter will pass the customer object
   * @memberof CustomerDetailsPage
   */
  getChildCompanyList(custData) {
    this.custDtlsAPISvs.reqGetApi('/api/admin/subscription/company_info/' + custData.SUBSCRIPTION_GUID).subscribe(
      respChildData => {
        // console.log(respChildData);
        this.childCompList = respChildData.company_details;
        // console.log(this.childCompList);
        this.childCompLength = this.childCompList.length;
      }
    );
    
  }


}
