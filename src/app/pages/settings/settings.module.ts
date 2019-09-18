import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

import { IonicModule } from '@ionic/angular';

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
    RouterModule.forChild(routes)
  ],
  entryComponents: [AddNewUserComponent, EditUserComponent],
  declarations: [SettingsPage, AddNewUserComponent, EditUserComponent, UserFilterRolesPipe]
})
export class SettingsPageModule {}
