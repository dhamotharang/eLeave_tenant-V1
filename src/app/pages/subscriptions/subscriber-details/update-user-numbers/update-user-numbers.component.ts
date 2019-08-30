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
  public updateClientData = {};
  constructor() { }

  ngOnInit() {
    this.selectedSubscriberInfo = subscriberUpdateInfo;
    console.log(this.selectedSubscriberInfo);
    Object.assign(this.updateClientData, this.selectedSubscriberInfo);
    // console.log(this.updateClientData);
    console.log(this.updateClientData.employeeQuota);
    this.updateEmployeeQuota = this.selectedSubscriberInfo.employeeQuota;
  }

  saveChanges() {
    this.updateClientData.progressBarValue = this.updateClientData.employeeNumber / this.updateClientData.employeeQuota;
    // console.log(this.updateClientData);
    // this.selectedSubscriberInfo = this.updateClientData;
    Object.assign(this.selectedSubscriberInfo,  this.updateClientData);

    console.log(this.selectedSubscriberInfo);
    // console.log(document.getElementById('subdtlPrgssBar').e);
    // this.subscriberDetailPage.updateProgressBar(this.selectedSubscriberInfo.employeeNumber, this.selectedSubscriberInfo.employeeQuota);
    this.dissmissPopup();
  }

  async dissmissPopup() {
    return await subsDtlPopoverCtrlr.dismiss();
  }

}
