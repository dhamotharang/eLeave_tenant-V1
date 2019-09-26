import { Injectable } from '@angular/core';

/**
 * This is a services to get page layout's settings
 *
 * @export
 * @class PaginationServiceService
 */
@Injectable({
  providedIn: 'root'
})

export class PaginationServiceService {

  config: any;
  isShowingSideMenu: boolean;

  constructor() { }


  /**
   * Pagination settings
   * To set number of items in 1 page
   * To set current showing page number
   * To set total number of items (for last page setting)
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
   * To set value either hide or show the side menu
   *
   * @param {*} value
   * @returns
   * @memberof PaginationServiceService
   */
  setShowSideMenu(value) {
    return this.isShowingSideMenu = value;
  }


  /**
   * To get side menu's value either it should hidden or shown
   *
   * @returns
   * @memberof PaginationServiceService
   */
  getSideMenuStatus() {
    return this.isShowingSideMenu;
  }

}
