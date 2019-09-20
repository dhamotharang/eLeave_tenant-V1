import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { CustomerPopoverComponent } from './customer-popover/customer-popover.component';
import { customersDummiesData, salesmanDummiesData } from '../../app.component';

import { PaginationServiceService } from '../../services/pagination-service.service';

export let customerInfo: any = {};
export let customerDummyData: any = [];
export let salesPersonDummyData: any = [];
export let selCustView;
export let currCustPage;


@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  constructor(
    public popoverController: PopoverController,
    private custPaging: PaginationServiceService
  ) {
    // this.configPageCust = {
    //   itemsPerPage: 9,
    //   currentPage: 1,
    //   totalItems: this.customerData.length
    // };
  }

  public selectedVal;
  public currentCustomer;
  public customerData = customersDummiesData;
  public salepersonData = salesmanDummiesData;
  pageConfigCust: PaginationServiceService;
  public configPageCust;

  ngOnInit() {
    selCustView = {val: 'card'};
    this.selectedVal = 'card';
    this.configPageCust = this.custPaging.pageConfig(9, 1, this.customerData.length);
    // this.pageCustChanged(1);
  }

  async ngOnClickPophoverButton(evt: any) {
    const popover = await this.popoverController.create({
      component: CustomerPopoverComponent,
      // componentProps: {
      //   viewType: this
      // },
      // event: evt,
    });

    popover.onDidDismiss().then((data) => {
      this.selectedVal = selCustView.val;
    });

    return await popover.present();
  }

  onClickCustomerViewDetails(item) {
    customerInfo = item;
    customerDummyData = this.customerData;
    salesPersonDummyData =  this.salepersonData;
  }

  pageCustChanged(event) {
    // this.configPageCust.currentPage = event;
    this.configPageCust = this.custPaging.pageConfig(9, event, this.customerData.length);
    currCustPage = event;
    // return this.configPageCust;
  }
}

