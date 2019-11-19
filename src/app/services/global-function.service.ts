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
   * @param {*} dateValue This parameter is to pass date value to be converted
   * @returns
   * @memberof GlobalFunctionService
   */
  changeDateFormattoDateString(dateValue) {
    const dateVal = new Date(dateValue);
    return dateVal.toDateString();
  }

  /**
   * This method is to convert date time to DD MM YYYY format with full month name (eg: 10 January 2019)
   * @param {*} dateValue This parameter is to pass date value to be converted
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
   * @param {*} dateValue This parameter is to pass date value to be converted
   * @returns
   * @memberof GlobalFunctionService
   */
  changeDateFormatSimple(dateValue) {
    const dateVal = new Date(dateValue);
    const monthValSimple = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return dateVal.getDate() + ' ' + monthValSimple[dateVal.getMonth()] + ' ' + dateVal.getFullYear(); 
  }

  /**
   * This method is to change date format to DD MM YY
   * @param {*} dateValue This parameter is to pass date value to be converted
   * @returns
   * @memberof GlobalFunctionService
   */
  changeDateFormatSimpleDDMMYYYY(dateValue) {
    const dateVal = new Date(dateValue);
    const ddVal = (dateVal.getDate() < 10) ? '0' + dateVal.getDate() : dateVal.getDate();
    const monthValSimple = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return ddVal + ' ' + monthValSimple[dateVal.getMonth()] + ' ' + dateVal.getFullYear();
  }

  /**
   * This method is to change date format to YYYY-MM-DD HH:mm:ss
   * @param {*} dateValue This parameter is to pass date value to be converted
   * @returns
   * @memberof GlobalFunctionService
   */
  changeDateFormatYYYYMMDD(dateValue, cond) {
    const dateVal = new Date(dateValue);
    const ddVal = (dateVal.getDate() < 10) ? '0' + dateVal.getDate() : dateVal.getDate();
    const mmVal = ((dateVal.getMonth() + 1) < 10) ? '0' + (dateVal.getMonth() + 1) : dateVal.getMonth() + 1;
    // return dateVal.getFullYear() + '-' + mmVal + '-' + dateVal.getDate() + " 00:00:00";
    return (cond === 0) ? dateVal.getFullYear() + '-' + mmVal + '-' + dateVal.getDate() + " 00:00:00" 
      : ddVal + '/' + mmVal + '/' + dateVal.getFullYear();
  }

  // changeDateFormatYYYYMMDDWoTime(dateValue) {
  //   const dateVal = new Date(dateValue); // 2019 - 12 - 02

  //   const ddVal = (dateVal.getDate() < 10) ? '0' + dateVal.getDate() : dateVal.getDate();
  //   const mmVal = ((dateVal.getMonth() + 1) < 10) ? '0' + (dateVal.getMonth() + 1) : dateVal.getMonth() + 1;
  //   return ddVal + '/' + mmVal + '/' + dateVal.getFullYear();
  // }

  getHoursFormatAMPM(dateValue) {
    const dateVal = new Date(dateValue);
    return dateVal.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  }

  appendArrayChangedDateFormat(obj) {
    return Object.assign(obj, { 
      'HIST_TIME': this.changeDateFormatYYYYMMDD(obj.CREATION_TS, 0) +
        ' - ' + this.getHoursFormatAMPM(obj.CREATION_TS) 
    });
  }
  
  /**
   * This method is to get days difference between next billing date and current date
   * @param {*} nextBillDate This parameter is a next billing date to be passed
   * @returns
   * @memberof GlobalFunctionService
   */
  dateDiff(nextBillDate) {
    const currDate = new Date().toDateString();
    let daysleft: number = (Date.parse(nextBillDate) - Date.parse(currDate)) / (24 * 3600 * 1000);
    return daysleft = (isNaN(daysleft) || (daysleft < 0)) ? daysleft = 0 : daysleft;

  }

  slideOption() {
    return {
      slidesPerView: 3,
      on: {
        beforeInit() {
          const swiper = this;

          swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
          swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

          swiper.params.watchSlidesProgress = true;
          swiper.originalParams.watchSlidesProgress = true;
        }
      }
    }
  }
}
