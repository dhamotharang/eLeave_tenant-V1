import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs';
import {customersDummiesData} from '../../../app.component';



@Component({
  selector: 'app-subscriber-details',
  templateUrl: './subscriber-details.page.html',
  styleUrls: ['./subscriber-details.page.scss'],
})

export class SubscriberDetailsPage implements OnInit {

  constructor() { }
  
  public subscribersDetails = customersDummiesData;
  public isShowingPicker = true;
  public subscriberOverviewParentCompany = this.subscribersDetails[0].companyName;
  public subscriberOverviewAdminName = this.subscribersDetails[0].clientName;
  public subscriberOverviewAdminEmail = this.subscribersDetails[0].clientEmail;
  public subscriberOverciewAddressLine1 = this.subscribersDetails[0].addressLine1;
  public subscriberOverciewAddressLine2 = this.subscribersDetails[0].addressLine2;
  public  subscriberOverciewAddressState = this.subscribersDetails[0].addressState;
  public subscriberOverciewAddressZip = this.subscribersDetails[0].addressZip;
  public subscriberOverciewAddressCountry = this.subscribersDetails[0].addressCountry;
  public subscriberOvercieRepeatEvery = this.subscribersDetails[0].repeatEvery;
  public subscriberOverciewSalesPerson = this.subscribersDetails[0].salesPerson;
  public subscriberOverciewActivationDate = this.subscribersDetails[0].activationDate;
  public subscriberDetailsLastBillingDate = this.subscribersDetails[0].lastBillingOn;
  public subscriberDetailsNextBillingDate = this.subscribersDetails[0].nextBillingOn;
  public subscriberDetailsDaysLeft = this.dateDifference(this.subscribersDetails[0].lastBillingOn,
                                        this.subscribersDetails[0].nextBillingOn);
  public subscriberDetailsStatus = this.subscribersDetails[0].status;
  public subscriberDetailsSubscriptionCode = this.subscribersDetails[0].subscription;

  ngOnInit() {
    console.log(customersDummiesData);
    // this.subscribersDetails = customersDummiesData;
  }

  dateDifference(startdt, enddt) {
    const dropdt: number = Number(new Date(enddt));
    const pickdt: number = Number(new Date(startdt));
    let daysleft: number = (dropdt - pickdt) / (24 * 3600 * 1000);
    daysleft = isNaN(daysleft) ? daysleft = 0 : daysleft ;
    return daysleft;
}


  showCalenderPicker() {
    console.log('hi: ' + this.isShowingPicker);

    if (this.isShowingPicker) {
      this.isShowingPicker = true;
    } else {
      this.isShowingPicker = false;
    }
    return this.isShowingPicker;
    // if (this.isShowingPicker) {
    //   this.isShowingPicker = true;
    // } else {
    //   this.isShowingPicker = false;
    // }
    // return this.isShowingPicker;
  }

  selectedClient(selectedSubscriberInfo) {
    console.log(selectedSubscriberInfo);
    this.subscriberOverviewParentCompany = selectedSubscriberInfo.companyName;
    this.subscriberOverviewAdminName = selectedSubscriberInfo.clientName;
    this.subscriberOverviewAdminEmail = selectedSubscriberInfo.clientEmail;
    this.subscriberOverciewAddressLine1 = selectedSubscriberInfo.addressLine1;
    this.subscriberOverciewAddressLine2 = selectedSubscriberInfo.addressLine2;
    this.subscriberOverciewAddressState = selectedSubscriberInfo.addressState;
    this.subscriberOverciewAddressZip = selectedSubscriberInfo.addressZip;
    this.subscriberOverciewAddressCountry = selectedSubscriberInfo.addressCountry;
    this.subscriberOvercieRepeatEvery = selectedSubscriberInfo.repeatEvery;
    this.subscriberOverciewSalesPerson = selectedSubscriberInfo.salesPerson;
    this.subscriberOverciewActivationDate = selectedSubscriberInfo.activationDate;
    this.subscriberDetailsLastBillingDate = selectedSubscriberInfo.lastBillingOn;
    this.subscriberDetailsNextBillingDate = selectedSubscriberInfo.nextBillingOn;
    this.subscriberDetailsDaysLeft = this.dateDifference(selectedSubscriberInfo.lastBillingOn, selectedSubscriberInfo.nextBillingOn);
    this.subscriberDetailsStatus = selectedSubscriberInfo.status;
    this.subscriberDetailsSubscriptionCode = selectedSubscriberInfo.subscription;
  }


}
