import { Component, OnInit } from '@angular/core';
import {customerDummyData, salesPersonDummyData} from '../../customers.page';
import {customerUpdateInfo, popovrCtrlr} from '../customer-details.page';

@Component({
  selector: 'app-update-customer-details',
  templateUrl: './update-customer-details.component.html',
  styleUrls: ['./update-customer-details.component.scss'],
})


export class UpdateCustomerDetailsComponent implements OnInit {

  public selectedUpdateCustomerInfo = {};
  public updateCustomerInfo = {};
  public salesmanList;

  constructor() {}

  ngOnInit() {
    // console.log(customerDummyData);
    this.selectedUpdateCustomerInfo = customerUpdateInfo;
    Object.assign(this.updateCustomerInfo, this.selectedUpdateCustomerInfo);
    this.salesmanList = salesPersonDummyData;
    // console.log('1');
    // console.log(this.updateCustomerInfo);
    // console.log(this.selectedUpdateCustomerInfo);

  }

  saveChanges() {
    Object.assign(this.selectedUpdateCustomerInfo, this.updateCustomerInfo);
    // console.log('2');
    // console.log(this.updateCustomerInfo);
    // console.log(this.selectedUpdateCustomerInfo);
    this.dissmissPopup();
  }

  async dissmissPopup() {
    return await popovrCtrlr.dismiss();
  }

}
