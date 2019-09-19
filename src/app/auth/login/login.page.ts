import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import {UserOptions} from '../../interfaces/user-options';

import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public userData: UserDataService,
    public router: Router
  ) { }

  public userLogin: UserOptions = { username: '', password: '' };
  public submitted = false;
  public type = 'password';
  public showPass = false;
  // public formGroupValidation = new FormGroup({
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   pass: new FormControl(null, [Validators.required]),
  // });

  ngOnInit() {
    console.log('userLogin');
  }

  async onLogin(loginForm: NgForm) {
    console.log(loginForm);
    this.submitted = true;

    if (loginForm.valid) {
      // console.log(this.userLogin);
      await this.userData.login(this.userLogin.username);
      this.router.navigateByUrl('/main/dashboard');

    }
  }

  showPassword() {
    this.showPass = !this.showPass;
    this.type = (this.showPass) ? this.type = 'text' : this.type = 'password';
  }

  rememberMe(evt) {
    if (evt.target.checked === true) {
      this.userData.setRememberMe(this.userLogin);
    } else {
      this.userData.removeRememberMe(this.userLogin);
    }
  }

}
