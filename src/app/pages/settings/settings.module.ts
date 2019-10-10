import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import {NgxPaginationModule} from 'ngx-pagination';

import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RolesDropDownComponent } from './roles-drop-down/roles-drop-down.component';

import { SettingsPage } from './settings.page';
import { UserFilterRolesPipe } from './user-filter-roles/user-filter-roles.pipe';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
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
  entryComponents: [AddNewUserComponent, EditUserComponent, RolesDropDownComponent],
  declarations: [SettingsPage, AddNewUserComponent, EditUserComponent, UserFilterRolesPipe, RolesDropDownComponent]
})
export class SettingsPageModule {}
