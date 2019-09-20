import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { selCustView } from '../customers.page';


@Component({
  selector: 'app-customer-popover',
  templateUrl: './customer-popover.component.html',
  styleUrls: ['./customer-popover.component.scss'],
})

export class CustomerPopoverComponent implements OnInit {

  public popoverCustObj;
  public popoverCtrlr;
  public custPaging;

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
    this.popoverCustObj = selCustView;
  }

  close() {
    this.popoverController.dismiss();
  }

  viewOption(evt, viewType) {
    this.popoverCustObj.val = viewType;
    this.popoverController.dismiss();
  }
}
