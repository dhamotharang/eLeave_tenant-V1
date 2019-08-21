import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor() { }
  public subscribers = [
    {
      createdOn: '3 Jan 2018',
      activatedOn: '3 Jan 2018',
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
      createdOn: '5 Jan 2018',
      activatedOn: '6 Jan 2018',
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
      createdOn: '3 Feb 2018',
      activatedOn: '3 Feb 2018',
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
      createdOn: '10 Feb 2018',
      activatedOn: '10 Feb 2018',
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
      createdOn: '12 Feb 2018',
      activatedOn: '15 Feb 2018',
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
      createdOn: '20 Mar 2018',
      activatedOn: '20 Mar 2018',
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
   *
   * Initial method
   * @memberof DashboardPage
   */
  ngOnInit() {
  }

  segmentChanged(ev: any) {
    // console.log('Segment changed:', ev);
    console.log('Segment changed:', ev.detail.value);
  }


  tableContent() {

  }
}

