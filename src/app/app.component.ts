import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

export let customersDummiesData;
export let salesmanDummiesData;
export let userDummiesData;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  public salepersonData = [
    {name: 'Alia'},
    {name: 'Tarmizi'},
    {name: 'Lee Siew Maya'},
    {name: 'Jacky'},
    {name: 'Noraini'}
  ];

  public userDetails = [
    {
      username: 'Wan Fathurrahman',
      email: 'fathurrahman@zen.com.my',
      status: 'active',
      role: 'Super Admin'
    },
    {
      username: 'Lee Chong Weng',
      email: 'chongweng@zen.com.my',
      status: 'inactive',
      role: 'Super Admin'
    },
    {
      username: 'Maisarah Mansor',
      email: 'maisarah@zen.com.my',
      status: 'active',
      role: 'Salesperson'
    },
    {
      username: 'Sarra Bella',
      email: 'sarra@zen.com.my',
      status: 'active',
      role: 'Support'
    },
    {
      username: 'Alan Walker',
      email: 'alan@zen.com.my',
      status: 'active',
      role: 'Support'
    },
    {
      username: 'Bea Miller',
      email: 'miller@zen.com.my',
      status: 'inactive',
      role: 'Super Admin'
    },
    {
      username: 'Faizal Tahir',
      email: 'faizal@zen.com.my',
      status: 'active',
      role: 'Salesperson'
    },
    {
      username: 'Tom Miller',
      email: 'tom@zen.com.my',
      status: 'inactive',
      role: 'Support'
    },
  ];

  public customerSample = [
    {
      clientID: '0000001',
      currency: 'MYR',
      clientName: 'Amelia Hart',
      clientEmail: 'amelia@abccompany1.com',
      clientContactNo: '+60-135-558-8',
      companyName: 'ABC Company 1 Sdn. Bhd.',
      plan: 'Standard',
      status: 'LIVE',
      tenantNumber: 3,
      employeeNumber: 66,
      employeeQuota: 100,
      addressLine1: 'Level 201A, 8, Jalan Damansara,',
      addressLine2: 'Empire City',
      addressCity: 'Petaling Jaya',
      addressState: 'Selangor',
      addressZip: '47820',
      addressCountry: 'Malaysia',
      repeatEvery: '1 month(s)',
      billingCycle: 13,
      salesPerson: 'Alia',
      subscription: 'SUB-00008',
      creationDate: '3 Jan 2018',
      activationDate: '20 Jan 2019',
      expiryDate: '20 Jan 2020',
      lastBillingOn: '20 Jun 2019',
      nextBillingOn: '20 Jul 2019',
      history: [
        {
          date: '3 June 2019',
          time: '10.00AM',
          description: 'Subscription - Standard Plan has been renewed',
          pic: 'Alia'
        },
        {
          date: '3 May 2019',
          time: '10.00AM',
          description: 'Subscription - Standard Plan has been renewed',
          pic: 'Alia'
        },
        {
          date: '3 Apr 2019',
          time: '10.00AM',
          description: 'Subscription - Standard Plan has been renewed',
          pic: 'Alia'
        },
        {
          date: '3 March 2019',
          time: '10.00AM',
          description: 'Subscription - Standard Plan has been renewed',
          pic: 'Alia'
        },
        {
          date: '2 Feb 2019',
          time: '8.00AM',
          description: 'Subscription - Standard Plan has been renewed',
          pic: 'Fatin'
        },
        {
          date: '3 Jan 2019',
          time: '9.00AM',
          description: 'Subscription - Standard Plan has been renewed',
          pic: 'Alia'
        },
        {
          date: '3 Dec 2018',
          time: '10.00AM',
          description: 'Subscription - Standard Plan has been renewed',
          pic: 'Alia'
        },
        {
          date: '3 Nov 2018',
          time: '10.00AM',
          description: 'Subscription - Standard Plan has been renewed',
          pic: 'Alia'
        },
        {
          date: '3 Oct 2018',
          time: '10.00AM',
          description: 'Subscription - Standard Plan has been renewed',
          pic: 'Ali'
        },
        {
          date: '3 Sept 2018',
          time: '10.00AM',
          description: 'Subscription - Standard Plan has been renewed',
          pic: 'Wan'
        },
        {
          date: '3 Aug 2018',
          time: '10.00AM',
          description: 'Subscription - Standard Plan has been renewed',
          pic: 'Ali'
        },
        {
          date: '3 July 2018',
          time: '10.00AM',
          description: 'Subscription - Standard Plan has been renewed',
          pic: 'Fatin'
        },
        {
          date: '3 June 2018',
          time: '10.00AM',
          description: 'Subscription - Standard Plan has been renewed',
          pic: 'Wan'
        },
        {
          date: '3 May 2018',
          time: '10.00AM',
          description: 'Subscription - Standard Plan has been renewed',
          pic: 'Fatin'
        },
        {
          date: '3 Apr 2018',
          time: '10.00AM',
          description: 'Subscription - Standard Plan has been renewed',
          pic: 'Wan'
        },
        {
          date: '3 March 2018',
          time: '10.00AM',
          description: 'Subscription - Standard Plan has been renewed',
          pic: 'Wan'
        },
        {
          date: '2 Feb 2018',
          time: '8.00AM',
          description: 'Subscription - Standard Plan has been renewed',
          pic: 'Fatin'
        },
        {
          date: '3 Jan 2018',
          time: '9.00AM',
          description: 'Subscription - Standard Plan has been renewed',
          pic: 'Wan'
        },
      ],
      childrenCompany: [
        {
          childCpnyName: 'Child Company a 1 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-09, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 5
        },
        {
          childCpnyName: 'Child Company a 2 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-08, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 11
        },
        {
          childCpnyName: 'Child Company a 3 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-08, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 11
        },
        {
          childCpnyName: 'Child Company a 4 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-08, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 11
        },
        {
          childCpnyName: 'Child Company a 5 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 6
        },
        {
          childCpnyName: 'Child Company a 6 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 22
        },
        {
          childCpnyName: 'Child Company a 7 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 22
        },
        {
          childCpnyName: 'Child Company a 8 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 22
        },
        {
          childCpnyName: 'Child Company a 9 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 5
        },
        {
          childCpnyName: 'Child Company a 10 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 13
        },
        {
          childCpnyName: 'Child Company a 11 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 27
        },
        {
          childCpnyName: 'Child Company a 12 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 88
        },
        {
          childCpnyName: 'Child Company a 13 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 63
        },
        {
          childCpnyName: 'Child Company a 14 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 174
        },
      ]
    },
    {
      clientID: '0000002',
      currency: 'MYR',
      clientName: 'Brit Robertson',
      clientEmail: 'brit@celtic.com.my',
      clientContactNo: '+60-155-552-7',
      companyName: 'Celtic Sdn. Bhd.',
      plan: 'Standard',
      status: 'LIVE',
      tenantNumber: 5,
      employeeNumber: 43,
      employeeQuota: 50,
      addressLine1: 'Level 20A, 8, Jalan Damansara,',
      addressLine2: 'Empire City',
      addressCity: 'Petaling Jaya',
      addressState: 'Selangor',
      addressZip: '47820',
      addressCountry: 'Malaysia',
      repeatEvery: '2 month(s)',
      billingCycle: 9,
      salesPerson: 'Lee Siew May',
      subscription: 'SUB-00007',
      creationDate: '6 Jan 2018',
      activationDate: '6 Jan 2018',
      expiryDate: '6 Jan 2020',
      lastBillingOn: '6 Jul 2019',
      nextBillingOn: '6 Jul 2019',
      history: [
        {
          date: '3 Jan 2019',
          time: '9.00AM',
          description: 'Subscription - Standard Plan has been renewed',
          pic: 'Alia'
        },
        {
          date: '2 Feb 2019',
          time: '8.00AM',
          description: 'Subscription - Standard Plan has been renewed',
          pic: 'Fatin'
        },
        {
          date: '3 March 2019',
          time: '10.00AM',
          description: 'Subscription - Standard Plan has been renewed',
          pic: 'Alia'
        },
        {
          date: '3 Apr 2019',
          time: '10.00AM',
          description: 'Subscription - Standard Plan has been renewed',
          pic: 'Lee Siew May'
        },
        {
          date: '3 May 2019',
          time: '10.00AM',
          description: 'Subscription - Standard Plan has been renewed',
          pic: 'Lee Siew May'
        },
        {
          date: '3 June 2019',
          time: '10.00AM',
          description: 'Subscription - Standard Plan has been renewed',
          pic: 'Lee Siew May'
        },
      ],
      childrenCompany: [
        {
          childCpnyName: 'Child Company b 1 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-09, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 13
        },
        {
          childCpnyName: 'Child Company b 2 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-08, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 20
        },
        {
          childCpnyName: 'Child Company b 3 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 10
        },
      ]
    },
    {
      clientID: '0000003',
      currency: 'MYR',
      clientName: 'Maya Hopkins',
      clientEmail: 'maya@boghope.com',
      clientContactNo: '+60-145-551-4',
      companyName: 'Bog Hope Sdn. Bhd.',
      plan: 'Standard',
      status: 'TRIAL',
      tenantNumber: 1,
      employeeNumber: 5,
      employeeQuota: 10,
      addressLine1: 'Level 41A, 8, Jalan Damansara,',
      addressLine2: 'Empire City',
      addressCity: 'Petaling Jaya',
      addressState: 'Selangor',
      addressZip: '47820',
      addressCountry: 'Malaysia',
      repeatEvery: '1 month(s)',
      billingCycle: 0,
      salesPerson: 'Lee Siew May',
      subscription: 'SUB-00006',
      creationDate: '3 June 2018',
      activationDate: '3 June 2019',
      expiryDate: '3 June 2020',
      lastBillingOn: '-',
      nextBillingOn: '3 Aug 2019',
      childrenCompany: [
        {
          childCpnyName: 'Child Company c 1 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-09, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 2
        },
        {
          childCpnyName: 'Child Company c 2 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 3 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 4 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 5 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 6 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 7 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 8 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 9 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 10 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 11 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 12 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 13 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company  c14 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 15 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 16 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 17 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 18 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 19 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 20 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 21 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 22 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 23 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 24 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 25 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 26 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 27 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 28 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 29 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 3- Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 31 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 32 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 32 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 33 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 34 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 35 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 36 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 37 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 38 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
        {
          childCpnyName: 'Child Company c 39 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 3
        },
      ]
    },
    {
      clientID: '0000004',
      currency: 'MYR',
      clientName: 'James Moya',
      clientEmail: 'James@cdfcompany.com',
      clientContactNo: '+60-195-553-0',
      companyName: 'Cdf Company Sdn. Bhd.',
      plan: 'Standard',
      status: 'LIVE',
      tenantNumber: 6,
      employeeNumber: 74,
      employeeQuota: 100,
      addressLine1: 'Level 43A, 8, Jalan Damansara,',
      addressLine2: 'Empire City',
      addressCity: 'Petaling Jaya',
      addressState: 'Selangor',
      addressZip: '47820',
      addressCountry: 'Malaysia',
      repeatEvery: '1 month(s)',
      billingCycle: 7,
      salesPerson: 'Alia',
      subscription: 'SUB-00005',
      creationDate: '4 Jan 2018',
      activationDate: '4 Jan 2019',
      expiryDate: '4 Jan 2020',
      lastBillingOn: '5 Aug 2019',
      nextBillingOn: '4 Aug 2019',
      childrenCompany: [
        {
          childCpnyName: 'Child Company d 1 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-09, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 50
        },
        {
          childCpnyName: 'Child Company d 3 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 24
        },
      ]
    },
    {
      clientID: '0000005',
      currency: 'MYR',
      clientName: 'Camella Hips',
      clientEmail: 'camella@camelloind.com',
      clientContactNo: '+60-165-559-9',
      companyName: 'Camelloind Sdn. Bhd.',
      plan: 'Standard',
      status: 'TRIAL',
      tenantNumber: 1,
      employeeNumber: 2,
      employeeQuota: 10,
      addressLine1: 'No. 17, Jalan 2/149B,',
      addressLine2: 'Taman Sri Endah,',
      addressState: 'Kuala Lumpur',
      addressCity: 'Sri Petaling',
      addressZip: '57000',
      addressCountry: 'Malaysia',
      repeatEvery: '1 month(s)',
      billingCycle: 8,
      salesPerson: 'Tarmizi',
      subscription: 'SUB-00004',
      creationDate: '1 Jan 2019',
      activationDate: '1 Jan 2019',
      expiryDate: '1 Jan 2020',
      lastBillingOn: '-',
      nextBillingOn: '1 Sep 2019',
      childrenCompany: [
        {
          childCpnyName: 'Child Company e 1 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-09, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 2
        },
      ]
    },
    {
      clientID: '0000006',
      currency: 'MYR',
      clientName: 'Richards Hanks',
      clientEmail: 'richards@celticcorp.com',
      clientContactNo: '+60-105-555-5',
      companyName: 'Celtic Corp Sdn. Bhd.',
      plan: 'Standard',
      status: 'LIVE',
      tenantNumber: 2,
      employeeNumber: 22,
      employeeQuota: 30,
      addressLine1: 'No. 1, Jalan 2/149B,',
      addressLine2: 'Taman Sri Endah,',
      addressState: 'Kuala Lumpur',
      addressCity: 'Sri Petaling',
      addressZip: '57000',
      addressCountry: 'Malaysia',
      repeatEvery: '1 month(s)',
      billingCycle: 7,
      salesPerson: 'Alia',
      subscription: 'SUB-00003',
      creationDate: '29 Jan 2018',
      activationDate: '30 Jan 2019',
      expiryDate: '30 Jan 2020',
      lastBillingOn: '30 Jul 2019',
      nextBillingOn: '30 Aug 2019',
      childrenCompany: [
        {
          childCpnyName: 'Child Company f 1 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-09, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 5
        },
        {
          childCpnyName: 'Child Company f 2 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-08, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 5
        },
        {
          childCpnyName: 'Child Company f 3 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 12
        },
      ]
    },
    {
      clientID: '0000007',
      currency: 'MYR',
      clientName: 'Park Su Jin',
      clientEmail: 'park@agoyatravel.com',
      clientContactNo: '+60-105-550-1',
      companyName: 'Agoya Travel Sdn. Bhd.',
      plan: 'Standard',
      status: 'LIVE',
      tenantNumber: 5,
      employeeNumber: 20,
      employeeQuota: 20,
      addressLine1: 'No. 2, Jalan 2/149B,',
      addressLine2: 'Taman Sri Endah,',
      addressState: 'Kuala Lumpur',
      addressCity: 'Sri Petaling',
      addressZip: '57000',
      addressCountry: 'Malaysia',
      repeatEvery: '1 month(s)',
      billingCycle: 1,
      salesPerson: 'Tarmizi',
      subscription: 'SUB-00002',
      creationDate: '24 May 2018',
      activationDate: '24 May 2018',
      expiryDate: '24 May 2020',
      lastBillingOn: '24 Jun 2019',
      nextBillingOn: '24 Jul 2019',
      childrenCompany: [
        {
          childCpnyName: 'Child Company g 1 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-09, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 5
        },
        {
          childCpnyName: 'Child Company g 2 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-08, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 5
        },
        {
          childCpnyName: 'Child Company g 3 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 10
        },
      ]
    },
    {
      clientID: '0000008',
      currency: 'MYR',
      clientName: 'Camellia Ean',
      clientEmail: 'camellia@fintechh.com',
      clientContactNo: '+60-185-553-1',
      companyName: 'Fintechh Sdn. Bhd.',
      plan: 'Standard',
      status: 'PAST DUE',
      tenantNumber: 30,
      employeeNumber: 86,
      employeeQuota: 100,
      addressLine1: 'No. 3, Jalan 2/149B,',
      addressLine2: 'Taman Sri Endah,',
      addressState: 'Kuala Lumpur',
      addressCity: 'Sri Petaling',
      addressZip: '57000',
      addressCountry: 'Malaysia',
      repeatEvery: '1 month(s)',
      billingCycle: 5,
      salesPerson: 'Lee Siew May',
      subscription: 'SUB-00001',
      creationDate: '20 Dec 2018',
      activationDate: '30 Dec 2018',
      expiryDate: '30 Dec 2020',
      lastBillingOn: '30 Apr 2019',
      nextBillingOn: '30 May 2019',
      childrenCompany: [
        {
          childCpnyName: 'Child Company h 1 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-09, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 26
        },
        {
          childCpnyName: 'Child Company h 2 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-08, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 40
        },
        {
          childCpnyName: 'Child Company h 3 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 22
        },
      ]
    },
    {
      clientID: '0000009',
      currency: 'MYR',
      clientName: 'Simba',
      clientEmail: 'simba@dell.com',
      clientContactNo: '+60-195-552-7',
      companyName: 'Dell Sdn. Bhd.',
      plan: 'Standard',
      status: 'LIVE',
      tenantNumber: 15,
      employeeNumber: 64,
      employeeQuota: 65,
      addressLine1: 'No. 4, Jalan 2/149B,',
      addressLine2: 'Taman Sri Endah,',
      addressState: 'Kuala Lumpur',
      addressCity: 'Sri Petaling',
      addressZip: '57000',
      addressCountry: 'Malaysia',
      repeatEvery: '1 month(s)',
      billingCycle: 7,
      salesPerson: 'Alia',
      subscription: 'SUB-00009',
      creationDate: '19 Feb 2018',
      activationDate: '19 Feb 2019',
      expiryDate: '19 Feb 2020',
      lastBillingOn: '19 Aug 2019',
      nextBillingOn: '19 Sept 2019',
      childrenCompany: [
        {
          childCpnyName: 'Child Company i 1 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-09, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 20
        },
        {
          childCpnyName: 'Child Company i 2 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-08, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 22
        },
        {
          childCpnyName: 'Child Company i 3 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 22
        },
      ]
    },
    {
      clientID: '0000010',
      currency: 'MYR',
      clientName: 'Miya',
      clientEmail: 'miya@intel.com',
      clientContactNo: '+60-135-557-9',
      companyName: 'Intel Sdn. Bhd.',
      plan: 'Standard',
      status: 'LIVE',
      tenantNumber: 12,
      employeeNumber: 22,
      employeeQuota: 30,
      addressLine1: 'No. 5, Jalan 2/149B,',
      addressLine2: 'Taman Sri Endah,',
      addressState: 'Kuala Lumpur',
      addressCity: 'Sri Petaling',
      addressZip: '57000',
      addressCountry: 'Malaysia',
      repeatEvery: '1 month(s)',
      billingCycle: 4,
      salesPerson: 'Alia',
      subscription: 'SUB-00010',
      creationDate: '19 May 2018',
      activationDate: '19 May 2019',
      expiryDate: '19 May 2020',
      lastBillingOn: '19 Aug 2019',
      nextBillingOn: '19 Sept 2019',
      childrenCompany: [
        {
          childCpnyName: 'Child Company j 1 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-09, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 12
        },
        {
          childCpnyName: 'Child Company j 2 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-08, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 5
        },
        {
          childCpnyName: 'Child Company j 3 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 5
        },
      ]
    },
    {
      clientID: '0000011',
      currency: 'MYR',
      clientName: 'Najwa Latif',
      clientEmail: 'najwa@abcsde.com',
      clientContactNo: '+60-165-557-9',
      companyName: 'Abcsde Sdn. Bhd.',
      plan: 'Standard',
      status: 'LIVE',
      tenantNumber: 10,
      employeeNumber: 110,
      employeeQuota: 200,
      addressLine1: 'No. 8, Jalan 2/149B,',
      addressLine2: 'Taman Sri Endah,',
      addressState: 'Kuala Lumpur',
      addressCity: 'Sri Petaling',
      addressZip: '57000',
      addressCountry: 'Malaysia',
      repeatEvery: '1 month(s)',
      billingCycle: 7,
      salesPerson: 'Alia',
      subscription: 'SUB-00011',
      creationDate: '19 Feb 2018',
      activationDate: '19 Feb 2019',
      expiryDate: '19 Feb 2020',
      lastBillingOn: '19 Aug 2019',
      nextBillingOn: '19 Sept 2019',
      childrenCompany: [
        {
          childCpnyName: 'Child Company k 1 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-09, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 100
        },
        {
          childCpnyName: 'Child Company k 2 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-08, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 5
        },
        {
          childCpnyName: 'Child Company k 3 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 5
        },
      ]
    },
    {
      clientID: '0000012',
      currency: 'MYR',
      clientName: 'Tony Stark',
      clientEmail: 'tony@stark.com',
      clientContactNo: '+60-125-556-3',
      companyName: 'Stark Sdn. Bhd',
      plan: 'Standard',
      status: 'LIVE',
      tenantNumber: 9,
      employeeNumber: 76,
      employeeQuota: 150,
      addressLine1: 'No. 10, Jalan 2/149B,',
      addressLine2: 'Taman Sri Endah,',
      addressState: 'Kuala Lumpur',
      addressCity: 'Sri Petaling',
      addressZip: '57000',
      addressCountry: 'Malaysia',
      repeatEvery: '1 month(s)',
      billingCycle: 9,
      salesPerson: 'Lee Siew May',
      subscription: 'SUB-00012',
      creationDate: '30 Dec 2018',
      activationDate: '30 Dec 2018',
      expiryDate: '30 Dec 2020',
      lastBillingOn: '30 Aug 2019',
      nextBillingOn: '30 Sept 2019',
      childrenCompany: [
        {
          childCpnyName: 'Child Company l 1 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-09, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 50
        },
        {
          childCpnyName: 'Child Company l 2 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-08, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 10
        },
        {
          childCpnyName: 'Child Company l 3 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-07, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 13
        },
      ]
    }
  ];

  public appPages = [
    {
      title: 'Home',
      url: '/main/dashboard',
      icon: 'icon_home.svg'
    },
    {
      title: 'Dashboard',
      url: '/main/dashboard',
      icon: 'icon_dashboard.svg'
    },
    {
      title: 'Customers',
      url: '/main/customers',
      icon: 'icon_customers.svg'
    },
    {
      title: 'Subscriptions',
      url: '/main/subscriptions',
      icon: 'icon_products.svg'
    },
    {
      title: 'Support',
      url: '/main/support',
      icon: 'icon_chat-room.svg'
    },
    {
      title: 'Settings',
      url: '/main/settings',
      icon: 'icon_setting.svg'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    customersDummiesData = this.customerSample;
    salesmanDummiesData = this.salepersonData;
    userDummiesData = this.userDetails;
  }
}
