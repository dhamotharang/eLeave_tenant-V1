import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CustomerPopoverComponent } from './customer-popover/customer-popover.component';


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
      clientName: 'Amelia Hart',
      clientEmail: 'amelia@abccompany1.com',
      companyName: 'ABC Company 1 Sdn. Bhd.',
      plan: 'Standard',
      status: 'LIVE',
      tenantNumber: 3,
      employeeNumber: 66
    },
    {
      clientName: 'Brit Robertson',
      clientEmail: 'brit@celtic.com.my',
      companyName: 'Celtic Sdn. Bhd.',
      plan: 'Standard',
      status: 'LIVE',
      tenantNumber: 5,
      employeeNumber: 43
    },
    {
      clientName: 'Maya Hopkins',
      clientEmail: 'maya@boghope.com',
      companyName: 'Bog Hope Sdn. Bhd.',
      plan: 'Standard',
      status: 'TRIAL',
      tenantNumber: 1,
      employeeNumber: 5
    },
    {
      clientName: 'James Moya',
      clientEmail: 'James@cdfcompany.com',
      companyName: 'Cdf Company Sdn. Bhd.',
      plan: 'Standard',
      status: 'LIVE',
      tenantNumber: 6,
      employeeNumber: 74
    },
    {
      clientName: 'Camella Hips',
      clientEmail: 'camella@camelloind.com',
      companyName: 'Camelloind Sdn. Bhd.',
      plan: 'Standard',
      status: 'TRIAL',
      tenantNumber: 1,
      employeeNumber: 2
    },
    {
      clientName: 'Richards Hanks',
      clientEmail: 'richards@celticcorp.com',
      companyName: 'Celtic Corp Sdn. Bhd.',
      plan: 'Standard',
      status: 'LIVE',
      tenantNumber: 2,
      employeeNumber: 22
    },
    {
      clientName: 'Park Su Jin',
      clientEmail: 'park@agoyatravel.com',
      companyName: 'Agoya Travel Sdn. Bhd.',
      plan: 'Standard',
      status: 'LIVE',
      tenantNumber: 5,
      employeeNumber: 20
    },
    {
      clientName: 'Camellia Ean',
      clientEmail: 'camellia@fintechh.com',
      companyName: 'Fintechh Sdn. Bhd.',
      plan: 'Standard',
      status: 'PAST DUE',
      tenantNumber: 30,
      employeeNumber: 86
    },
    {
      clientName: 'Simba',
      clientEmail: 'simba@dell.com',
      companyName: 'Dell Sdn. Bhd.',
      plan: 'Standard',
      status: 'LIVE',
      tenantNumber: 15,
      employeeNumber: 64
    },
    {
      clientName: 'Miya',
      clientEmail: 'miya@intel.com',
      companyName: 'Intel Sdn. Bhd.',
      plan: 'Standard',
      status: 'LIVE',
      tenantNumber: 12,
      employeeNumber: 22
    },
    {
      clientName: 'Najwa Latif',
      clientEmail: 'najwa@abcsde.com',
      companyName: 'Abcsde Sdn. Bhd.',
      plan: 'Standard',
      status: 'LIVE',
      tenantNumber: 10,
      employeeNumber: 110
    },
    {
      clientName: 'Tony Stark',
      clientEmail: 'tony@stark.com',
      companyName: 'Stark Sdn. Bhd',
      plan: 'Standard',
      status: 'LIVE',
      tenantNumber: 9,
      employeeNumber: 76
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

}
