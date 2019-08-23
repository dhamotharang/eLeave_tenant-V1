import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs';


@Component({
  selector: 'app-subscriber-details',
  templateUrl: './subscriber-details.page.html',
  styleUrls: ['./subscriber-details.page.scss'],
})

export class SubscriberDetailsPage implements OnInit {

  constructor() { }


  public subscribersDetails = [
    {
      createdOn: '3 Jan 2018',
      activatedOn: '3 Jan 2018',
      subscription: 'SUB-00008',
      clientName: 'Amelia Hart',
      clientEmail: 'amelia@abccompany1.com.my',
      companyName: 'ABC Company 1 Sdn. Bhd.',
      addressLine1: 'Level 43A, 8, Jalan Damansara,',
      addressLine2: 'Empire City',
      addressState: 'Petaling Jaya',
      addressZip: '47820',
      addressCountry: 'Malaysia',
      plan: 'Standard',
      status: 'LIVE',
      lastBillingOn: '20 Jun 2019',
      nextBillingOn: '20 Jul 2019',
      repeatEvery: '1 month',
      salesPerson: 'Alia',
      activationDate: '20 Jan 2019'
    },
    {
      createdOn: '5 Jan 2018',
      activatedOn: '6 Jan 2018',
      subscription: 'SUB-00007',
      clientName: 'Brit Robertson',
      clientEmail: 'brit@celtic.com.my',
      companyName: 'Celtic Sdn. Bhd.',
      addressLine1: 'Level 20A, 8, Jalan Damansara,',
      addressLine2: 'Empire City',
      addressState: 'Petaling Jaya',
      addressZip: '47820',
      addressCountry: 'Malaysia',
      plan: 'Standard',
      status: 'LIVE',
      lastBillingOn: '6 Jun 2019',
      nextBillingOn: '6 Jul 2019',
      repeatEvery: '1 month',
      salesPerson: 'Lee Siew May',
      activationDate: '6 Jan 2018'
    },
    {
      createdOn: '3 Feb 2018',
      activatedOn: '3 Feb 2018',
      subscription: 'SUB-00006',
      clientName: 'Maya Hopkins',
      clientEmail: 'maya@boghope.com',
      companyName: 'Bog Hope Sdn. Bhd.',
      addressLine1: 'Level 41A, 8, Jalan Damansara,',
      addressLine2: 'Empire City',
      addressState: 'Petaling Jaya',
      addressZip: '47820',
      addressCountry: 'Malaysia',
      plan: 'Standard',
      status: 'TRIAL',
      lastBillingOn: '-',
      nextBillingOn: '3 Aug 2019',
      repeatEvery: '1 month',
      salesPerson: 'Lee Siew May',
      activationDate: '3 June 2019'
    },
    {
      createdOn: '10 Feb 2018',
      activatedOn: '10 Feb 2018',
      subscription: 'SUB-00005',
      clientName: 'James Moya',
      clientEmail: 'James@cdfcompany.com',
      companyName: 'Cdf Company Sdn. Bhd.',
      addressLine1: 'Level 43A, 8, Jalan Damansara,',
      addressLine2: 'Empire City',
      addressState: 'Petaling Jaya',
      addressZip: '47820',
      addressCountry: 'Malaysia',
      plan: 'Standard',
      status: 'LIVE',
      lastBillingOn: '4 Jul 2019',
      nextBillingOn: '4 Aug 2019',
      repeatEvery: '1 month',
      salesPerson: 'Alia',
      activationDate: '4 Jan 2019'
    },
    {
      createdOn: '12 Feb 2018',
      activatedOn: '15 Feb 2018',
      subscription: 'SUB-00004',
      clientName: 'Camella Hips',
      clientEmail: 'camella@camelloind.com',
      companyName: 'Camelloind Sdn. Bhd.',
      addressLine1: 'No. 17, Jalan 2/149B,',
      addressLine2: 'Taman Sri Endah,',
      addressState: 'Kuala Lumpur',
      addressZip: '57000',
      addressCountry: 'Malaysia',
      plan: 'Standard',
      status: 'TRIAL',
      lastBillingOn: '-',
      nextBillingOn: '1 Sep 2019',
      repeatEvery: '1 month',
      salesPerson: 'Tarmizi',
      activationDate: '1 Jan 2019'
    },
    {
      createdOn: '20 Mar 2018',
      activatedOn: '20 Mar 2018',
      subscription: 'SUB-00003',
      clientName: 'Richards Hanks',
      clientEmail: 'richards@celticcorp.com',
      companyName: 'Celtic Corp Sdn. Bhd.',
      addressLine1: 'No. 1, Jalan 2/149B,',
      addressLine2: 'Taman Sri Endah,',
      addressState: 'Kuala Lumpur',
      addressZip: '57000',
      addressCountry: 'Malaysia',
      plan: 'Standard',
      status: 'LIVE',
      lastBillingOn: '30 Jul 2019',
      nextBillingOn: '30 Aug 2019',
      repeatEvery: '1 month',
      salesPerson: 'Alia',
      activationDate: '30 Jan 2019'
    },
    {
      createdOn: '23 Apr 2019',
      activatedOn: '23 Apr 2019',
      subscription: 'SUB-00002',
      clientName: 'Park Su Jin',
      clientEmail: 'park@agoyatravel.com',
      companyName: 'Agoya Travel Sdn. Bhd.',
      addressLine1: 'No. 2, Jalan 2/149B,',
      addressLine2: 'Taman Sri Endah,',
      addressState: 'Kuala Lumpur',
      addressZip: '57000',
      addressCountry: 'Malaysia',
      plan: 'Standard',
      status: 'LIVE',
      lastBillingOn: '24 Jun 2019',
      nextBillingOn: '24 Jul 2019',
      repeatEvery: '1 month',
      salesPerson: 'Tarmizi',
      activationDate: '24 Jul 2018'
    },
    {
      createdOn: '26 May 2019',
      activatedOn: '26 May 2019',
      subscription: 'SUB-00001',
      clientName: 'Camellia Ean',
      clientEmail: 'camellia@fintechh.com',
      companyName: 'Fintechh Sdn. Bhd.',
      addressLine1: 'No. 3, Jalan 2/149B,',
      addressLine2: 'Taman Sri Endah,',
      addressState: 'Kuala Lumpur',
      addressZip: '57000',
      addressCountry: 'Malaysia',
      plan: 'Standard',
      status: 'PAST DUE',
      lastBillingOn: '30 Apr 2019',
      nextBillingOn: '30 Jul 2019',
      repeatEvery: '1 month',
      salesPerson: 'Lee Siew May',
      activationDate: '30 Dec 2018'
    },
    {
      createdOn: '18 Jan 2019',
      activatedOn: '19 Jan 2019',
      subscription: 'SUB-00009',
      clientName: 'Simba',
      clientEmail: 'simba@dell.com',
      companyName: 'Dell Sdn. Bhd.',
      addressLine1: 'No. 4, Jalan 2/149B,',
      addressLine2: 'Taman Sri Endah,',
      addressState: 'Kuala Lumpur',
      addressZip: '57000',
      addressCountry: 'Malaysia',
      plan: 'Standard',
      status: 'LIVE',
      lastBillingOn: '19 Aug 2019',
      nextBillingOn: '19 Sept 2019',
      repeatEvery: '1 month',
      salesPerson: 'Alia',
      activationDate: '19 Feb 2019'
    },
    {
      createdOn: '19 Feb 2019',
      activatedOn: '19 Feb 2019',
      subscription: 'SUB-00010',
      clientName: 'Miya',
      clientEmail: 'miya@intel.com',
      companyName: 'Intel Sdn. Bhd.',
      addressLine1: 'No. 5, Jalan 2/149B,',
      addressLine2: 'Taman Sri Endah,',
      addressState: 'Kuala Lumpur',
      addressZip: '57000',
      addressCountry: 'Malaysia',
      plan: 'Standard',
      status: 'LIVE',
      lastBillingOn: '19 Aug 2019',
      nextBillingOn: '19 Sept 2019',
      repeatEvery: '1 month',
      salesPerson: 'Alia',
      activationDate: '19 May 2019'
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

  public isShowingPicker = true;
  public subscriberOverviewParentCompany = this.subscribersDetails[0].companyName;
  public subscriberOverviewAdminName = this.subscribersDetails[0].clientName;
  public subscriberOverviewAdminEmail = this.subscribersDetails[0].clientEmail;
  public subscriberOverciewAddressLine1 = this.subscribersDetails[0].addressLine1;
  public subscriberOverciewAddressLine2 = this.subscribersDetails[0].addressLine2;
  public  subscriberOverciewAddressState = this.subscribersDetails[0].addressState;
  public subscriberOverciewAddressZip = this.subscribersDetails[0].addressZip;
  public subscriberOverciewAddressCountry = this.subscribersDetails[0].addressCountry;
  public subscriberOvercieRepeatEvery = this.subscribersDetails[0].repeatEvery;
  public subscriberOverciewSalesPerson = this.subscribersDetails[0].salesPerson;
  public subscriberOverciewActivationDate = this.subscribersDetails[0].activationDate;
  public subscriberDetailsLastBillingDate = this.subscribersDetails[0].lastBillingOn;
  public subscriberDetailsNextBillingDate = this.subscribersDetails[0].nextBillingOn;
  public subscriberDetailsDaysLeft = this.dateDifference(this.subscribersDetails[0].lastBillingOn, 
                                        this.subscribersDetails[0].nextBillingOn);
  public subscriberDetailsStatus = this.subscribersDetails[0].status;
  public subscriberDetailsSubscriptionCode = this.subscribersDetails[0].subscription;

  ngOnInit() {
  }
  dateDifference(startdt, enddt) {
    const dropdt: number = Number(new Date(enddt));
    const pickdt: number = Number(new Date(startdt));
    let daysleft: number = (dropdt - pickdt) / (24 * 3600 * 1000);
    daysleft = isNaN(daysleft) ? daysleft = 0 : daysleft ;
    return daysleft;
}


  showCalenderPicker() {
    console.log('hi: ' + this.isShowingPicker);

    if (this.isShowingPicker) {
      this.isShowingPicker = true;
    } else {
      this.isShowingPicker = false;
    }
    return this.isShowingPicker;
    // if (this.isShowingPicker) {
    //   this.isShowingPicker = true;
    // } else {
    //   this.isShowingPicker = false;
    // }
    // return this.isShowingPicker;
  }

  selectedClient(selectedSubscriberInfo) {
    console.log(selectedSubscriberInfo);
    this.subscriberOverviewParentCompany = selectedSubscriberInfo.companyName;
    this.subscriberOverviewAdminName = selectedSubscriberInfo.clientName;
    this.subscriberOverviewAdminEmail = selectedSubscriberInfo.clientEmail;
    this.subscriberOverciewAddressLine1 = selectedSubscriberInfo.addressLine1;
    this.subscriberOverciewAddressLine2 = selectedSubscriberInfo.addressLine2;
    this.subscriberOverciewAddressState = selectedSubscriberInfo.addressState;
    this.subscriberOverciewAddressZip = selectedSubscriberInfo.addressZip;
    this.subscriberOverciewAddressCountry = selectedSubscriberInfo.addressCountry;
    this.subscriberOvercieRepeatEvery = selectedSubscriberInfo.repeatEvery;
    this.subscriberOverciewSalesPerson = selectedSubscriberInfo.salesPerson;
    this.subscriberOverciewActivationDate = selectedSubscriberInfo.activationDate;
    this.subscriberDetailsLastBillingDate = selectedSubscriberInfo.lastBillingOn;
    this.subscriberDetailsNextBillingDate = selectedSubscriberInfo.nextBillingOn;
    this.subscriberDetailsDaysLeft = this.dateDifference(selectedSubscriberInfo.lastBillingOn, selectedSubscriberInfo.nextBillingOn);
    this.subscriberDetailsStatus = selectedSubscriberInfo.status;
    this.subscriberDetailsSubscriptionCode = selectedSubscriberInfo.subscription;
  }


}
