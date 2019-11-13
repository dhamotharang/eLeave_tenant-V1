import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { APIService } from '../../../../services/shared-service/api.service';
import { InfoPopupService } from '../../../../layout/notificationPopup/info-popup.service';

import { subscriberUpdateInfo, subsDtlPopoverCtrlr} from '../subscriber-details.page';

/**
 * This component is to set up Update User's Qouta popup under Subscriber Details
 * @export
 * @class UpdateUserNumbersComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-update-user-numbers',
  templateUrl: './update-user-numbers.component.html',
  styleUrls: ['./update-user-numbers.component.scss'],
})
export class UpdateUserNumbersComponent implements OnInit {

  /**
   * Creates an instance of UpdateUserNumbersComponent.
   * @param {APIService} updQuotaAPISvs This property is to get methods from APIService
   * @param {InfoPopupService} updQuotaInfoPopup This property is to get methods from InfoPopupService
   * @memberof UpdateUserNumbersComponent
   */
  constructor(
    private updQuotaAPISvs: APIService,
    private updQuotaInfoPopup: InfoPopupService
  ) { }

  /**
   * This property is to get current subscriber's data
   * @memberof UpdateUserNumbersComponent
   */
  public selectedSubscriberInfo;

  /**
   * This property is to set value of new susbcriber's qouta
   * @memberof UpdateUserNumbersComponent
   */
  public updateEmployeeQuota;

  /**
   * This property is to set value of current usage of subsriber qouta over total qouta
   * @memberof UpdateUserNumbersComponent
   */
  public updateClientData;

  /**
   * This method is to initiate properties values in this component. It will
   * be executed the this popup is loaded
   * @memberof UpdateUserNumbersComponent
   */
  ngOnInit() {
    this.selectedSubscriberInfo = subscriberUpdateInfo;
    this.updateClientData = {...this.selectedSubscriberInfo, progressBarValue:
      this.selectedSubscriberInfo.USED_QUOTA / this.selectedSubscriberInfo.USED_QUOTA};
    this.updateEmployeeQuota = this.selectedSubscriberInfo.QUOTA;
  }

  /**
   * This method is to bind updated data and close the popup
   * @memberof UpdateUserNumbersComponent
   */
  saveChanges() {
    this.updateClientData.progressBarValue = this.updateClientData.USED_QUOTA / this.updateClientData.QUOTA;
    Object.assign(this.selectedSubscriberInfo,  this.updateClientData);
    const reqUpdate = {
      'customerGuid': this.selectedSubscriberInfo['CUSTOMER_GUID'],
      'subscriptionPlan': this.selectedSubscriberInfo['PLAN'],
      'subscriptionStatus': this.selectedSubscriberInfo['STATUS'],
      'subscriptionQuota': this.selectedSubscriberInfo['QUOTA'],
      'usedQuota': this.selectedSubscriberInfo['USED_QUOTA'],
      'activationDate': this.selectedSubscriberInfo['ACTIVATION_DATE'],
      'lastBillingDate': this.selectedSubscriberInfo['LAST_BILLING_DATE'],
      'nextBillingDate': this.selectedSubscriberInfo['NEXT_BILLING_DATE'],
      'recurrInterval': this.selectedSubscriberInfo['RECURR_INTERVAL'],
      'recurrIntervalVal': this.selectedSubscriberInfo['RECURR_INTERVAL_VAL'],
      'billingCycle': this.selectedSubscriberInfo['BILLING_CYCLE'],
      'subscriptionGuid': this.selectedSubscriberInfo['SUBSCRIPTION_GUID'],
      'subscriptionLabel': this.selectedSubscriberInfo['SUBSCRIPTION_LABEL'],
    };

    this.updateUserQuota(reqUpdate);
    this.dissmissPopup();
  }

  /**
   * This method is to close popup
   * @returns
   * @memberof UpdateUserNumbersComponent
   */
  async dissmissPopup() {
    return await subsDtlPopoverCtrlr.dismiss();
  }

  /**
   * Thie method is to set alert popup from returned value
   * @param {*} obj This parameter is to pass object to patch data into API
   * @memberof UpdateUserNumbersComponent
   */
  updateUserQuota(obj) {
    this.patchUpdateUserQuota(obj).subscribe(
      patchRespond => {
        this.updQuotaInfoPopup.alertPopup('You have successfully update user quota!', 'alert-success');
      }
    );
  }

  /**
   * This method is to send request to patch API to update susbcriptions
   * @param {*} obj This parameter is to pass object to patch data into API
   * @returns {Observable<any>}
   * @memberof UpdateUserNumbersComponent
   */
  patchUpdateUserQuota(obj): Observable<any> {
    return this.updQuotaAPISvs.patchApi(obj,'/api/admin/subscription');
  }

}
