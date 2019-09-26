import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PaginationServiceService } from '../../services/pagination-service.service';
import { UserDataService } from '../../services/user-data.service';


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
   *Creates an instance of ForgotPasswordPage.
   * @param {UserDataService} userData
   * @param {Router} router
   * @param {PaginationServiceService} pgSetting
   * @memberof ForgotPasswordPage
   */
  constructor(
    private userData: UserDataService,
    private router: Router,
    private pgSetting: PaginationServiceService
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


  /**
   * This method is to initialize forget password page
   * @memberof ForgotPasswordPage
   */
  ngOnInit() {
    this.pgSetting.setShowSideMenu(false);
  }


  /**
   * This method is to set email from forgot password.
   * The returns will navigate to login page
   * @returns
   * @memberof ForgotPasswordPage
   */
  requestForgotPassword() {
    this.userData.forgetPassword(this.userEmail);
    return this.router.navigateByUrl('/login');
  }

}
