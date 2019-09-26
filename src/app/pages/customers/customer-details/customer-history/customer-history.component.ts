import { Component, OnInit } from '@angular/core';
import { customerUpdateInfo } from './../customer-details.page';

/**
 * This component is to set up the Customer History pop over page
 * @export
 * @class CustomerHistoryComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-customer-history',
  templateUrl: './customer-history.component.html',
  styleUrls: ['./customer-history.component.scss'],
})
export class CustomerHistoryComponent implements OnInit {

  /**
   * Creates an instance of CustomerHistoryComponent.
   * @memberof CustomerHistoryComponent
   */
  constructor() { }

  /**
   * This property is to bind customer data's history
   * @memberof CustomerHistoryComponent
   */
  public customerData;


  /**
   * This method is to set initial value of the properties.
   * And it will be executed when this page is loaded
   * @memberof CustomerHistoryComponent
   */
  ngOnInit() {
    this.customerData = customerUpdateInfo.history;
  }

}
