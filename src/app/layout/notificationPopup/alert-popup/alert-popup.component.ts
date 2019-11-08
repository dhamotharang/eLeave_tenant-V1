import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert-popup',
  templateUrl: './alert-popup.component.html',
  styleUrls: ['./alert-popup.component.scss'],
})
export class AlertPopupComponent implements OnInit {

  constructor(
    public alertCtrlr: AlertController
  ) { }

  ngOnInit() {}


  async alertPopup(msg, cssTitle) {
    const alert = await this.alertCtrlr.create({
      // header: 'Alert',
      // subHeader: 'Subtitle',
      message: msg,
      cssClass: cssTitle// 'alert-success' / 'alert-warning' / 'alert-danger'
      // buttons: ['OK']
    });

    await alert.present();
    setTimeout(() => {
      alert.dismiss();
    }, 2500);
  }
}
