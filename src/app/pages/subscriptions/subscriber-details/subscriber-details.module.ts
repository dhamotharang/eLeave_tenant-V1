import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SubscriberDetailsPage } from './subscriber-details.page';
import { UpdateUserNumbersComponent } from './update-user-numbers/update-user-numbers.component';

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
    RouterModule.forChild(routes)
  ],
  entryComponents: [UpdateUserNumbersComponent],
  declarations: [SubscriberDetailsPage, UpdateUserNumbersComponent]
})
export class SubscriberDetailsPageModule {}
