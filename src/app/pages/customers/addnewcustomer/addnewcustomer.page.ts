import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

// import { PaginationServiceService } from '../../../services/pagination-service.service';
import {APIService} from '../../../services/shared-service/api.service';

import { InfoPopupService } from '../../../layout/notificationPopup/info-popup.service';
/**
 * This component is for adding a new customer
 * @export
 * @class AddnewcustomerPage
 * @implements {OnInit}
 */
@Component({
  selector: 'app-addnewcustomer',
  templateUrl: './addnewcustomer.page.html',
  styleUrls: ['./addnewcustomer.page.scss'],
})
export class AddnewcustomerPage implements OnInit {

  /**
   * Creates an instance of AddnewcustomerPage.
   * @param {APIService} addCustAPISvs This property is to get methods from APIService
   * @param {InfoPopupService} addCustInfoPopup This property is to get methods from InfoPopupService
   * @param {Router} addCustRoute This property is to get methods from Router
   * @memberof AddnewcustomerPage
   */
  constructor(
    // public addCustPggSvs: PaginationServiceService,
    private addCustAPISvs: APIService,
    private addCustInfoPopup: InfoPopupService,
    private addCustRoute: Router
  ) { }
  
  /**
   * This property is to bind value start subscription's date selected
   * from calender
   * @memberof AddnewcustomerPage
   */
  public custStartSubsDate;

  /**
   * This property is to bind value of start subscription's in datetime format
   * @private
   * @memberof AddnewcustomerPage
   */
  private custStartSubsDatetime;

  /**
   * This property is to bind value end subscription's date calculated based on start
   * date, custCycleEvery and custCycleNo
   * @memberof AddnewcustomerPage
   */
  public custEndSubsDate;


  /**
   * This property is to bind value of end subscription's in datetime format
   * @private
   * @memberof AddnewcustomerPage
   */
  private custEndSubsDatetime;

  /**
   * This property is to bind value of recurring billing cycle (week/month/year)
   * @memberof AddnewcustomerPage
   */
  public custCycleEvery;

  /**
   * This property is to bind nuumber of recurring billing cycle
   * @memberof AddnewcustomerPage
   */
  public custCycleNo;

  /**
   * This property is to bind salesperson list
   * @memberof AddnewcustomerPage
   */
  public salepersonList;

  /**
   * This property is to bind customer's details from form
   * @memberof AddnewcustomerPage
   */
  public newCustForm = {};

  /**
   * This property is to bind subscription's details from form
   * @memberof AddnewcustomerPage
   */
  public newSubsForm = {};

  /**
   * This property is to set the customer label id
   * @memberof AddnewcustomerPage
   */
  public custLabelId = 'CUS-' + Date.now();

  /**
   * This property is to set subscription label id
   * @memberof AddnewcustomerPage
   */
  public subLabelId = 'SUB-' + Date.now();

  /**
   * This method is to set inital properties value.
   * It will be executed when add new page is being loaded
   * @memberof AddnewcustomerPage
   */
  ngOnInit() {
    this.custEndSubsDate = '-';
    this.getInitList();
  }

  /**
   * This method is to get salesperson list from database
   * @memberof AddnewcustomerPage
   */
  getInitList() {
    this.getSalespersonList().subscribe(
      data => {
        this.salepersonList = data;
      }
    );
  }

  /**
   * This method is to implement get API to get salesperson list from endpoint
   * @returns {Observable<any>}
   * @memberof AddnewcustomerPage
   */
  getSalespersonList(): Observable<any> {
    return this.addCustAPISvs.getApi('/api/admin/user-manage/salesperson')
  }

  /**
   * This method is to get the changed value of calender and will update the 
   * subscription's end date
   * @param {*} evtVal
   * @memberof AddnewcustomerPage
   */
  newStartSubs(evtVal) {
    this.custStartSubsDate = evtVal.target.value;
    this.setNextBillingDate();
  }

  /**
   * This method is to check if the subscription's start date, recurring cycle value,
   * recurring cycle period is defined. then go to update expired subscription's date
   * @memberof AddnewcustomerPage
   */
  setNextBillingDate() {
    if ( this.custStartSubsDate !== undefined && this.custCycleEvery !== undefined && this.custCycleNo !== undefined) {
      this.custStartSubsDatetime = new Date(this.custStartSubsDate);
      this.getSubsExpDate();
    }
  }

  /**
   * This method is to set subscrption's expired date based on subscription's
   * start date, recurring cycle value and recurring cycle period.
   * @memberof AddnewcustomerPage
   */
  getSubsExpDate() {
    if (this.custCycleEvery === 'Week(s)') {
      this.custEndSubsDatetime = new Date(this.custStartSubsDatetime.setDate(this.custStartSubsDatetime.getDate() + (7 * this.custCycleNo)));
    } else if (this.custCycleEvery === 'Month(s)') {
      this.custEndSubsDatetime = new Date(this.custStartSubsDatetime.setMonth(this.custStartSubsDatetime.getMonth() + this.custCycleNo));
    } else {
      this.custEndSubsDatetime = new Date(this.custStartSubsDatetime.setFullYear(this.custStartSubsDatetime.getFullYear() + this.custCycleNo));
    }

    const endSubDD = (this.custEndSubsDatetime.getDate() < 10) ? '0' + this.custEndSubsDatetime.getDate() : this.custEndSubsDatetime.getDate();
    this.custEndSubsDate = this.custEndSubsDatetime.getFullYear() + '-'+(this.custEndSubsDatetime.getMonth() + 1) + '-' + endSubDD;
  }

  /**
   * This method will be executed when save button is triggered
   * @memberof AddnewcustomerPage
   */
  async saveAddCustomer() {
    Object.assign(this.newCustForm, { currency: 'MYR', customerLabel: this.custLabelId });
    await this.postCustInfo();
  }

  /**
   * This method will be executed when cancel button is triggered
   * @memberof AddnewcustomerPage
   */
  cancelSaveAddingCustomer() {
    return this.addCustRoute.navigate['/main/customer'];
  }

  /**
   * This method is to bind returned value requested from API
   * @memberof AddnewcustomerPage
   */
  postCustInfo() {
    this.postNewLog('cust').subscribe(
      data => {
        Object.assign(this.newSubsForm, {
          subscriptionLabel: this.subLabelId, customerGuid: data[0].CUSTOMER_GUID,
          subscriptionPlan: 'Standard', subscriptionStatus: 1, usedQuota: 0,  recurrInterval: this.custCycleEvery,
          recurrIntervalVal: this.custCycleNo, activationDate: this.custStartSubsDate,
          lastBillingDate: this.custStartSubsDate, nextBillingDate: this.custEndSubsDate, billingCycle: 0});

        this.postNewLog('subs').subscribe(dataSubs => {
          this.addCustInfoPopup.alertPopup('You have successfully create user', 'alert-success');
          // console.log('cust data: ' + JSON.stringify(data[0].CUSTOMER_GUID, null, " "));
          // console.log('subs data: ' + JSON.stringify(dataSubs[0].SUBSCRIPTION_GUID, null, " "));
          this.addLog(data[0].CUSTOMER_GUID, dataSubs[0].SUBSCRIPTION_GUID);
        });
      }
    );
  }

  /**
   * This method is to send POST request to API based on type parameter
   * @param {*} type This parameter will set either post API to customer or subscirption. Value: cust, subs
   * @returns {Observable<any>}
   * @memberof AddnewcustomerPage
   */
  postNewLog(type): Observable<any> {
    return (type === 'cust') ? this.addCustAPISvs.postApi(this.newCustForm, '/api/admin/customer') :
     this.addCustAPISvs.postApi(this.newSubsForm, '/api/admin/subscription');
  }

  /**
   * This method is to prepare request argument to post to update activity logs API
   * @param {*} valCustId This parameter is to pass customer guid value
   * @param {*} valSubsId This parameter is to pass subscription guid value
   * @memberof AddnewcustomerPage
   */
  addLog(valCustId, valSubsId) {
    this.addCustLog({ customerId: valCustId, subscriptionId: valSubsId, message: 'Customer has been created' });
    this.addCustLog({ customerId: valCustId, subscriptionId: valSubsId, message: 'Customer has been activated' });
    this.addCustLog({ customerId: valCustId, subscriptionId: valSubsId, message: 'Subscription has been created' });
    this.addCustLog({ customerId: valCustId, subscriptionId: valSubsId, message: 'Subscription has been activated' });
    
  }

  /**
   * This method is to handle return response from post API to historical activity logs
   * @param {*} obj This parameter is request object to send to API
   * @memberof AddnewcustomerPage
   */
  addCustLog(obj) {
    this.addCusLogtPostApi(obj).subscribe(
      dataLog => {}
    );
  }

  /**
   * This method is to send POST request to API to insert data into historical activity logs based on
   * request object
   * @param {*} reqObj This parameter is to pass request object to API
   * @returns {Observable<any>}
   * @memberof AddnewcustomerPage
   */
  addCusLogtPostApi(reqObj): Observable<any> {
    return this.addCustAPISvs.postApi(reqObj, '/api/admin/activity-log');
  }
}
