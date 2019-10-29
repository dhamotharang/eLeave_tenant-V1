import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

// import { UserDataService } from '../../services/user-data.service';
import { PaginationServiceService } from '../../services/pagination-service.service';
import { AuthService } from '../../services/shared-service/auth.service';

import { toolbarPopup } from '../../app.component';
import { ChangeProfilePhotoComponent } from './change-profile-photo/change-profile-photo.component';

/**
 * Component for User drop down menu in toolbar
 * This component is to show user status and logout button
 * @export
 * @class UserDropDownComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-user-drop-down',
  templateUrl: './user-drop-down.component.html',
  styleUrls: ['./user-drop-down.component.scss'],
})

export class UserDropDownComponent implements OnInit {

  /**
   *Creates an instance of UserDropDownComponent.
   * @param {PaginationServiceService} pggSvs This property is to get methods from PaginationServiceService
   * @param {PopoverController} popovrController This property is to get methods from PopoverController
   * @param {AuthService} auth This property is to get methods from AuthService
   * @memberof UserDropDownComponent
   */
  constructor(
    // private userDataSvs: UserDataService,
    private pggSvs: PaginationServiceService,
    private popovrController: PopoverController,
    private auth: AuthService
  ) { }

  /**
   * This method is to set propertie's initial value
   * @memberof UserDropDownComponent
   */
  ngOnInit() { }

  /**
   * Executed when user click logut.
   * It will reset the current email in server's storage.
   * And will navigate to login page
   * @memberof UserDropDownComponent
   */
  async onClickLogout() {
    this.auth.logout();
    toolbarPopup.dismiss();
    this.pggSvs.setShowToolbarSideMenu(false);
  }

  /**
   * This method is executed when user want to change profile picture.
   * It will dismiss user's popup then will open the change profile picture popup
   * @param {*} evt
   * @returns
   * @memberof UserDropDownComponent
   */
  async onChangeProfilePhoto(evt: any) {
    toolbarPopup.dismiss();
    const popover = await this.popovrController.create({
      component: ChangeProfilePhotoComponent,
      componentProps: {
        viewType: this
      },
      event: evt,
      cssClass: 'pop-over-style'
    });

    return await popover.present();
  }
}
