import { browser, by, element } from 'protractor';

/**
 * This class is to run End to end testing (E2E) or intergration test
 * @export
 * @class AppPage
 */
export class AppPage {
  /**
   * This method is to navigate browser to specific url
   * @param {*} destination
   * @returns
   * @memberof AppPage
   */
  navigateTo(destination) {
    return browser.get(destination);
  }

  /**
   * This method is to get title in browser
   * @returns
   * @memberof AppPage
   */
  getTitle() {
    return browser.getTitle();
  }

  /**
   * This method is to get page title
   * @returns
   * @memberof AppPage
   */
  getPageOneTitleText() {
    return element(by.tagName('app-home')).element(by.deepCss('ion-title')).getText();
  }
}
