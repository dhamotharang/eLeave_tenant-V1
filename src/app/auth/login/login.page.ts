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

  public userLogin: UserOptions = { username: '', password: '' };
  public submitted = false;
  public type = 'password';
  public showPass = false;

  // public formGroupValidation = new FormGroup({
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   pass: new FormControl(null, [Validators.required]),
  // });


  /**
   * Function executed when initialize login page
   *
   * @memberof LoginPage
   */
  ngOnInit() {
    // sideMenuShow.value = false;
    this.pgSet.setShowSideMenu(false);
    // console.log('logininti');
    // console.log(this.pgSet.getSideMenuStatus());

  }


  /**
   * Function executed when click login button
   *
   * @param {NgForm} loginForm
   * @memberof LoginPage
   */
  async onLogin(loginForm: NgForm) {
    this.submitted = true;
    this.pgSet.setShowSideMenu(false);

    if (loginForm.valid) {
      this.pgSet.setShowSideMenu(true);
      Object.assign(currUser, {value: this.userLogin.username});
      await this.userData.login(this.userLogin.username).then(() => {
        return this.router.navigateByUrl('/main/dashboard');
      });
      // this.router.navigateByUrl('/main/dashboard');


    }
  }


  /**
   * Function executed when user click show password
   *
   * @memberof LoginPage
   */
  showPassword() {
    this.showPass = !this.showPass;
    this.type = (this.showPass) ? this.type = 'text' : this.type = 'password';
  }

  
  /**
   * Function executed when user set to remember their username & password
   *
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
