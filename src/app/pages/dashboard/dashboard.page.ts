import { Component, OnInit } from '@angular/core';
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


  /**
   * This method is to set inital value of properties. It
   * will be executed when Dashboard page being loaded.
   * @memberof DashboardPage
   */
  ngOnInit() {
    this.overviewSgmtOpt = 'all';
    this.pgSett.setShowToolbarSideMenu(true);
  }


  /**
   * This method is to get changed value of segment
   * @param {*} ev
   * @memberof DashboardPage
   */
  segmentChanged(ev: any) {
    console.log('Segment changed:', ev.detail.value);
    console.log(this.overviewSgmtOpt);
  }
}

