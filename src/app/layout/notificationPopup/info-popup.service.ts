import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

/**
 * This service is to set up the success/warning/danger 
 * alert popup
 * @export
 * @class InfoPopupService
 */
@Injectable({
  providedIn: 'root'
})
export class InfoPopupService {

  /**
   * Creates an instance of InfoPopupService.
   * @param {AlertController} alertController This property is to get methods from AlertController service
   * @memberof InfoPopupService
   */
  constructor(
    public alertController: AlertController
  ) { }

  /**
   * This method is to set alert popup service
   * @param {*} msg This parameter is to pass the popup message
   * @param {*} cssTitle This parameter is to pass css class for the popup
   * @memberof InfoPopupService
   */
  async alertPopup(msg, cssTitle) {
    const alert = await this.alertController.create({
      message: (cssTitle === 'alert-success') ? '<img src="../../../assets/icon/layout/icon_tick.svg">' + msg :
        '<img src="../../../assets/icon/layout/icon_untick.svg">' + msg,
      // message: '<img src="../../../assets/icon/layout/icon_tick.svg" style="padding-right: 15px;">' + msg,
      // message: msg,
      cssClass: cssTitle// 'alert-success' / 'alert-warning' / 'alert-danger'
    });
    
    await alert.present();
    setTimeout(() => {
      alert.dismiss();
    }, 2500);
  }
}
