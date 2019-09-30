import { Injectable } from '@angular/core';

/**
 * This is a services for filter search keyword
 * @export
 * @class SearchDataService
 */
@Injectable({
  providedIn: 'root'
})
export class SearchDataService {

  /**
   * Creates an instance of SearchDataService.
   * @memberof SearchDataService
   */
  constructor() { }
  /**
   * This method is to get filtered data based on keyword passed
   * @param {*} searchKeyword
   * @param {*} data
   * @param {*} arg
   * @returns
   * @memberof SearchDataService
   */
  filerSearch(searchKeyword, data, arg) {
    return data.filter(itm => new RegExp(searchKeyword, 'i').test(itm[arg]));
  }
}
