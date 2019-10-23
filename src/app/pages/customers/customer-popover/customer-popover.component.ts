import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { selCustView } from '../customers.page';

import { PaginationServiceService } from '../../../services/pagination-service.service';

/**
 * This component is to set up the Customer popovers
 * @export
 * @class CustomerPopoverComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-customer-popover',
  templateUrl: './customer-popover.component.html',
  styleUrls: ['./customer-popover.component.scss'],
})

export class CustomerPopoverComponent implements OnInit {

  /**
   *Creates an instance of CustomerPopoverComponent.
   * @param {PopoverController} popoverController
   * @memberof CustomerPopoverComponent
   */
  constructor(
    private popoverController: PopoverController,
    private pggSvs: PaginationServiceService
  ) { }

  /**
   * This property is to set customer view type
   * @memberof CustomerPopoverComponent
   */
  public popoverCustObj;

  /**
   * This method is to set inital value of properties for
   * this page. It will be executed when the page is loaded.
   * @memberof CustomerPopoverComponent
   */
  ngOnInit() {
    console.log(this.pggSvs.getCustomerViewType());
    this.popoverCustObj = { val: this.pggSvs.getCustomerViewType() };
  }

  /**
   * This method is to close this page and return to cusomer's page
   * @memberof CustomerPopoverComponent
   */
  close() {
    this.popoverController.dismiss();
  }

  /**
   * This method is to set and bind the properties for view option's
   * of Customer page
   * @memberof CustomerPopoverComponent
   */
  viewOption(evt, viewType) {
    console.log(viewType);
    this.pggSvs.setCustomerViewType(viewType);
    console.log(this.pggSvs.getCustomerViewType());
    this.popoverCustObj.val = viewType;
    this.popoverController.dismiss();
  }
}
