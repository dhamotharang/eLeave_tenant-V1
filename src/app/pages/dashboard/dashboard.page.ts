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
   * @memberof DashboardPage
   */
  constructor(
    public pgSett: PaginationServiceService,
    public dshbAPISvs: APIService
  ) { }

  /**
   * This properties is to set subscribers data
   * @memberof DashboardPage
   */
  public subscribers = [
    {
      creationDate: '3 Jan 2018',
      activationDate: '3 Jan 2018',
      subscription: 'SUB-00008',
      clientName: 'Amelia Hart',
      clientEmail: 'amelia@abccompany1.com.my',
      companyName: 'ABC Company 1 Sdn. Bhd.',
      plan: 'Standard',
      status: 'LIVE',
      lastBillingOn: '20 Jun 2019',
      nextBillingOn: '20 Jul 2019'
    },
    {
      creationDate: '5 Jan 2018',
      activationDate: '6 Jan 2018',
      subscription: 'SUB-00007',
      clientName: 'Brit Robertson',
      clientEmail: 'brit@celtic.com.my',
      companyName: 'Celtic Sdn. Bhd.',
      plan: 'Standard',
      status: 'LIVE',
      lastBillingOn: '6 Jun 2019',
      nextBillingOn: '6 Jul 2019'
    },
    {
      creationDate: '3 Feb 2018',
      activationDate: '3 Feb 2018',
      subscription: 'SUB-00006',
      clientName: 'Maya Hopkins',
      clientEmail: 'maya@boghope.com',
      companyName: 'Bog Hope Sdn. Bhd.',
      plan: 'Standard',
      status: 'TRIAL',
      lastBillingOn: '-',
      nextBillingOn: '3 Aug 2019'
    },
    {
      creationDate: '10 Feb 2018',
      activationDate: '10 Feb 2018',
      subscription: 'SUB-00005',
      clientName: 'James Moya',
      clientEmail: 'James@cdfcompany.com',
      companyName: 'Cdf Company Sdn. Bhd.',
      plan: 'Standard',
      status: 'LIVE',
      lastBillingOn: '4 Jul 2019',
      nextBillingOn: '4 Aug 2019'
    },
    {
      creationDate: '12 Feb 2018',
      activationDate: '15 Feb 2018',
      subscription: 'SUB-00004',
      clientName: 'Camella Hips',
      clientEmail: 'camella@camelloind.com',
      companyName: 'Camelloind Sdn. Bhd.',
      plan: 'Standard',
      status: 'TRIAL',
      lastBillingOn: '-',
      nextBillingOn: '1 Sep 2019'
    },
    {
      creationDate: '20 Mar 2018',
      activationDate: '20 Mar 2018',
      subscription: 'SUB-00003',
      clientName: 'Richards Hanks',
      clientEmail: 'richards@celticcorp.com',
      companyName: 'Celtic Corp Sdn. Bhd.',
      plan: 'Standard',
      status: 'LIVE',
      lastBillingOn: '30 Jul 2019',
      nextBillingOn: '30 Aug 2019'
    }
  ];

  /**
   * This properties is to set value of segment in dashboard
   * @memberof DashboardPage
   */
  public overviewSgmtOpt;

  public dashboardData;
  public allCust;
  public activeCust;
  public inactiveCust;
  public compNo;
  public empNo;
  public diffVal;
  public allCustDiff1;
  public actvCustDiff1;
  public inactvCustDiff1;
  public compNoDiff1;
  public empNoDiff1;



  /**
   * This method is to set inital value of properties. It
   * will be executed when Dashboard page being loaded.
   * @memberof DashboardPage
   */
  ngOnInit() {
    this.overviewSgmtOpt = 'all';
    this.pgSett.setShowToolbarSideMenu(true);
    this.reqDashboardAPI('all');
    // this.dshbAPISvs.reqGetApi('/api/admin/dashboard/all').subscribe(
    //   respData => {
    //     this.dashboardData = respData;
    //     console.log('dashboardData2: ' + JSON.stringify(this.dashboardData, null, " "));

    //   }
    // );
  }


  /**
   * This method is to get changed value of segment
   * @param {*} ev
   * @memberof DashboardPage
   */
  segmentChanged(ev: any) {
    console.log('Segment changed:', ev.detail.value);
    this.reqDashboardAPI(ev.detail.value);
    console.log('dashboardData3: ' + JSON.stringify(this.dashboardData, null, " "));
    console.log(this.overviewSgmtOpt);
  }

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
          // this.allCustDiff1 = -10;
          this.allCustDiff1 = this.calcDiff(retDsbData.totalCustomer, retDsbData.diffCustomer);
          this.actvCustDiff1 =  this.calcDiff(retDsbData.totalActiveCustomer, retDsbData.diffActiveCustomer);
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
          console.log('rthis.diffVal: ' + JSON.stringify(this.diffVal, null, " ")); 
        }
        console.log('rthis.dashboardData: ' + JSON.stringify(this.dashboardData, null, " "))
      }
    );
  }

  calcDiff(currVal, prevVal) {
    return Math.round(((currVal - prevVal) / currVal) * 100);
  }
}

