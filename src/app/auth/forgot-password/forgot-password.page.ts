import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PaginationServiceService } from '../../services/pagination-service.service';
import { UserDataService } from '../../services/user-data.service';


/**
 * This component is for user forgot their password
 * Once email is inserted, the notification will be send to superadmin
 * Superadmin need to reset those user's password with their default password
 *
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
   *Creates an instance of ForgotPasswordPage.
   * @param {UserDataService} userData
   * @param {Router} router
   * @param {PaginationServiceService} pgSetting
   * @memberof ForgotPasswordPage
   */
  constructor(
    private userData: UserDataService,
    public router: Router,
    private pgSetting: PaginationServiceService
    ) { }

  public userEmail;
  public sideMenuShow;


  /**
   * Initialize forget password page
   *
   * @memberof ForgotPasswordPage
   */
  ngOnInit() {
    this.pgSetting.setShowSideMenu(false);
  }


  /**
   * To set email from forgot password
   * Will return to login page
   *
   * @returns
   * @memberof ForgotPasswordPage
   */
  requestForgotPassword() {
    this.userData.forgetPassword(this.userEmail);
    return this.router.navigateByUrl('/login');
  }

}
