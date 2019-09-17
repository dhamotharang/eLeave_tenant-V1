import { Component, OnInit } from '@angular/core';
import { subscriberUpdateInfo, subsDtlPopoverCtrlr} from '../subscriber-details.page';

@Component({
  selector: 'app-update-user-numbers',
  templateUrl: './update-user-numbers.component.html',
  styleUrls: ['./update-user-numbers.component.scss'],
})
export class UpdateUserNumbersComponent implements OnInit {

  public selectedSubscriberInfo;
  public updateEmployeeQuota;
  public updateClientData;
  constructor() { }

  ngOnInit() {
    this.selectedSubscriberInfo = subscriberUpdateInfo;
    // Object.assign(this.updateClientData, this.selectedSubscriberInfo);
    this.updateClientData = {...this.selectedSubscriberInfo, progressBarValue:
                      this.selectedSubscriberInfo.employeeNumber / this.selectedSubscriberInfo.employeeQuota};
    this.updateEmployeeQuota = this.selectedSubscriberInfo.employeeQuota;
  }

  saveChanges() {
    this.updateClientData.progressBarValue = this.updateClientData.employeeNumber / this.updateClientData.employeeQuota;
    Object.assign(this.selectedSubscriberInfo,  this.updateClientData);
    this.dissmissPopup();
  }

  async dissmissPopup() {
    return await subsDtlPopoverCtrlr.dismiss();
  }

}
