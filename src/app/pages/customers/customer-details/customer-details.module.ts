import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import {NgxPaginationModule} from 'ngx-pagination';

import { IonicModule } from '@ionic/angular';

import { CustomerDetailsPage } from './customer-details.page';
import { UpdateCustomerDetailsComponent } from './update-customer-details/update-customer-details.component';
import { CustomerHistoryComponent } from './customer-history/customer-history.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerDetailsPage
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
  entryComponents: [UpdateCustomerDetailsComponent, CustomerHistoryComponent],
  declarations: [CustomerDetailsPage, UpdateCustomerDetailsComponent, CustomerHistoryComponent]
})
export class CustomerDetailsPageModule {}
