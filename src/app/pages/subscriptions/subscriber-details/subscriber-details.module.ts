import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import {NgxPaginationModule} from 'ngx-pagination';

import { IonicModule } from '@ionic/angular';

import { SubscriberDetailsPage } from './subscriber-details.page';
import { UpdateUserNumbersComponent } from './update-user-numbers/update-user-numbers.component';
import { SubscriberRecentActivitiesComponent } from './subscriber-recent-activities/subscriber-recent-activities.component';
import { SubscriberEditProfileComponent } from './subscriber-edit-profile/subscriber-edit-profile.component';
import { ReactiveSubscriptionComponent } from './reactive-subscription/reactive-subscription.component';
import { ChangeNextBillingDateComponent } from './change-next-billing-date/change-next-billing-date.component';

const routes: Routes = [
  {
    path: '',
    component: SubscriberDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxPaginationModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
                      UpdateUserNumbersComponent,
                      SubscriberRecentActivitiesComponent,
                      SubscriberEditProfileComponent,
                      ReactiveSubscriptionComponent,
                      ChangeNextBillingDateComponent
                    ],
  declarations: [
                  SubscriberDetailsPage,
                  UpdateUserNumbersComponent,
                  SubscriberRecentActivitiesComponent,
                  SubscriberEditProfileComponent,
                  ReactiveSubscriptionComponent,
                  ChangeNextBillingDateComponent
                ]
})
export class SubscriberDetailsPageModule {}
