import { Injectable } from '@angular/core';

/**
 * This service is to set basic global functions that probabbly will involve multiple components
 * @export
 * @class GlobalFunctionService
 */
@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionService {

  /**
   * Creates an instance of GlobalFunctionService.
   * @memberof GlobalFunctionService
   */
  constructor() { }

  /**
   * This method is to convert date time to date string format (eg: Tue Feb 10 2015)
   * @param {*} dateValue This property will pass the date value 
   * @returns
   * @memberof GlobalFunctionService
   */
  changeDateFormattoDateString(dateValue) {
    const dateVal = new Date(dateValue);
    return dateVal.toDateString();
  }

  /**
   * This method is to convert date time to DD MM YYYY format with full month name (eg: 10 January 2019)
   * @param {*} dateValue This property will pass the date value
   * @returns
   * @memberof GlobalFunctionService
   */
  changeDateFormatFull(dateValue) {
    const dateVal = new Date(dateValue);
    const monthValFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return dateVal.getDate() + ' ' + monthValFull[dateVal.getMonth()] + ' ' + dateVal.getFullYear(); 
  }

  /**
   * This method is to convert date time to DD MM YYYY format with simplified month name (eg: 10 Jan 2019)
   * @param {*} dateValue This property will pass the date value
   * @returns
   * @memberof GlobalFunctionService
   */
  changeDateFormatSimple(dateValue) {
    const dateVal = new Date(dateValue);
    const monthValSimple = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return dateVal.getDate() + ' ' + monthValSimple[dateVal.getMonth()] + ' ' + dateVal.getFullYear(); 
  }



}
