import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CustomerPopoverComponent } from './customer-popover/customer-popover.component';

export let customerInfo: any = {};
export let customerDummyData: any = [];

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  constructor(
    public popoverController: PopoverController
  ) { }

  public customerData = [
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
      repeatEvery: '1 month',
      salesPerson: 'Alia',
      activationDate: '20 Jan 2019',
      lastBillingOn: '20 Jun 2019',
      nextBillingOn: '20 Jul 2019',
      childrenCompany: [
        {
          childCpnyName: 'Child Company 1 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-09, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 11
        },
        {
          childCpnyName: 'Child Company 2 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-08, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 11
        },
        {
          childCpnyName: 'Child Company 3 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-08, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 11
        },
        {
          childCpnyName: 'Child Company 4 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-08, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 11
        },
        {
          childCpnyName: 'Child Company 5 Sdn. Bhd.',
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
      repeatEvery: '1 month',
      salesPerson: 'Lee Siew May',
      activationDate: '6 Jan 2018',
      lastBillingOn: '6 Jun 2019',
      nextBillingOn: '6 Jul 2019',
      childrenCompany: [
        {
          childCpnyName: 'Child Company 1 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-09, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 13
        },
        {
          childCpnyName: 'Child Company 2 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-08, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 20
        },
        {
          childCpnyName: 'Child Company 3 Sdn. Bhd.',
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
      repeatEvery: '1 month',
      salesPerson: 'Lee Siew May',
      activationDate: '3 June 2019',
      lastBillingOn: '-',
      nextBillingOn: '3 Aug 2019',
      childrenCompany: [
        {
          childCpnyName: 'Child Company 1 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-09, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 2
        },
        {
          childCpnyName: 'Child Company 3 Sdn. Bhd.',
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
      repeatEvery: '1 month',
      salesPerson: 'Alia',
      activationDate: '4 Jan 2019',
      lastBillingOn: '4 Jul 2019',
      nextBillingOn: '4 Aug 2019',
      childrenCompany: [
        {
          childCpnyName: 'Child Company 1 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-09, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 50
        },
        {
          childCpnyName: 'Child Company 3 Sdn. Bhd.',
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
      repeatEvery: '1 month',
      salesPerson: 'Tarmizi',
      activationDate: '1 Jan 2019',
      lastBillingOn: '-',
      nextBillingOn: '1 Sep 2019',
      childrenCompany: [
        {
          childCpnyName: 'Child Company 1 Sdn. Bhd.',
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
      repeatEvery: '1 month',
      salesPerson: 'Alia',
      activationDate: '30 Jan 2019',
      lastBillingOn: '30 Jul 2019',
      nextBillingOn: '30 Aug 2019',
      childrenCompany: [
        {
          childCpnyName: 'Child Company 1 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-09, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 5
        },
        {
          childCpnyName: 'Child Company 2 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-08, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 5
        },
        {
          childCpnyName: 'Child Company 3 Sdn. Bhd.',
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
      repeatEvery: '1 month',
      salesPerson: 'Tarmizi',
      activationDate: '24 Jul 2018',
      lastBillingOn: '24 Jun 2019',
      nextBillingOn: '24 Jul 2019',
      childrenCompany: [
        {
          childCpnyName: 'Child Company 1 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-09, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 5
        },
        {
          childCpnyName: 'Child Company 2 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-08, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 5
        },
        {
          childCpnyName: 'Child Company 3 Sdn. Bhd.',
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
      repeatEvery: '1 month',
      salesPerson: 'Lee Siew May',
      activationDate: '30 Dec 2018',
      lastBillingOn: '30 Apr 2019',
      nextBillingOn: '30 Jul 2019',
      childrenCompany: [
        {
          childCpnyName: 'Child Company 1 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-09, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 26
        },
        {
          childCpnyName: 'Child Company 2 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-08, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 40
        },
        {
          childCpnyName: 'Child Company 3 Sdn. Bhd.',
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
      repeatEvery: '1 month',
      salesPerson: 'Alia',
      activationDate: '19 Feb 2019',
      lastBillingOn: '19 Aug 2019',
      nextBillingOn: '19 Sept 2019',
      childrenCompany: [
        {
          childCpnyName: 'Child Company 1 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-09, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 20
        },
        {
          childCpnyName: 'Child Company 2 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-08, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 22
        },
        {
          childCpnyName: 'Child Company 3 Sdn. Bhd.',
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
      repeatEvery: '1 month',
      salesPerson: 'Alia',
      activationDate: '19 May 2019',
      lastBillingOn: '19 Aug 2019',
      nextBillingOn: '19 Sept 2019',
      childrenCompany: [
        {
          childCpnyName: 'Child Company 1 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-09, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 12
        },
        {
          childCpnyName: 'Child Company 2 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-08, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 5
        },
        {
          childCpnyName: 'Child Company 3 Sdn. Bhd.',
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
      repeatEvery: '1 month',
      salesPerson: 'Alia',
      activationDate: '19 Feb 2019',
      lastBillingOn: '19 Aug 2019',
      nextBillingOn: '19 Sept 2019',
      childrenCompany: [
        {
          childCpnyName: 'Child Company 1 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-09, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 100
        },
        {
          childCpnyName: 'Child Company 2 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-08, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 5
        },
        {
          childCpnyName: 'Child Company 3 Sdn. Bhd.',
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
      repeatEvery: '1 month',
      salesPerson: 'Lee Siew May',
      activationDate: '30 Dec 2018',
      lastBillingOn: '30 Aug 2019',
      nextBillingOn: '30 Sept 2019',
      childrenCompany: [
        {
          childCpnyName: 'Child Company 1 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-09, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 50
        },
        {
          childCpnyName: 'Child Company 2 Sdn. Bhd.',
          childCpnyAddrL1: 'C-15-08, KL Gateway Residence 2',
          childCpnyAddrL2: 'Jalan Kerinchi',
          childCpnyAddrCity: 'Pantai Dalam',
          childCpnyAddrZip: '59200',
          childCpnyAddrState: 'Kuala Lumpur',
          childCpnyAddrCountry: 'Malaysia',
          childCpnyEmployeeNo: 10
        },
        {
          childCpnyName: 'Child Company 3 Sdn. Bhd.',
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

  ngOnInit() {
  }

  async ngOnClickPophoverButton(evt: any) {
    console.log('popphowver');
    console.log(evt);
    // $scope.popover.show($event);

    const popover = await this.popoverController.create({
      component: CustomerPopoverComponent,
      componentProps: {
        viewType: this
      },
      event: evt,
    });
    return await popover.present();

    // await popover.dismiss(data => {
    //   console.log('popover dismissed');
    //   console.log(data);
    // });
  }

  onClickCustomerViewDetails(item) {
    customerInfo = item;
    customerDummyData = this.customerData;
  }
}
