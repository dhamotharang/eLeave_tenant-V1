import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { selCustView, CustomersPage } from '../customers.page';


@Component({
  selector: 'app-customer-popover',
  templateUrl: './customer-popover.component.html',
  styleUrls: ['./customer-popover.component.scss'],
})

export class CustomerPopoverComponent implements OnInit {

  public popoverCustObj;
  public popoverCtrlr;

  public const2 = new CustomersPage(this.popoverCtrlr);

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
    this.popoverCustObj = selCustView;
  }

  close() {
    this.popoverController.dismiss();
  }

  doc() {
    window.open('https://ionicframework.com/docs', '_blank');
    this.popoverController.dismiss();
  }

  viewOption(evt, viewType) {
    this.popoverCustObj.val = viewType;
    this.popoverController.dismiss();
  }
}
