import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';

import { Observable } from 'rxjs';

import { CustomerPopoverComponent } from './customer-popover/customer-popover.component';
// import { customersDummiesData, salesmanDummiesData } from '../../app.component';

import { PaginationServiceService } from '../../services/pagination-service.service';
import { SearchDataService } from '../../services/search-data.service';
import { APIService } from '../../services/shared-service/api.service';


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
export let customerDataList: any = [];

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
   *Creates an instance of CustomersPage.
   * @param {PaginationServiceService} custPaging This property is to bind method from PaginationServiceService
   * @param {PopoverController} popoverController This property is to bind method from PopOverController
   * @param {SearchDataService} custSearch This property is to bind method from SearchDataService
   * @memberof CustomersPage
   */
  constructor(
    public custPaging: PaginationServiceService,
    private popoverController: PopoverController,
    private custSearch: SearchDataService,
    private custApiSvs: APIService
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
  public customerData;

  /**
   * This property is to bind all customers data
   * @memberof CustomersPage
   */
  public customerGlobalData;

  /**
   * This property is to bind customer's number
   * @memberof CustomersPage
   */
  public customerDataLength;

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
    // console.log(this.custPaging.getSideMenuType());
    this.custPaging.setCustomerViewType('card');
    this.getCustList();
    this.configPageCust = this.custPaging.pageConfig(9, 1, 10);
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
    customerDataList = this.customerData;
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

  /**
   * This method is to set search function for this componenet
   * @param {*} event
   * @memberof CustomersPage
   */
  onSearchCust(event) {
    this.customerData = this.customerGlobalData;
    this.customerData = (event.detail.value.length > 0 ) ?
      this.custSearch.filerSearch(event.detail.value, this.customerData, 'FULLNAME') :
        this.customerData;
    this.pageCustChanged(1);
  }

  /**
   * This method is to get customer list from API
   * @memberof CustomersPage
   */
  getCustList() {
    this.getCustListAPI().subscribe(
      dataCust => {
        this.subList(dataCust);
      }
    );
  }

  /**
   * This method is to get subscriptions list from API
   * @param {*} custData This property is to bind customer object returned from getCustList()
   * @memberof CustomersPage
   */
  subList(custData) {
    this.getSubsListAPI().subscribe(
      dataSubs => {
        this.mergeCustWithSubs(dataSubs, custData);
      }
    );
  }

  /**
   * This method is to merge objects between customer and subscribers
   * based on CUSTOMER_GUID
   * @param {*} subsObj This property is to bind subsriptions object 
   * @param {*} custObj This property is to bind customers object
   * @memberof CustomersPage
   */
  mergeCustWithSubs(subsObj, custObj) {
    custObj.forEach(itemCust => {
      subsObj.forEach(itemSubs => {
        if (itemCust.CUSTOMER_GUID === itemSubs.CUSTOMER_GUID) {
          itemCust = Object.assign(itemCust, itemSubs);
        }
      });
    });
    this.customerData = custObj;
    this.customerDataLength = this.customerData.length;
    this.customerGlobalData = custObj;

  }

  /**
   * This method is to send get request to API to get customers list
   * @returns {Observable<any>}
   * @memberof CustomersPage
   */
  getCustListAPI(): Observable<any> {
    return this.custApiSvs.getApi('/api/admin/customer');
  }

  /**
   * This method is to send get request to API to get subscriptions list
   * @returns {Observable<any>}
   * @memberof CustomersPage
   */
  getSubsListAPI(): Observable<any> {
    return this.custApiSvs.getApi('/api/admin/subscription');
  }


}

