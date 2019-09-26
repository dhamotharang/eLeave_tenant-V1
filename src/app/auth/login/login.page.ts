import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

import {UserOptions} from '../../interfaces/user-options';

import { UserDataService } from '../../services/user-data.service';
import { PaginationServiceService } from '../../services/pagination-service.service';
import {currUser} from '../../app.component';

export let sideMenuShow = {value: true};

// export let isShowSideMenu = false;
/**
 * This component is to setup a login page
 *
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
    public userData: UserDataService,
    public router: Router,
    private menuCtrl: MenuController,
    private pgSet: PaginationServiceService
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
  public showPass = false;
  public homePage = '/main/dashboard';

  /**
   * This method executed when initialize login page
   * @memberof LoginPage
   */
  ngOnInit() {
    this.pgSet.setShowSideMenu(false);

  }


  /**
   * Function executed when click login button
   * @param {NgForm} loginForm
   * @memberof LoginPage
   */
  async onLogin(loginForm: NgForm) {
    this.submitted = true;
    this.pgSet.setShowSideMenu(false);
    // console.log(loginForm.valid);

    if (loginForm.valid) {
      this.pgSet.setShowSideMenu(true);
      // console.log('1this.userLogin.username');
      // console.log(this.userLogin.username);
      Object.assign(currUser, {value: this.userLogin.username});
      await this.userData.login(this.userLogin.username).then(() => {
        // this.homePage = '/main/dashboard';
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
