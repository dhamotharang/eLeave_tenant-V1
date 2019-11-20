import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { APIService } from '../../../../services/shared-service/api.service';
import { GlobalFunctionService } from '../../../../services/global-function.service';

import { subscriberUpdateInfo} from '../subscriber-details.page';


/**
 * This component is to set up Subscriber's Recent Activities popup
 * under Subscriber Details page
 * @export
 * @class SubscriberRecentActivitiesComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-subscriber-recent-activities',
  templateUrl: './subscriber-recent-activities.component.html',
  styleUrls: ['./subscriber-recent-activities.component.scss'],
})
export class SubscriberRecentActivitiesComponent implements OnInit {

  /**
   * Creates an instance of SubscriberRecentActivitiesComponent.
   * @param {APIService} recentActAPISvs This property is to get methods from APIService
   * @memberof SubscriberRecentActivitiesComponent
   */
  constructor(
    private recentActAPISvs: APIService,
  ) { }

  /**
   * This property is to get current subscriber's data
   * @memberof SubscriberRecentActivitiesComponent
   */
  public subscriberData = {};

  /**
   * This property is to bind historical activity logs data
   * @memberof SubscriberRecentActivitiesComponent
   */
  public subscriberHistoryData;

  /**
   * This property is to bind the length of historical activity logs data
   * @memberof SubscriberRecentActivitiesComponent
   */
  public subscriberHistoryDataLength;

  /**
   * This method is to bind subscriber's historical info to subscriber's data
   * @memberof SubscriberRecentActivitiesComponent
   */
  ngOnInit() {
    this.subscriberData = subscriberUpdateInfo.history;
    this.getHistoryList();
  }

  /**
   * This method is to get history logs from API then process it
   * @memberof SubscriberRecentActivitiesComponent
   */
  getHistoryList() {
    this.sendReqToAPI().subscribe(
      histData => {
        // console.log('histData1: ' + JSON.stringify(histData, null, " "));
        // this.subscriberHistoryData = histData;
        this.subscriberHistoryData = histData.sort((a, b) => (a.CREATION_TS > b.CREATION_TS) ? 1 : ((b.CREATION_TS > a.CREATION_TS) ? -1 : 0));
        this.subscriberHistoryDataLength = histData.length;
        histData.map(this.convertDataFormat);
        // // console.log('histData2: ' + JSON.stringify(histData, null, " "));
        // console.log('hist data sort 1: ' + JSON.stringify(histData.sort(function (a, b) { return a.CREATION_TS - b.CREATION_TS }), 
        // null, " "));
        // console.log('hist data sort 2: ' + JSON.stringify(histData.sort(function (a, b) { return b.CREATION_TS - a.CREATION_TS }), 
        //   // objs.sort((a, b) => (a.CREATION_TS > b.CREATION_TS) ? 1 : ((b.CREATION_TS > a.CREATION_TS) ? -1 : 0));
        //   null, " ")); 
        // const testSort = histData.sort((a, b) => (a.CREATION_TS > b.CREATION_TS) ? 1 : ((b.CREATION_TS > a.CREATION_TS) ? -1 : 0));
        // console.log('test sort: ' + JSON.stringify(testSort, null, " "));
      }
    );
  }

  convertDataFormat(value) {
    return new GlobalFunctionService().appendArrayChangedDateFormat(value);
    // const testDate = new GlobalFunctionService().changeDateFormatFull(value.CREATION_TS);
    // const testTime = new GlobalFunctionService().getHoursFormatAMPM(value.CREATION_TS);
    // return Object.assign(value, { 'HIST_TIME': testDate + ' - ' + testTime});
  } 

  sendReqToAPI(): Observable <any> {
    return this.recentActAPISvs.getApi('/api/admin/activity-log/' + subscriberUpdateInfo.SUBSCRIPTION_GUID);
  }

}
