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
    this.recentActAPISvs.reqGetApi('/api/admin/activity-log/' + subscriberUpdateInfo.SUBSCRIPTION_GUID).subscribe(
      histData => {
        this.subscriberHistoryData = new GlobalFunctionService().sortArrAsc(histData, 'desc');
        // this.subscriberHistoryData = histData.sort((a, b) => (a.CREATION_TS > b.CREATION_TS) ? 1 : ((b.CREATION_TS > a.CREATION_TS) ? -1 : 0));
        this.subscriberHistoryDataLength = histData.length;
        histData.map(this.convertDataFormat);
      });
  }

  /**
   * This method is to convert creation datetime format to DD-MM-YYYY HH:MM
   * @param {*} value Object to be passsed
   * @returns
   * @memberof SubscriberRecentActivitiesComponent
   */
  convertDataFormat(value) {
    return new GlobalFunctionService().appendArrayChangedDateFormat(value);
  } 
}
