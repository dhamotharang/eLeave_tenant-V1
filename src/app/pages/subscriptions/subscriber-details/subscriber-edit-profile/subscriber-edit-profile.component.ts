import { Component, OnInit } from '@angular/core';
import { subscriberUpdateInfo, subsDtlPopoverCtrlr } from '../subscriber-details.page';
import { salesmanDummiesData } from '../../../../app.component';
@Component({
  selector: 'app-subscriber-edit-profile',
  templateUrl: './subscriber-edit-profile.component.html',
  styleUrls: ['./subscriber-edit-profile.component.scss'],
})
export class SubscriberEditProfileComponent implements OnInit {

  constructor() { }

  public selectedClientInfo = {};
  public updateClientInfo = {};
  public salesmanLists;

  ngOnInit() {
    this.selectedClientInfo = subscriberUpdateInfo;
    Object.assign(this.updateClientInfo, this.selectedClientInfo);
    this.salesmanLists = salesmanDummiesData;
  }

  saveChanges() {
    Object.assign(this.selectedClientInfo, this.updateClientInfo);
    this.dissmissPopup();
  }

  async dissmissPopup() {
    return await subsDtlPopoverCtrlr.dismiss();
  }

}
