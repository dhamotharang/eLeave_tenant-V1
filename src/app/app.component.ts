import { Component } from '@angular/core';
import { Platform, PopoverController, MenuController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserDropDownComponent } from './layout/user-drop-down/user-drop-down.component';

import { UserDataService } from './services/user-data.service';

export let customersDummiesData;
export let salesmanDummiesData;
export let userDummiesData;

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
    private menuController: MenuController
    // private userData: UserDataService
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
  // private loggedUser = this.userData.getUsername();

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    // console.log('this.loggedUser');
    // console.log(this.loggedUser);
    const json = require('./sample.json');
    // console.log('initttt');
    customersDummiesData = json.customerSample;
    salesmanDummiesData = json.salepersonList;
    userDummiesData = json.userDetails;


  }

  async openToolbarPopover(evt, compoName) {
    console.log('sdsds');
    const toolbarPopup = await this.popoverController.create({
      component:  (compoName === 'UserDropDownComponent') ? UserDropDownComponent : UserDropDownComponent,
      componentProps: {
        viewType: this
      },
      event: evt,
      // cssClass: 'pop-over-style'
    });

    return await toolbarPopup.present();
  }

  onClickSideMenu(evt) {
    console.log('intestttt');
    console.log(evt.srcElement.innerText);
    this.selectedSidebar = evt.srcElement.innerText;
    console.log(this.selectedSidebar);
  }

  collapseMenu(boolCollapse) {
    this.sideMenuStyle = (boolCollapse === true) ? 'iconMenu' : 'fullMenu';
  }
}
