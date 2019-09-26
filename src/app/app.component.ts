import { Component } from '@angular/core';
import { Platform, PopoverController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { UserDropDownComponent } from './layout/user-drop-down/user-drop-down.component';
import { UserMenuComponent } from './layout/user-menu/user-menu.component';

import { PaginationServiceService } from './services/pagination-service.service';
import { UserDataService } from './services/user-data.service';

export let customersDummiesData;
export let salesmanDummiesData;
export let userDummiesData;

export let currUser = { value: 'Chan Seng Long'};
export let toolbarPopup;
declare const require: any;

/**
 * App Component
 *
 * @export
 * @class AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private popoverController: PopoverController,
    public settingPage: PaginationServiceService,
    public userInfo: UserDataService
  ) {
    this.initializeApp();
  }

  public appPages = [
    // {
    //   title: 'Home',
    //   url: '/main/dashboard',
    //   icon: 'icon_home.svg'
    // },
    {
      title: 'Dashboard',
      url: '/main/dashboard',
      icon: 'icon_dashboard.svg'
    },
    {
      title: 'Customers',
      url: '/main/customers',
      icon: 'icon_customers.svg'
    },
    {
      title: 'Subscriptions',
      url: '/main/subscriptions',
      icon: 'icon_products.svg'
    },
    {
      title: 'Support',
      url: '/main/support',
      icon: 'icon_chat-room.svg'
    },
    {
      title: 'Settings',
      url: '/main/settings',
      icon: 'icon_setting.svg'
    }
  ];

  public selectedSidebar = 'Dashboard';
  public sideMenuStyle = 'fullMenu';
  public loggedUser;

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    const json = require('./sample.json');

    customersDummiesData = json.customerSample;
    salesmanDummiesData = json.salepersonList;
    userDummiesData = json.userDetails;
    this.loggedUser = 'No user';
    console.log('getLoggedUseraaa:' + this.userInfo.getUsername());
    // this.loggedUser = this.userInfo.getUsername();
    this.loggedUser = currUser;
    console.log('loggedUser:' + this.loggedUser);
  }

  async openToolbarPopover(evt, compoName) {
    toolbarPopup = await this.popoverController.create({
      component:  (compoName === 'UserDropDownComponent') ? UserDropDownComponent : UserDropDownComponent,
      componentProps: {
        viewType: this
      },
      event: evt,
      cssClass: 'pop-over-user-style'
    });

    return await toolbarPopup.present();
  }

  collapseMenu(boolCollapse) {
    this.sideMenuStyle = (boolCollapse === true) ? 'iconMenu' : 'fullMenu';
  }

  clickNotiBtn(event) {
    console.log('clickNotiBtn');
    console.log(event);
  }
}
