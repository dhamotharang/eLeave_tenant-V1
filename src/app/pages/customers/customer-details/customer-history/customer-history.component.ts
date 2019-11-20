import { Observable } from '../../../../../../node_modules/rxjs';

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
   * @memberof CustomerHistoryComponent
   */
  constructor(
    private custHistAPISvs: APIService,
  ) { }

  /**
   * This property is to bind customer data's history
   * @memberof CustomerHistoryComponent
   */
  public customerData;

  public customerDataLength;

  /**
   * This method is to set initial value of the properties.
   * And it will be executed when this page is loaded
   * @memberof CustomerHistoryComponent
   */
  ngOnInit() {
    console.log('customerUpdateInfo: ' + JSON.stringify(customerUpdateInfo, null, " "));
    // this.customerData = customerUpdateInfo.history;
    this.getCustHistoryList();
  }

  getCustHistoryList() {
    this.reqAPICustHistoryList().subscribe(
      dataCustHist => {
        // console.log('dataCustHist: ' + JSON.stringify(dataCustHist, null, " "));
        // dataCustHist = new GlobalFunctionService().appendArrayChangedDateFormat(dataCustHist);
        // console.log('dataCustHist: ' + JSON.stringify(dataCustHist, null, " "));

        this.customerData = dataCustHist.sort((a, b) => (a.CREATION_TS > b.CREATION_TS) ? 1 : ((b.CREATION_TS > a.CREATION_TS) ? -1 : 0));
        // this.subscriberHistoryData = histData.sort((a, b) => (a.CREATION_TS > b.CREATION_TS) ? 1 : ((b.CREATION_TS > a.CREATION_TS) ? -1 : 0));

        this.customerDataLength = dataCustHist.length;
        dataCustHist.map(this.convertCustHistDataFormat);
        console.log('dataCustHist: ' + JSON.stringify(dataCustHist, null, " "));

      }
    );
  }

  convertCustHistDataFormat(obj) {
    // const testDate = new GlobalFunctionService().changeDateFormatFull(obj.CREATION_TS);
    // const testTime = new GlobalFunctionService().getHoursFormatAMPM(obj.CREATION_TS);
    // return Object.assign(obj, { 'HIST_TIME': testDate + ' - ' + testTime });
    return new GlobalFunctionService().appendArrayChangedDateFormat(obj);
  }

  reqAPICustHistoryList(): Observable<any> {
    return this.custHistAPISvs.getApi('/api/admin/activity-log/' + customerUpdateInfo.SUBSCRIPTION_GUID);
  }
}
