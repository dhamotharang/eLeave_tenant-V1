import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { AlertController } from '@ionic/angular';


/**
 * This component is to configure the snack bar's notification
 * @export
 * @class SnackBarComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
})
export class SnackBarComponent implements OnInit {

  /**
   * Creates an instance of SnackBarComponent.
   * @param {*} data This property is to bind data of snack bar
   * @memberof SnackBarComponent
   */
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public alertCtrlr: AlertController
  ) { }

  /**
   * This method is to set initial value for property in this component
   * @memberof SnackBarComponent
   */
  ngOnInit() {}

  async infoAlertSuccess(msg) {
    const alert = await this.alertCtrlr.create({
      // header: 'Alert',
      // subHeader: 'Subtitle',
      message: msg,
      cssClass: 'alert-success'
      // buttons: ['OK']
    });

    await alert.present();
    setTimeout(() => {
      alert.dismiss();
    }, 2500);
  }

  async infoAlertWarning(msg) {
    const alert = await this.alertCtrlr.create({
      message: msg,
      cssClass: 'alert-warning'
    });

    await alert.present();
    setTimeout(() => {
      alert.dismiss();
    }, 2500);
  }

  async infoAlertDanger(msg) {
    const alert = await this.alertCtrlr.create({
      message: msg,
      cssClass: 'alert-danger'
    });

    await alert.present();
    setTimeout(() => {
      alert.dismiss();
    }, 2500);
  }
}
