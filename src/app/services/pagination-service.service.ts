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
   * This method is to configure pagination settings.
   * 1. To set number of items in 1 page
   * 2. To set current showing page number
   * 3. To set total number of items (for last page setting)
   *
   * @param {*} itmPg
   * @param {*} initPg
   * @param {*} mxItm
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
   * This method is to set value either hide or show the side menu
   * @param {*} value
   * @returns
   * @memberof PaginationServiceService
   */
  setShowSideMenu(value) {
    return this.isShowingSideMenu = value;
  }


  /**
   * This method is to get side menu's value either it should hidden or shown
   * @returns
   * @memberof PaginationServiceService
   */
  getSideMenuStatus() {
    return this.isShowingSideMenu;
  }

}
