import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { Observable } from 'rxjs';

import { PaginationServiceService } from '../../../services/pagination-service.service';
import { APIService } from '../../../services/shared-service/api.service';

import { SnackBarComponent } from '../../../layout/notificationPopup/snack-bar/snack-bar.component';
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
   *Creates an instance of AddnewcustomerPage.
   * @param {PaginationServiceService} addCustPggSvs This property is to get methods from PaginationServiceService
   * @param {APIService} addCustAPISvs This property is to get methods from APIService
   * @memberof AddnewcustomerPage
   */
  constructor(
    public addCustPggSvs: PaginationServiceService,
    private addCustAPISvs: APIService,
    private addCustSnack: MatSnackBar
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
    this.custEndSubsDate = (this.custEndSubsDatetime.getMonth() +1 ) + '/' + endSubDD + '/' + this.custEndSubsDatetime.getFullYear();
  }

  /**
   * This method is to bind returned value requested from API
   * @memberof AddnewcustomerPage
   */
  postCustInfo() {
    this.postNewCust().subscribe(
      data => {
        console.log('donePostCust');
        console.log(JSON.stringify(data));
        Object.assign(this.newSubsForm,
          {
            customerGuid: data[0].CUSTOMER_GUID,
            subscriptionPlan: 'Standard',
            subscriptionStatus: 1,
            usedQuota: 0,
            recurrInterval: this.custCycleEvery,
            recurrIntervalVal: this.custCycleNo,
            activationDate: Date.parse(this.custStartSubsDatetime).toString(),
            lastBillingDate: Date.parse(this.custStartSubsDatetime).toString(),
            nextBillingDate: Date.parse(this.custEndSubsDatetime).toString(),
            billingCycle: 0
          });

        this.postNewSubs().subscribe(
          data => {
            console.log('postNewSubs');
            console.log(JSON.stringify(data));
            this.addCustSnack.openFromComponent(SnackBarComponent, {
              duration: 2500,
              horizontalPosition: 'end',
              data: 'successfully create customer'
            });
          }
        );
      }
    );
  }

  /**
   * This method is to post request data and address to REST
   * @returns {Observable<any>}
   * @memberof AddnewcustomerPage
   */
  postNewCust(): Observable<any> {
    return this.addCustAPISvs.postApi(this.newCustForm, '/api/admin/customer');
  }

  /**
   * This method is to post request data and address to REST
   * @returns {Observable<any>}
   * @memberof AddnewcustomerPage
   */
  postNewSubs(): Observable<any> {
    return this.addCustAPISvs.postApi(this.newSubsForm, '/api/admin/subscription');
  }

  /**
   * This method will be executed when save button is triggered
   * @memberof AddnewcustomerPage
   */
  async saveAddCustomer() {
    console.log('saveAddCustomer');
    Object.assign(this.newCustForm, { currency: 'MYR' });
    await this.postCustInfo();
    // console.log('newCustForm: ' + JSON.stringify(this.newCustForm));
    // console.log('newSubsForm: ' + JSON.stringify(this.newSubsForm));

  }

  /**
   * This method will be executed when cancel button is triggered
   * @memberof AddnewcustomerPage
   */
  cancelSaveAddingCustomer() {
    console.log('cancelSaveAddingCustomer');
  }
}
