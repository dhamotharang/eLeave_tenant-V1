import { Component, OnInit } from '@angular/core';

/**
 * This component is for adding a new customer
 * @export
 * @class AddnewcustomerPage
 * @implements {OnInit}
 */
@Component({
  selector: 'app-addnewcustomer',
  templateUrl: './addnewcustomer.page.html',
  styleUrls: ['./addnewcustomer.page.scss'],
})
export class AddnewcustomerPage implements OnInit {


  /**
   *Creates an instance of AddnewcustomerPage.
   * @memberof AddnewcustomerPage
   */
  constructor() { }

  /**
   * This method is to set inital properties value.
   * It will be executed when add new page is being loaded
   * @memberof AddnewcustomerPage
   */
  ngOnInit() {
  }

}
