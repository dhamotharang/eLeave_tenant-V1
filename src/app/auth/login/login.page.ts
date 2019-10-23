import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';

import {UserOptions} from '../../interfaces/user-options';

import { PaginationServiceService } from '../../services/pagination-service.service';
import { AuthService } from '../../services/shared-service/auth.service';
import { APIService } from '../../services/shared-service/api.service';
import {currUser} from '../../app.component';

/**
 * This variable is to store data of side menu either to show or hide it
 * @export
 * @class LoginPage
 */
export let sideMenuShow = {value: true};

/**
 * This component is to setup a login page
 * @export
 * @class LoginPage
 * @implements {OnInit}
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  /**
   *Creates an instance of LoginPage.
   * @param {Router} router
   * @param {NgxSpinnerService} spinner
   * @param {AuthService} authService
   * @param {PaginationServiceService} pgSet
   * @memberof LoginPage
   */
  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private api: APIService,

    /**
     * This property is to get methods from AuthService
     * @memberof LoginPage
     */
    public authService: AuthService,

    /**
     * This property is to get methods from PaginationServiceService
     * @memberof LoginPage
     */
    public pgSet: PaginationServiceService

  ) { }


  /**
   * This property will bind username and password value
   * @type {UserOptions}
   * @memberof LoginPage
   */
  public userLogin: UserOptions = { username: '', password: '' };

  /**
   * This property is a boolean to check if the login buttton is clicked or not
   * @memberof LoginPage
   */
  public submitted = false;

  /**
   * This property is to set text type on password input. It's either password or text
   * @memberof LoginPage
   */
  public type = 'password';

  /**
   * This property is to bind value of show password
   * @memberof LoginPage
   */
  public showPass = false;

  /**
   * This property is to set home page url link
   * @memberof LoginPage
   */
  public homePage = '/main/dashboard';

  /**
   * This method executed when initialize login page
   * @memberof LoginPage
   */
  ngOnInit() {
    this.pgSet.setShowToolbarSideMenu(false);
    if ( localStorage.getItem('username') !== null && localStorage.getItem('password') !== null) {
      this.userLogin.username = localStorage.getItem('username');
      this.userLogin.password = localStorage.getItem('password');
    }
    this.authService.logout();
  }

  /**
   * Function executed when click login button
   * @param {NgForm} loginForm
   * @memberof LoginPage
   */
  async onLogin(loginForm: NgForm) {
    this.submitted = true;
    this.pgSet.setShowToolbarSideMenu(false);

    if (loginForm.valid) {
      this.pgSet.setShowToolbarSideMenu(true);
      Object.assign(currUser, {value: this.userLogin.username});
      this.spinner.show();
      await this.authService.login(this.userLogin.username, this.userLogin.password).subscribe(
        data => {
          // console.log('subs1 data');
          console.log(data);
          this.spinner.hide();
          // this.api.getApi('/api/admin/leavetype').subscribe(
          //   datas => {
          //     console.log('apiii');
          //     console.log(datas);
          //   }
          // );
          return this.router.navigate(['/main/dashboard']);
        }
      );
    }
  }

  /**
   * Function executed when user click show password
   * @memberof LoginPage
   */
  showPassword() {
    this.showPass = !this.showPass;
    this.type = (this.showPass) ? this.type = 'text' : this.type = 'password';
  }

  /**
   * Function executed when user set to remember their username & password
   * @param {*} evt
   * @memberof LoginPage
   */
  rememberMe(evt) {
    if (evt.target.checked === true) {
      this.authService.setRememberMe(this.userLogin);
    } else {
      this.authService.removeRememberMe(this.userLogin);
    }
  }

}
