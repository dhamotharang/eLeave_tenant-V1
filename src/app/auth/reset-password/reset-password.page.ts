import { Component, OnInit } from '@angular/core';

import { PaginationServiceService } from './../../services/pagination-service.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { APIService } from '../../services/shared-service/api.service';
import { InfoPopupService } from './../../layout/notificationPopup/info-popup.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private resetPswdApivs: APIService,
    public resetPswdRouter: Router,
    private resetPswdInfoPopup: InfoPopupService,
  ) { }

  public resetPswdPggSvs =  new PaginationServiceService;
  public newPassword;
  public confirmNewPassword;
  public retMsg = '';
  public retPass1 = '';
  public retPass2 = '';
  private currUserData;

  ngOnInit() {
    console.log('resetPswdRouter: ' + JSON.stringify(window.location.href));
    // http://localhost:8100/#/reset-password?id=0f69b190-0ccf-11ea-93cb-d741ec3e5f8f&loginId=lll@zen.com.my
    // http://localhost:8100/#/reset-password/0f69b190-0ccf-11ea-93cb-d741ec3e5f8f/lll@zen.com.my
    // console.log(this.route.snapshot.paramMap.get('id'));
    // console.log(this.route.snapshot.paramMap.get('email'));
    this.currUserData = {
      token: this.route.snapshot.paramMap.get('token')
      // loginId: this.route.snapshot.paramMap.get('id'),
      // email: this.route.snapshot.paramMap.get('email')
    };

    console.log('this.currUserData: ' + JSON.stringify(this.currUserData, null, " "));

  }

  saveNewPassword() {
    if (this.verifyPassword(this.newPassword, this.confirmNewPassword) === 'notnull') {
      if (this.newPassword !== this.confirmNewPassword) {
        this.retMsg = 'Password do not match';
      } else {
        this.retMsg =  '';
        this.resetPswdApivs.reqPatchApi({
          // userGuid: this.currUserData.loginId,
          tokenId: this.currUserData.token,
          password: this.newPassword
        }, '/api/forgot-password').subscribe(
          retResetPswd => {
            console.log('retResetPswd: ' + JSON.stringify(retResetPswd, null, " "));
            console.log('password is successfully updated');
            this.onSucceedUpdatePassword();
          }
        );
      }
      // this.retMsg = (this.newPassword !== this.confirmNewPassword) ? 'Password do not match' : '';

    };
    
  }

  async onSucceedUpdatePassword() {
    await this.resetPswdInfoPopup.alertPopup('Password changed', 'alert-success');
    this.resetPswdRouter.navigateByUrl('/login');

  }

  verifyPassword(pass1, pass2) {
    this.retPass1 = (pass1 === undefined || pass1 === null || pass1 === '') ? 'This field is required' : '';
    this.retPass2 = (pass2 === undefined || pass2 === null || pass2 === '') ? 'This field is required': '';

    return (this.retPass1 === '' && this.retPass2 === '') ? 'notnull' : 'null'
  }

}
