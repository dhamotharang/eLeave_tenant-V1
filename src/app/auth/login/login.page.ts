import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';

import {UserOptions} from '../../interfaces/user-options';

import { PaginationServiceService } from '../../services/pagination-service.service';
import { AuthService } from '../../services/shared-service/auth.service';
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
   * Creates an instance of LoginPage.
   * @param {Router} router This property is to get methods from Router
   * @param {NgxSpinnerService} spinner This property is to get methods from NgxSpinnerService
   * @param {AuthService} authService This property is to get methods from AuthService
   * @param {PaginationServiceService} pgSet This property is to get methods from PaginationServiceService
   * @memberof LoginPage
   */
  constructor(
    private router: Router,
    // private spinner: NgxSpinnerService,
    public authService: AuthService,
    public pgSet: PaginationServiceService

  ) { }

  /**
   * This property will bind email and password value
   * @type {UserOptions}
   * @memberof LoginPage
   */
  public userLogin: UserOptions = { email: '', password: '' };

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
   * This property is to bind methods from cryptoJS
   * @memberof LoginPage
   */
  crypto = require('crypto-js');
  /**
   * This method executed when initialize login page
   * @memberof LoginPage
   */
  ngOnInit() {
    this.pgSet.setShowToolbarSideMenu(false);
    if ( localStorage.getItem('email') !== null && localStorage.getItem('password') !== null) {
      this.userLogin.email = localStorage.getItem('email');
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
      Object.assign(currUser, {value: this.userLogin.email});
      await this.authService.login(this.userLogin.email, this.userLogin.password).subscribe(
        data => {
          console.log('apopooop: ' + JSON.stringify(data));
          if (data.access_token) {
          // if (data && data.access_token) {
            localStorage.setItem('access_token', JSON.stringify(data.access_token));
          }
          // return Router.prototype.navigate(['/main/dashboard']);
          return this.router.navigate(['/main/dashboard']);
        },
        error => {
          console.error('login error: ' + JSON.stringify(error, null, " "));
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
   * Function executed when user set to remember their email & password
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
