import { Component, OnInit } from '@angular/core';
import { salesPersonDummyData } from '../../customers.page';
import { customerUpdateInfo, popovrCtrlr } from '../customer-details.page';

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
    this.selectedUpdateCustomerInfo = customerUpdateInfo;
    Object.assign(this.updateCustomerInfo, this.selectedUpdateCustomerInfo);
    this.salesmanList = salesPersonDummyData;
  }

  saveChanges() {
    Object.assign(this.selectedUpdateCustomerInfo, this.updateCustomerInfo);
    this.dissmissPopup();
  }

  async dissmissPopup() {
    return await popovrCtrlr.dismiss();
  }

}
