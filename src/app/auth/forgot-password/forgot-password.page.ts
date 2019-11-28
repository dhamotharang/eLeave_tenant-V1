import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { InfoPopupService } from './../../layout/notificationPopup/info-popup.service';
import { PaginationServiceService } from '../../services/pagination-service.service';
import { UserDataService } from '../../services/user-data.service';
import { APIService } from './../../services/shared-service/api.service';


/**
 * This component is for user forgot their password.
 * Once email is inserted, the notification will be send to superadmin.
 * Superadmin need to reset those user's password with their default password.
 * @export
 * @class ForgotPasswordPage
 * @implements {OnInit}
 */
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})

export class ForgotPasswordPage implements OnInit {

  /**
   * Creates an instance of ForgotPasswordPage.
   * @param {UserDataService} userData This property is to get methods from UserDataService
   * @param {Router} router This property is to get methods from Router
   * @param {PaginationServiceService} pgSetting This property is to get methods from PaginationServiceService
   * @memberof ForgotPasswordPage
   */
  constructor(
    private userData: UserDataService,
    private router: Router,
    public pgSetting: PaginationServiceService,
    private fgtPswdAPISvs: APIService,
    private fgtPswdInfoPopup: InfoPopupService
    ) { }


  /**
   * This property is to bind inserted email valie
   * @memberof ForgotPasswordPage
   */
  public userEmail;


  /**
   * This property is to set either to show side menu or hide it
   * @memberof ForgotPasswordPage
   */
  public sideMenuShow;

  public resetErrorMsg;

  /**
   * This method is to initialize forget password page
   * @memberof ForgotPasswordPage
   */
  ngOnInit() {
    this.pgSetting.setShowToolbarSideMenu(false);
    this.userEmail = '';
  }


  /**
   * This method is to set email from forgot password.
   * The returns will navigate to login page
   * @returns
   * @memberof ForgotPasswordPage
   */
  requestForgotPassword() {
    if (this.userEmail === '') {
      this.resetErrorMsg = 'Email is required';
    } else {
      this.userData.forgetPassword(this.userEmail);
      this.reqPostToApi(this.userEmail).subscribe(
        data => {
          if (data.status === 404) {
            this.resetErrorMsg = data.response.message;
          } else {
            this.resetErrorMsg = '';
            this.fgtPswdInfoPopup.alertPopup("We've sent you an email with the instructions", 'alert-success');
            // console.log('email sent to reset password');
            return this.router.navigateByUrl('/login');

          }
        }
      );
    }
  }

  reqPostToApi(emailAddr): Observable<any> {
    return this.fgtPswdAPISvs.postApiResetPassword('/api/forgot-password/' + emailAddr);
  }

}
