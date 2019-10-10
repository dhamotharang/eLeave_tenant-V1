import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

import {UserOptions} from '../../interfaces/user-options';

import { UserDataService } from '../../services/user-data.service';
import { PaginationServiceService } from '../../services/pagination-service.service';
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
   * @param {UserDataService} userData
   * @param {Router} router
   * @param {MenuController} menuCtrl
   * @memberof LoginPage
   */
  constructor(
    private userData: UserDataService,
    private router: Router,
    private menuCtrl: MenuController,

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
      await this.userData.login(this.userLogin.username).then(() => {
        return this.router.navigate(['/main/dashboard']);
      });
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
      this.userData.setRememberMe(this.userLogin);
    } else {
      this.userData.removeRememberMe(this.userLogin);
    }
  }

}
