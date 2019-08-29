import { Component, OnInit } from '@angular/core';
import { customerUpdateInfo } from './../customer-details.page';
@Component({
  selector: 'app-customer-history',
  templateUrl: './customer-history.component.html',
  styleUrls: ['./customer-history.component.scss'],
})
export class CustomerHistoryComponent implements OnInit {

  constructor() { }

  public customerData;

  ngOnInit() {
    console.log('customerUpdateInfo');
    console.log(customerUpdateInfo);
    this.customerData = customerUpdateInfo.history;
  }

}
