import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CustomerPopoverComponent } from './customer-popover/customer-popover.component';
import { customersDummiesData, salesmanDummiesData } from '../../app.component';

export let customerInfo: any = {};
export let customerDummyData: any = [];
export let salesPersonDummyData: any = [];
export let selCustView;


@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  constructor(
    public popoverController: PopoverController
  ) { }

  public selectedVal;
  public currentCustomer;
  public customerData = customersDummiesData;
  public salepersonData = salesmanDummiesData;

  ngOnInit() {
    selCustView = {val: 'card'};
    this.selectedVal = 'card';
  }

  async ngOnClickPophoverButton(evt: any) {
    const popover = await this.popoverController.create({
      component: CustomerPopoverComponent,
      componentProps: {
        viewType: this
      },
      event: evt,
    });

    popover.onDidDismiss().then((data) => {
      this.selectedVal = selCustView.val;
    });

    return await popover.present();
  }

  onClickCustomerViewDetails(item) {
    customerInfo = item;
    customerDummyData = this.customerData;
    salesPersonDummyData =  this.salepersonData;
  }
}
