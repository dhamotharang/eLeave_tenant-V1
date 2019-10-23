import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';

import { CustomerPopoverComponent } from './customer-popover/customer-popover.component';
import { customersDummiesData, salesmanDummiesData } from '../../app.component';

import { PaginationServiceService } from '../../services/pagination-service.service';
import { SearchDataService } from '../../services/search-data.service';



/**
 * This variable is to store data of customer info
 * @export
 * @class CustomersPage
 */
export let customerInfo: any = {};

/**
 * This variable is to store data of customer data list from json
 * @export
 * @class CustomersPage
 */
export let customerDummyData: any = [];

/**
 * This variable is to store data of salesperson data list from json
 * @export
 * @class CustomersPage
 */
export let salesPersonDummyData: any = [];

/**
 * This variable is to store data of selected customer
 * @export
 * @class CustomersPage
 */
export let selCustView =  {val: 'card'};

/**
 * This variable is to store data of current showed customer
 * @export
 * @class CustomersPage
 */
export let currCustPage;


/**
 * This component is for Customer page
 * @export
 * @class CustomersPage
 * @implements {OnInit}
 */
@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  /**
   * Creates an instance of CustomersPage.
   * @param {PopoverController} popoverController
   * @param {PaginationServiceService} custPaging
   * @memberof CustomersPage
   */
  constructor(
    /**
    * This property is to bind method from PaginationServiceService
    * @memberof CustomersPage
    */
    public custPaging: PaginationServiceService,
    private popoverController: PopoverController,
    private custSearch: SearchDataService
  ) { }


  /**
   * This property is to bind selected customer data
   * @memberof CustomersPage
   */
  public selectedVal = 'card';

  /**
   * This property is to bind all customers data
   * @memberof CustomersPage
   */
  public customerData = customersDummiesData;

  /**
   * This property is to bind all salesperson list
   * @memberof CustomersPage
   */
  public salepersonData = salesmanDummiesData;

  /**
   * This property is to bind customer's pagination configurations
   * @memberof CustomersPage
   */
  public configPageCust;

  /**
   * This method will be executed during customer page's initilization.
   * Any initial value will be set here.
   * @memberof CustomersPage
   */
  ngOnInit() {
    // selCustView = {val: 'card'};
    // this.selectedVal = 'card';
    this.configPageCust = this.custPaging.pageConfig(9, 1, this.customerData.length);
    console.log(this.custPaging.getSideMenuType());
    this.custPaging.setCustomerViewType('card');
    console.log(this.custPaging.getCustomerViewType());
    console.log(this.selectedVal);
    console.log(selCustView);
  }

  /**
   * This method is to show popover component.
   * @param {*} evt
   * @returns
   * @memberof CustomersPage
   */
  async ngOnClickPophoverButton(evt: any) {
    const popover = await this.popoverController.create({
      component: CustomerPopoverComponent,
      componentProps: {
        viewType: this
      },
      event: evt,
      cssClass: 'pop-over-dropdown-style'
    });

    popover.onDidDismiss().then((data) => {
      console.log('dismisdsd');
      console.log(this.custPaging.getCustomerViewType());
      this.selectedVal = this.custPaging.getCustomerViewType();
    });

    return await popover.present();
  }


  /**
   * This method will be executed when user click on "View Details".
   * It will redirect to Customer Details page.
   * @param {*} item
   * @memberof CustomersPage
   */
  onClickCustomerViewDetails(item) {
    customerInfo = item;
    customerDummyData = this.customerData;
    salesPersonDummyData =  this.salepersonData;
  }

  /**
   * This funciton is to set pagination style.
   * It will be executed when user change page.
   * @param {*} event
   * @memberof CustomersPage
   */
  pageCustChanged(event) {
    this.configPageCust = this.custPaging.pageConfig(9, event, this.customerData.length);
    currCustPage = event;
  }


  onSearchCust(event) {
    this.customerData = customersDummiesData;
    this.customerData = (event.detail.value.length > 0 ) ?
                      this.custSearch.filerSearch(event.detail.value, customersDummiesData, 'clientName') :
                      customersDummiesData;
    this.pageCustChanged(1);
  }


}

