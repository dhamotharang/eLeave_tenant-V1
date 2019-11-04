import { Component, OnInit } from '@angular/core';
import { salesPersonDummyData } from '../../customers.page';
import { customerUpdateInfo, popovrCtrlr } from '../customer-details.page';

/**
 * This component is to set up Update Customer Details page
 * @export
 * @class UpdateCustomerDetailsComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-update-customer-details',
  templateUrl: './update-customer-details.component.html',
  styleUrls: ['./update-customer-details.component.scss']
})
export class UpdateCustomerDetailsComponent implements OnInit {

  /**
   *Creates an instance of UpdateCustomerDetailsComponent.
   * @memberof UpdateCustomerDetailsComponent
   */
  constructor() {}


  /**
   * This property is to get values of current
   * selected customer from Customer Details
   * @memberof UpdateCustomerDetailsComponent
   */
  public selectedUpdateCustomerInfo = {};

  /**
   * This property is to bind inserted values from this page
   * @memberof UpdateCustomerDetailsComponent
   */
  public updateCustomerInfo = {};
  
  /**
   * This property is to get salesman list
   * @memberof UpdateCustomerDetailsComponent
   */
  public salesmanList;


  /**
   * This method is to set initial value of properties.
   * And it will be executed when this page is loaded
   * @memberof UpdateCustomerDetailsComponent
   */
  ngOnInit() {
    this.selectedUpdateCustomerInfo = customerUpdateInfo;
    Object.assign(this.updateCustomerInfo, this.selectedUpdateCustomerInfo);
    this.salesmanList = salesPersonDummyData;
  }

  /**
   * This method is to bind values of updated customer details then 
   * it will dismiss the popup
   * @memberof UpdateCustomerDetailsComponent
   */
  saveChanges() {
    Object.assign(this.selectedUpdateCustomerInfo, this.updateCustomerInfo);
    this.dissmissPopup();
  }

  /**
   * This method is to set dismiss popup
   * @memberof UpdateCustomerDetailsComponent
   */
  async dissmissPopup() {
    return await popovrCtrlr.dismiss();
  }

}
