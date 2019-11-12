import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { APIService } from '../../../../services/shared-service/api.service'
import { InfoPopupService } from '../../../../layout/notificationPopup/info-popup.service';

import { subscriberUpdateInfo, subsDtlPopoverCtrlr } from '../subscriber-details.page';

/**
 * This component is to set up the Subscriber Edit Profile under
 * Subscriber Details page
 * @export
 * @class SubscriberEditProfileComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-subscriber-edit-profile',
  templateUrl: './subscriber-edit-profile.component.html',
  styleUrls: ['./subscriber-edit-profile.component.scss'],
})
export class SubscriberEditProfileComponent implements OnInit {

  /**
   * Creates an instance of SubscriberEditProfileComponent.
   * @param {APIService} subEdProfAPISvs This property is to get method from APIService
   * @param {InfoPopupService} subEdProfInfoPopup This property is to get method from InfoPopupService
   * @memberof SubscriberEditProfileComponent
   */
  constructor(
    private subEdProfAPISvs: APIService,
    private subEdProfInfoPopup: InfoPopupService
  ) { }

  /**
   * This property is to get current client detail's data
   * @memberof SubscriberEditProfileComponent
   */
  public selectedClientInfo = {};

  /**
   * This property is to set value of client's new details
   * @memberof SubscriberEditProfileComponent
   */
  public updateClientInfo = {};

  /**
   * This property is to get salesman list data
   * @memberof SubscriberEditProfileComponent
   */
  public salesmanLists;

  /**
   * This method is to set initial properties value. It
   * will be executed when this popup is being loaded
   * @memberof SubscriberEditProfileComponent
   */
  ngOnInit() {
    this.selectedClientInfo = subscriberUpdateInfo; 
    Object.assign(this.updateClientInfo, this.selectedClientInfo);
    this.getSalespersonList();
  }

  /**
   * This method is to set salesman list
   * @memberof SubscriberEditProfileComponent
   */
  getSalespersonList() {
    this.getSalespersonReqApi().subscribe(
      salespersonObj => {
        this.salesmanLists = salespersonObj;
      }
    );
  }

  /**
   * This method is to send request to get API
   * @returns {Observable<any>}
   * @memberof SubscriberEditProfileComponent
   */
  getSalespersonReqApi(): Observable<any> {
    return this.subEdProfAPISvs.getApi('/api/admin/user-manage/salesperson');
  }


  /**
   * This method is to bind client's new details to
   * current details then dismiss this popup
   * @memberof SubscriberEditProfileComponent
   */
  saveChanges() {
    Object.assign(this.selectedClientInfo, this.updateClientInfo);
    const reqSaveObj = {
      'fullname': this.selectedClientInfo['FULLNAME'],
      'nickname': this.selectedClientInfo['NICKNAME'],
      'email': this.selectedClientInfo['EMAIL'],
      'contactNo': this.selectedClientInfo['CONTACT_NO'],
      'companyName': this.selectedClientInfo['COMPANY_NAME'],
      'address1': this.selectedClientInfo['ADDRESS1'],
      'address2': this.selectedClientInfo['ADDRESS2'],
      'postcode': this.selectedClientInfo['POSTCODE'],
      'city': this.selectedClientInfo['CITY'],
      'state': this.selectedClientInfo['STATE'],
      'country': this.selectedClientInfo['COUNTRY'],
      'currency': this.selectedClientInfo['CURRENCY'],
      'salesperson': this.selectedClientInfo['SALESPERSON'],
      'customerGuid': this.selectedClientInfo['CUSTOMER_GUID'],
    };
    this.saveUpdate(reqSaveObj);
    this.dissmissPopup();
  }

  /**
   * This method is to dismiss this popup
   * @memberof SubscriberEditProfileComponent
   */
  async dissmissPopup() {
    return await subsDtlPopoverCtrlr.dismiss();
  }

  /**
   * This method is set subscribe of returned object from requested in 
   * reqSaveUpdateAPI
   * @param {*} obj This parameter is to pass edited customer's data 
   * @memberof SubscriberEditProfileComponent
   */
  saveUpdate(obj) {
    this.reqSaveUpdateAPI(obj).subscribe(
      retObj => {
        // console.log('saveUpdate retObj: ' + JSON.stringify(retObj, null, " "));
        this.subEdProfInfoPopup.alertPopup('You have successfully edited customer profile!', 'alert-success');
      }
    );
  }

  /**
   * This method is to send request to patch API 
   * @param {*} obj This parameter is to pass edited customer's data
   * @returns {Observable<any>}
   * @memberof SubscriberEditProfileComponent
   */
  reqSaveUpdateAPI(obj): Observable<any> {
    return this.subEdProfAPISvs.patchApi(obj, '/api/admin/customer');
  }

}
