import { Component, OnInit} from '@angular/core';

// export const subscribers: any = [];


@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.page.html',
  styleUrls: ['./subscriptions.page.scss'],
})

export class SubscriptionsPage implements OnInit {

  public currentClient;
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
    },
    {
      createdOn: '23 Apr 2019',
      activatedOn: '23 Apr 2019',
      subscription: 'SUB-00002',
      clientName: 'Park Su Jin',
      clientEmail: 'park@agoyatravel.com',
      companyName: 'Agoya Travel Sdn. Bhd.',
      plan: 'Standard',
      status: 'LIVE',
      lastBillingOn: '24 Jun 2019',
      nextBillingOn: '24 Jul 2019'
    },
    {
      createdOn: '26 May 2019',
      activatedOn: '26 May 2019',
      subscription: 'SUB-00001',
      clientName: 'Camellia Ean',
      clientEmail: 'camellia@fintechh.com',
      companyName: 'Fintechh Sdn. Bhd.',
      plan: 'Standard',
      status: 'PAST DUE',
      lastBillingOn: '30 Apr 2019',
      nextBillingOn: '30 Jul 2019'
    },
    {
      createdOn: '18 Jan 2019',
      activatedOn: '19 Jan 2019',
      subscription: 'SUB-00009',
      clientName: 'Simba',
      clientEmail: 'simba@dell.com',
      companyName: 'Dell Sdn. Bhd.',
      plan: 'Standard',
      status: 'LIVE',
      lastBillingOn: '19 Aug 2019',
      nextBillingOn: '19 Sept 2019'
    },
    {
      createdOn: '19 Feb 2019',
      activatedOn: '19 Feb 2019',
      subscription: 'SUB-00010',
      clientName: 'Miya',
      clientEmail: 'miya@intel.com',
      companyName: 'Intel Sdn. Bhd.',
      plan: 'Standard',
      status: 'LIVE',
      lastBillingOn: '19 Aug 2019',
      nextBillingOn: '19 Sept 2019'
    }
    // },
    // {
    //   createdOn: '1 Jan 2019',
    //   activatedOn: '1 Jan 2019',
    //   subscription: 'SUB-00011',
    //   clientName: 'Najwa Latif',
    //   clientEmail: 'najwa@abcsde.com',
    //   companyName: 'Abcsde Sdn. Bhd.',
    //   plan: 'Standard',
    //   status: 'LIVE',
    //   lastBillingOn: '1 Aug 2019',
    //   nextBillingOn: '1 Sept 2019'
    // },
    // {
    //   createdOn: '2 Jan 2019',
    //   activatedOn: '2 Jan 2019',
    //   subscription: 'SUB-00012',
    //   clientName: 'Tony Stark',
    //   clientEmail: 'tony@stark.com',
    //   companyName: 'Stark Sdn. Bhd',
    //   plan: 'Standard',
    //   status: 'LIVE',
    //   lastBillingOn: '2 Aug 2019',
    //   nextBillingOn: '2 Sept 2019'
    // },
    // {
    //   createdOn: '3 Jan 2019',
    //   activatedOn: '3 Jan 2019',
    //   subscription: 'SUB-00013',
    //   clientName: 'Mila',
    //   clientEmail: 'mila@abc1.com',
    //   companyName: 'Abc 1 Sdn. Bhd.',
    //   plan: 'Standard',
    //   status: 'LIVE',
    //   lastBillingOn: '3 Aug 2019',
    //   nextBillingOn: '3 Sept 2019'
    // },
    // {
    //   createdOn: '4 Jan 2019',
    //   activatedOn: '4 Jan 2019',
    //   subscription: 'SUB-00014',
    //   clientName: 'Ahmad Ali',
    //   clientEmail: 'ali@abc2.com',
    //   companyName: 'Abc 2 Sdn. Bhd.',
    //   plan: 'Standard',
    //   status: 'LIVE',
    //   lastBillingOn: '4 Aug 2019',
    //   nextBillingOn: '4 Sept 2019'
    // },
    // {
    //   createdOn: '5 Jan 2019',
    //   activatedOn: '5 Jan 2019',
    //   subscription: 'SUB-00015',
    //   clientName: 'Ahmad Abu',
    //   clientEmail: 'abu@abc3.com',
    //   companyName: 'Abc 3 Sdn. Bhd.',
    //   plan: 'Standard',
    //   status: 'LIVE',
    //   lastBillingOn: '5 Aug 2019',
    //   nextBillingOn: '5 Sept 2019'
    // },
    // {
    //   createdOn: '6 Jan 2019',
    //   activatedOn: '6 Jan 2019',
    //   subscription: 'SUB-00016',
    //   clientName: 'Nurul Iman',
    //   clientEmail: 'niman@abc4.com',
    //   companyName: 'Abc 4 Sdn. Bhd.',
    //   plan: 'Standard',
    //   status: 'LIVE',
    //   lastBillingOn: '6 Aug 2019',
    //   nextBillingOn: '6 Sept 2019'
    // },
    // {
    //   createdOn: '7 Jan 2019',
    //   activatedOn: '7 Jan 2019',
    //   subscription: 'SUB-00017',
    //   clientName: 'Nor Liza',
    //   clientEmail: 'liza@abc5.com',
    //   companyName: 'Abc 5 Sdn. Bhd.',
    //   plan: 'Standard',
    //   status: 'CANCEL SUBSCRIPTION',
    //   lastBillingOn: '7 May 2019',
    //   nextBillingOn: '-'
    // },
    // {
    //   createdOn: '8 Jan 2019',
    //   activatedOn: '8 Jan 2019',
    //   subscription: 'SUB-00018',
    //   clientName: 'Ahmad Faiz',
    //   clientEmail: 'abu@abc6.com',
    //   companyName: 'Abc 6 Sdn. Bhd.',
    //   plan: 'Standard',
    //   status: 'LIVE',
    //   lastBillingOn: '8 Aug 2019',
    //   nextBillingOn: '8 Sept 2019'
    // },
    // {
    //   createdOn: '9 Jan 2019',
    //   activatedOn: '9 Jan 2019',
    //   subscription: 'SUB-00019',
    //   clientName: 'Yap Yin Fei',
    //   clientEmail: 'abu@abc7.com',
    //   companyName: 'Abc 7 Sdn. Bhd.',
    //   plan: 'Standard',
    //   status: 'LIVE',
    //   lastBillingOn: '9 Aug 2019',
    //   nextBillingOn: '9 Sept 2019'
    // },
    // {
    //   createdOn: '10 June 2019',
    //   activatedOn: '10 June 2019',
    //   subscription: 'SUB-00020',
    //   clientName: 'Jackie',
    //   clientEmail: 'abu@abc8.com',
    //   companyName: 'Abc 8 Sdn. Bhd.',
    //   plan: 'Standard',
    //   status: 'TRIAL',
    //   lastBillingOn: '-',
    //   nextBillingOn: '10 Sept 2019'
    // }
  ];

  constructor() { }

  ngOnInit() {
  }

  selectedRow(evt, item) {
    console.log('hi');
    console.log(evt);
    console.log(item);
    this.currentClient = item.clientName;
    // return location.href = '/main/subscriptions/subscriber-details';
  }

  addNewSubscriber() {
    return location.href = '/main/subscriptions/add-new-subscriber';
  }
}