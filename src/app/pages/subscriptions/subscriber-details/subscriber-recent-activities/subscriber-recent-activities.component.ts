import { Component, OnInit } from '@angular/core';
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
   * @memberof SubscriberRecentActivitiesComponent
   */
  constructor() { }

  /**
   * This property is to get current subscriber's data
   * @memberof SubscriberRecentActivitiesComponent
   */
  public subscriberData = {};

  /**
   * This method is to bind subscriber's historical info to subscriber's data
   * @memberof SubscriberRecentActivitiesComponent
   */
  ngOnInit() {
    this.subscriberData = subscriberUpdateInfo.history;
  }

}
