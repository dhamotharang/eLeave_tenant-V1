import { Component, OnInit } from '@angular/core';
import { subscriberUpdateInfo} from '../subscriber-details.page';

@Component({
  selector: 'app-subscriber-recent-activities',
  templateUrl: './subscriber-recent-activities.component.html',
  styleUrls: ['./subscriber-recent-activities.component.scss'],
})
export class SubscriberRecentActivitiesComponent implements OnInit {

  constructor() { }

  public subscriberData = {};

  ngOnInit() {
    this.subscriberData = subscriberUpdateInfo.history;
  }

}
