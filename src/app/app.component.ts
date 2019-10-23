import { Component } from '@angular/core';
import { Platform, PopoverController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { UserDropDownComponent } from './layout/user-drop-down/user-drop-down.component';

import { PaginationServiceService } from './services/pagination-service.service';
import { UserDataService } from './services/user-data.service';


/**
 * This variable is to store values of customer data
 * @memberof AppComponent
 */
export let customersDummiesData;

/**
 * This variable is to store value of salesman data
 * @memberof AppComponent
 */
export let salesmanDummiesData;

/**
 * This variable is to store value of users data
 * @memberof AppComponent
 */
export let userDummiesData;

/**
 * This variable is to store value of logged user's username
 * @memberof AppComponent
 */
export let currUser = { value: 'Chan Seng Long'};

/**
 * This variable is to store value for popup in toolbar
 * @memberof AppComponent
 */
export let toolbarPopup;

/**
 * This variable is to store get sample data from json file
 * @memberof AppComponent
 */
declare const require: any;

/**
 * This component is to set up the app root
 * @export
 * @class AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  /**
   * Creates an instance of AppComponent.
   * @param {Platform} platform
   * @param {SplashScreen} splashScreen
   * @param {StatusBar} statusBar
   * @param {PopoverController} popoverController
   * @param {PaginationServiceService} settingPage
   * @memberof AppComponent
   */
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private popoverController: PopoverController,

    /**
     * This property is to set/get methods from PaginationServiceService
     * @memberof AppComponent
     */
    public settingPage: PaginationServiceService,

    /**
     * This property is to set/get methods from UserDataService
     * @memberof AppComponent
     */
    public userDataSvs: UserDataService
  ) {
    this.initializeApp();
  }
  
  /**
   * This property is to set side menu's title, url and icon
   * @memberof AppComponent
   */
  public appPages = [
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

  /**
   * This property is to declare value for selected side bar
   * @memberof AppComponent
   */
  public selectedSidebar = 'Dashboard';

  /**
   * This property is to declare value for side menu (icon/full view)
   * @memberof AppComponent
   */
  public sideMenuStyle = 'fullMenu';

  /**
   * This property is to declare user was login or not
   * @memberof AppComponent
   */
  public loggedUser;

  public windowWidth: any = window.innerWidth;
  /**
   * This method is initialize value of properties. It will be
   * executed when this page is loaded
   * @memberof AppComponent
   */
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
    this.loggedUser = currUser;
    this.settingPage.setSideMenuType(this.sideMenuStyle);
    this.userDataSvs.setUserProfilePicture('../assets/icon/signin/zlatan');
    console.log(this.userDataSvs.getUserProfilePicture());
  }

  /**
   * This method is to set popup in app components
   * @param {*} evt
   * @param {*} compoName
   * @returns
   * @memberof AppComponent
   */
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

  /**
   * This method is to set side menu is collapsed or extended
   * @param {*} boolCollapse
   * @memberof AppComponent
   */
collapseMenu(boolCollapse) {
    this.sideMenuStyle = (boolCollapse === true) ? 'iconMenu' : 'fullMenu';
    this.settingPage.setSideMenuType(this.sideMenuStyle);
  }

  /**
   * This method is to get event when notification button is clicked
   * @param {*} event
   * @memberof AppComponent
   */
clickNotiBtn(event) {
    console.log('clickNotiBtn');
    console.log(event);
  }
}
