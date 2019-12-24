import { GlobalFunctionService } from './../../services/global-function.service';
import { Component, OnInit } from '@angular/core';

import { APIService } from './../../services/shared-service/api.service';
import { PaginationServiceService } from '../../services/pagination-service.service';

/**
 * This component is to set up the Dashboard page
 * @export
 * @class DashboardPage
 * @implements {OnInit}
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  /**
   *Creates an instance of DashboardPage.
   * @param {PaginationServiceService} pgSett This property is to get method/function from PaginationServiceService
   * @param {APIService} dshbAPISvs This property is to get method/function from APIService
   * @param {GlobalFunctionService} dshbGlobalFn This property is to get method/function from GlobalFunctionService
   * @memberof DashboardPage
   */
  constructor(
    public pgSett: PaginationServiceService,
    public dshbAPISvs: APIService,
    private dshbGlobalFn: GlobalFunctionService
  ) { }

  /**
   * This properties is to set subscribers data
   * @memberof DashboardPage
   */
  public subscribers;

  /**
   * This properties is to set value of segment in dashboard
   * @memberof DashboardPage
   */
  public overviewSgmtOpt;

  /**
   * This property is to bind value of dashboard cards data
   * @memberof DashboardPage
   */
  public dashboardData;

  /**
   * This property is to bind value of all customers
   * @memberof DashboardPage
   */
  public allCust;

  /**
   * This property is to bind value of activated customers
   * @memberof DashboardPage
   */
  public activeCust;

  /**
   * This property is to bind value of inactive customers
   * @memberof DashboardPage
   */
  public inactiveCust;

  /**
   * This property is to bind value of total company numbers
   * @memberof DashboardPage
   */
  public compNo;

  /**
   * This property is to bind value of total employee number
   * @memberof DashboardPage
   */
  public empNo;

  /**
   * This property is to bind value of difference value between previous customers no, active customer no, 
   * inactive customer no, company no and employee no
   * @memberof DashboardPage
   */
  public diffVal;

  /**
   * This property is to bind difference value of all customers 
   * @memberof DashboardPage
   */
  public allCustDiff1;

  /**
   * This property is to bind difference value of active customers
   * @memberof DashboardPage
   */
  public actvCustDiff1;

  /**
   * This property is to bind difference value of inactive customers
   * @memberof DashboardPage
   */
  public inactvCustDiff1;

  /**
   * This property is to bind difference value of companies numbers
   * @memberof DashboardPage
   */
  public compNoDiff1;

  /**
   * This property is to bind difference value of employee numbers
   * @memberof DashboardPage
   */
  public empNoDiff1;

  /**
   * This property is to bind value of recent subscribers data
   * @memberof DashboardPage
   */
  public recentSubscribers;



  /**
   * This method is to set inital value of properties. It
   * will be executed when Dashboard page being loaded.
   * @memberof DashboardPage
   */
  ngOnInit() {
    this.overviewSgmtOpt = 'all';
    this.pgSett.setShowToolbarSideMenu(true);
    this.reqDashboardAPI('all');
    this.getTop10Subs();
  }


  /**
   * This method is to get changed value of segment
   * @param {*} ev
   * @memberof DashboardPage
   */
  segmentChanged(ev: any) {
    this.reqDashboardAPI(ev.detail.value);
  }

  /**
   * This method is to get data for dashboard's cards
   * @param {*} type Segment type (all/week/month/quarter)
   * @memberof DashboardPage
   */
  async reqDashboardAPI(type) {
    await this.dshbAPISvs.reqGetApi('/api/admin/dashboard/' + type).subscribe(
      retDsbData => {
        this.dashboardData = retDsbData;
        this.allCust = retDsbData.totalCustomer;
        this.activeCust = retDsbData.totalActiveCustomer;
        this.inactiveCust = retDsbData.totalInactiveCustomer;
        this.compNo = retDsbData.totalCompany;
        this.empNo = retDsbData.totalEmployee;
        if (type !== 'all') {
          this.onCalcValueDiff(retDsbData);
          // this.allCustDiff1 = this.calcDiff(retDsbData.totalCustomer, retDsbData.diffCustomer);
          // this.actvCustDiff1 =  this.calcDiff(retDsbData.totalActiveCustomer, retDsbData.diffActiveCustomer);
          // this.inactvCustDiff1 = this.calcDiff(retDsbData.totalInactiveCustomer, retDsbData.diffInactiveCustomer);
          // this.compNoDiff1 = this.calcDiff(retDsbData.totalCompany, retDsbData.diffCompany);
          // this.empNoDiff1 = this.calcDiff(retDsbData.totalEmployee, retDsbData.diffEmployee);
          // this.diffVal = {
          //   allCustDiff: this.calcDiff(retDsbData.totalCustomer, retDsbData.diffCustomer),
          //   actvCustDiff: this.calcDiff(retDsbData.totalActiveCustomer, retDsbData.diffActiveCustomer),
          //   inactvCustDiff: this.calcDiff(retDsbData.totalInactiveCustomer, retDsbData.diffInactiveCustomer),
          //   compNoDiff: this.calcDiff(retDsbData.totalCompany, retDsbData.diffCompany),
          //   empNoDiff: this.calcDiff(retDsbData.totalEmployee, retDsbData.diffEmployee),
          // };
        }
      }
    );
  }

  /**
   * This method is to calculate the value to be returned in dashboard cards
   * @param {*} retDsbData
   * @memberof DashboardPage
   */
  onCalcValueDiff(retDsbData) {
    this.allCustDiff1 = this.calcDiff(retDsbData.totalCustomer, retDsbData.diffCustomer);
    this.actvCustDiff1 = this.calcDiff(retDsbData.totalActiveCustomer, retDsbData.diffActiveCustomer);
    this.inactvCustDiff1 = this.calcDiff(retDsbData.totalInactiveCustomer, retDsbData.diffInactiveCustomer);
    this.compNoDiff1 = this.calcDiff(retDsbData.totalCompany, retDsbData.diffCompany);
    this.empNoDiff1 = this.calcDiff(retDsbData.totalEmployee, retDsbData.diffEmployee);
    this.diffVal = {
      allCustDiff: this.calcDiff(retDsbData.totalCustomer, retDsbData.diffCustomer),
      actvCustDiff: this.calcDiff(retDsbData.totalActiveCustomer, retDsbData.diffActiveCustomer),
      inactvCustDiff: this.calcDiff(retDsbData.totalInactiveCustomer, retDsbData.diffInactiveCustomer),
      compNoDiff: this.calcDiff(retDsbData.totalCompany, retDsbData.diffCompany),
      empNoDiff: this.calcDiff(retDsbData.totalEmployee, retDsbData.diffEmployee),
    };
    
  }

  /**
   * This method is to calcualte the difference value between current value and previous value
   * @param {*} currVal This parameter is refer to current value
   * @param {*} prevVal This parameter is refer to previous value to be compared
   * @returns
   * @memberof DashboardPage
   */
  calcDiff(currVal, prevVal) {
    return Math.round(((currVal - prevVal) / currVal) * 100);
  }

  /**
   * This method is to get recent subscribers list from API
   * @memberof DashboardPage
   */
  getTop10Subs() {
    this.dshbAPISvs.reqGetApi('/api/admin/customer').subscribe(
      custData => {
        custData.forEach(custObj => {
          this.getDshbSubsList(custObj);
        });
        this.subscribers = custData.sort((a, b) => (a.LAST_BILLING_DATE > b.LAST_BILLING_DATE) ? -1 :
          ((b.LAST_BILLING_DATE > a.LAST_BILLING_DATE) ? 1 : 0)).slice(0,6);
      }
    )
  }

  /**
   * This method is to process response returned from API to merge between customers data and subscriptions data
   * @param {*} custObj
   * @memberof DashboardPage
   */
  getDshbSubsList(custObj) {
    this.dshbAPISvs.reqGetApi('/api/admin/subscription').subscribe(
      subsData => {
        this.onHandleSubsDataList(subsData, custObj);
        // subsData.forEach(subsObj => {
        //   if (custObj.CUSTOMER_GUID === subsObj.CUSTOMER_GUID) {
        //     custObj = Object.assign(custObj, subsObj, { 
        //       SIMPLE_CREATION_TS: this.dshbGlobalFn.changeDateFormatSimpleDDMMYYYY(subsObj.CREATION_TS),
        //       SIMPLE_ACTIVATION_DATE: this.dshbGlobalFn.changeDateFormatSimpleDDMMYYYY(subsObj.ACTIVATION_DATE),
        //       SIMPLE_LAST_BILLING_DATE: this.dshbGlobalFn.changeDateFormatSimpleDDMMYYYY(subsObj.LAST_BILLING_DATE),
        //       SIMPLE_NEXT_BILLING_DATE: this.dshbGlobalFn.changeDateFormatSimpleDDMMYYYY(subsObj.NEXT_BILLING_DATE),
        //     });
        //   }
        // });
      }
    )
  }

  /**
   * This method is to handle subprocess from returned subscriptions data
   * @param {*} subsData
   * @param {*} custObj
   * @memberof DashboardPage
   */
  onHandleSubsDataList(subsData, custObj) {
    subsData.forEach(subsObj => {
      if (custObj.CUSTOMER_GUID === subsObj.CUSTOMER_GUID) {
        custObj = Object.assign(custObj, subsObj, {
          SIMPLE_CREATION_TS: this.dshbGlobalFn.changeDateFormatSimpleDDMMYYYY(subsObj.CREATION_TS),
          SIMPLE_ACTIVATION_DATE: this.dshbGlobalFn.changeDateFormatSimpleDDMMYYYY(subsObj.ACTIVATION_DATE),
          SIMPLE_LAST_BILLING_DATE: this.dshbGlobalFn.changeDateFormatSimpleDDMMYYYY(subsObj.LAST_BILLING_DATE),
          SIMPLE_NEXT_BILLING_DATE: this.dshbGlobalFn.changeDateFormatSimpleDDMMYYYY(subsObj.NEXT_BILLING_DATE),
        });
      }
    });

  }
}

