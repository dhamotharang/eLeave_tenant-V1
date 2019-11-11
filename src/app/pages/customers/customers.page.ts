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

// /**
//  * This variable is to store data of salesperson data list from json
//  * @export
//  * @class CustomersPage
//  */
// export let salesPersonDummyData: any = [];

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
  // public customerData = customersDummiesData;

  public customerDataLength;
  public customerGlobalData;
  // /**
  //  * This property is to bind all salesperson list
  //  * @memberof CustomersPage
  //  */
  // public salepersonData = salesmanDummiesData;

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
    // this.configPageCust = this.custPaging.pageConfig(9, 1, this.customerData.length);
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
    // console.log('itemitem');
    // console.log(item);
    // console.log('his.customerData');
    // console.log(JSON.stringify(this.customerData));
    customerInfo = item;
    customerDataList = this.customerData;
    // salesPersonDummyData =  this.salepersonData;
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
    // this.customerData = customersDummiesData;
    // this.getCustList();
    this.customerData = (event.detail.value.length > 0 ) ?
      this.custSearch.filerSearch(event.detail.value, this.customerData, 'FULLNAME') :
        this.customerData;

    console.log('custData: ' + JSON.stringify(this.customerData));
    this.pageCustChanged(1);
  }

  getCustList() {
    this.getCustListAPI().subscribe(
      dataCust => {
        this.getSubsListAPI().subscribe(
          dataSubs => {
            dataCust.forEach(itemCust => {
              dataSubs.forEach(itemSubs => {
                if (itemCust.CUSTOMER_GUID === itemSubs.CUSTOMER_GUID) {
                  itemCust = Object.assign(itemCust, itemSubs);
                }
              });
            });
            // dataCust.map((item, i) => {
            //   console.log('i:dsssd:  ' + i);
            //   dataSubs.forEach(itemSubs => {
            //     if (item.CUSTOMER_GUID === itemSubs.CUSTOMER_GUID) {
            //       console.log('item: ' + JSON.stringify(item));
            //       console.log('itemSubs: ' + JSON.stringify(itemSubs));
            //       // // Object.assign(item, itemSubs);
            //       // console.log('3333:' + JSON.stringify(Object.assign(item,itemSubs)));
            //       item = Object.assign(item, itemSubs);
            //     }

            //     console.log('item2: ' + JSON.stringify(item));
            //   });
              
            // });
            this.customerData = dataCust;
            this.customerDataLength = this.customerData.length;
            this.customerGlobalData = dataCust;
          }
        );
      }
    );
  }

  getCustListAPI(): Observable<any> {
    return this.custApiSvs.getApi('/api/admin/customer');
  }

  getSubsListAPI(): Observable<any> {
    return this.custApiSvs.getApi('/api/admin/subscription');
  }


}

