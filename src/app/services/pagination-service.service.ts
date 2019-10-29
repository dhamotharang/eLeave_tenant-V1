import { Injectable } from '@angular/core';

/**
 * This is a services to get page layout's settings
 * @export
 * @class PaginationServiceService
 */
@Injectable({
  providedIn: 'root'
})

export class PaginationServiceService {

  /**
   * Creates an instance of PaginationServiceService.
   * @memberof PaginationServiceService
   */
  constructor() { }

  /**
   * This property is for pagination's configurations
   * @type {*}
   * @memberof PaginationServiceService
   */
  config: any;


  /**
   * This property is for hide or show side menu list
   * @type {boolean}
   * @memberof PaginationServiceService
   */
  isShowingSideMenu: boolean;

  /**
   * This property is to declare type of side menu to be
   * shown (full or icon view)
   * @type {string}
   * @memberof PaginationServiceService
   */
  sideMenuType: string;

  /**
   * This property is to declare the type of view in customer page
   * (either card or table)
   * @type {string}
   * @memberof PaginationServiceService
   */
  custViewType: string;

  /**
   * This method is to configure pagination settings.
   * @param {*} itmPg To set number of items in 1 page
   * @param {*} initPg To set current showing page number
   * @param {*} mxItm To set total number of items (for last page setting)
   * @returns
   * @memberof PaginationServiceService
   */
  pageConfig(itmPg, initPg, mxItm) {
    const conf = {
      itemsPerPage: itmPg,
      currentPage: initPg,
      totalItems: mxItm
    };
    return conf;
  }


  /**
   * This method is to set value either hide or show the side menu and toolbar
   * @param {*} value
   * @returns
   * @memberof PaginationServiceService
   */
  setShowToolbarSideMenu(value) {
    return this.isShowingSideMenu = value;
  }


  /**
   * This method is to get value for hide/show side menu and toolbar
   * @returns
   * @memberof PaginationServiceService
   */
  getToolbarSideMenuStatus() {
    return this.isShowingSideMenu;
  }

  /**
   * This method is to set type of side menu to be shown. It's either
   * "fullMenu" or "iconMenu"
   * @param {*} type
   * @returns
   * @memberof PaginationServiceService
   */
  setSideMenuType(type) {
    return this.sideMenuType = type;
  }

  /**
   * This method is to get type of side menu (fullMenu/iconMenu)
   * @returns
   * @memberof PaginationServiceService
   */
  getSideMenuType() {
    return this.sideMenuType;
  }

  /**
   * This method is to set the view type to be shown in customer page.
   * It's etither "card" or "table"
   * @param {*} type
   * @returns
   * @memberof PaginationServiceService
   */
  setCustomerViewType(type) {
    return this.custViewType = type;
  }

  /**
   * This method is to get the view type to be shown in customer page.
   * It's etither "card" or "table"
   * @returns
   * @memberof PaginationServiceService
   */
  getCustomerViewType() {
    return this.custViewType;
  }
}
