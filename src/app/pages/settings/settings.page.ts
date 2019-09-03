import { Component, OnInit } from '@angular/core';
import { userDummiesData } from '../../app.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor() { }

  public settingMenuList;
  public userSagment;
  public userData;

  ngOnInit() {
    this.settingMenuList = [
      {
        title: 'Users & Icon',
        url: '/userroles',
        icon: 'menu'
      }
    ];

    this.userSagment = 'users';
    this.userData = userDummiesData;
  }

}
