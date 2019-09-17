import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserDropDownComponent } from './layout/user-drop-down/user-drop-down.component';

export let customersDummiesData;
export let salesmanDummiesData;
export let userDummiesData;

declare const require: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages = [
    {
      title: 'Home',
      url: '/main/dashboard',
      icon: 'icon_home.svg'
    },
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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private popoverController: PopoverController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    const json = require('./sample.json');
    // console.log('initttt');
    customersDummiesData = json.customerSample;
    salesmanDummiesData = json.salepersonList;
    userDummiesData = json.userDetails;

  }

  async openToolbarPopover(evt, compoName) {
    const toolbarPopup = await this.popoverController.create({
      component:  (compoName === 'UserDropDownComponent') ? UserDropDownComponent : UserDropDownComponent,
      // componentProps: {
      //   viewType: this
      // },
      // event: evt,
      // cssClass: 'pop-over-style'
    });

    return await toolbarPopup.present();
  }

}
