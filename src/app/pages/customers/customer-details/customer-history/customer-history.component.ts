import { Component, OnInit } from '@angular/core';

import { APIService } from '../../../../services/shared-service/api.service';
import { GlobalFunctionService } from '../../../../services/global-function.service';

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
   * @param {APIService} custHistAPISvs This property is to get methods from APIService
   * @memberof CustomerHistoryComponent
   */
  constructor(
    private custHistAPISvs: APIService,
  ) { }

  /**
   * This property is to bind customer historical data
   * @memberof CustomerHistoryComponent
   */
  public customerData;

  /**
   * This property is to bind the length of customer historical data
   * @memberof CustomerHistoryComponent
   */
  public customerDataLength;

  /**
   * This method is to set initial value of the properties.
   * And it will be executed when this page is loaded
   * @memberof CustomerHistoryComponent
   */
  ngOnInit() {
    this.getCustHistoryList();
  }

  /**
   * This method is to send request to API to get customer historical data then show it 
   * @memberof CustomerHistoryComponent
   */
  getCustHistoryList() {
    this.custHistAPISvs.reqGetApi('/api/admin/activity-log/' + customerUpdateInfo.SUBSCRIPTION_GUID).subscribe(
      dataCustHist => {
        // this.customerData = dataCustHist.sort((a, b) => (a.CREATION_TS > b.CREATION_TS) ? 1 : ((b.CREATION_TS > a.CREATION_TS) ? -1 : 0));
        this.customerData = new GlobalFunctionService().sortArrAsc(dataCustHist, 'desc');
        this.customerDataLength = dataCustHist.length;
        dataCustHist.map(this.convertCustHistDataFormat);

      });
  }

  /**
   * This method is to process CREATION_TS of historical data datetime format to formatted historical format (DD-MM-YYYY HH:mm)
   * @param {*} obj This property is to pass object that contain historical data
   * @returns
   * @memberof CustomerHistoryComponent
   */
  convertCustHistDataFormat(obj) {
    return new GlobalFunctionService().appendArrayChangedDateFormat(obj);
  }
}
