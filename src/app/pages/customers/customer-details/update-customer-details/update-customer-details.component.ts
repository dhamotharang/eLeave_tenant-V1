import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { APIService } from '../../../../services/shared-service/api.service';

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
   * @param {APIService} updateCustAPI This property is to get methods from APIService
   * @memberof UpdateCustomerDetailsComponent
   */
  constructor(
    private updateCustAPI: APIService,
  ) {}


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
    console.log('customerUpdateInfo: ' + JSON.stringify(customerUpdateInfo, null, " "));
    Object.assign(this.updateCustomerInfo, this.selectedUpdateCustomerInfo);
    console.log('updateCustomerInfo: ' + JSON.stringify(this.updateCustomerInfo, null, " "));
    this.initGetSalesmanList();
  }

  /**
   * This method is to get salesman list from API
   * @memberof UpdateCustomerDetailsComponent
   */
  initGetSalesmanList() {
    this.getSalesmanList().subscribe(data => {
      return this.salesmanList = data;
    });
  }

  /**
   * This method is to implement get API to get salesperson list from endpoint
   * @returns {Observable<any>}
   * @memberof AddnewcustomerPage
   */
  getSalesmanList(): Observable<any> {
    return this.updateCustAPI.getApi('/api/admin/user-manage/salesperson');
  }

  /**
   * This method is to get update customer from API
   * @param {*} obj
   * @memberof UpdateCustomerDetailsComponent
   */
  setUpdateCustomer(obj: any) {
    this.patchUpdateCustomerEndpoint(obj).subscribe(
      data => {
        console.log('setUpdateCustomer: ' + JSON.stringify(data, null, " "));
      }
    );
  }

  /**
   * This method is to patch updates to API
   * @param {*} obj
   * @returns {Observable<any>}
   * @memberof UpdateCustomerDetailsComponent
   */
  patchUpdateCustomerEndpoint(obj: any): Observable<any> {
    return this.updateCustAPI.patchApi(obj, '/api/admin/customer');
  }
  
  /**
   * This method is to bind values of updated customer details then 
   * it will dismiss the popup
   * @memberof UpdateCustomerDetailsComponent
   */
  saveChanges() {
    Object.assign(this.selectedUpdateCustomerInfo, this.updateCustomerInfo);
    this.setUpdateCustomer(this.selectedUpdateCustomerInfo);
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
