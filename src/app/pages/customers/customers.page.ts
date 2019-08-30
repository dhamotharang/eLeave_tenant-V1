import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CustomerPopoverComponent } from './customer-popover/customer-popover.component';
import { customersDummiesData, salesmanDummiesData } from '../../app.component';

export let customerInfo: any = {};
export let customerDummyData: any = [];
export let salesPersonDummyData: any = [];

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  constructor(
    public popoverController: PopoverController
  ) { }

  public customerData = customersDummiesData;

  public salepersonData = salesmanDummiesData;

  ngOnInit() {}

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
    salesPersonDummyData =  this.salepersonData;
  }
}
