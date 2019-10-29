import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from '../auth.service';

/**
 * This service is to setup the authentication guards which checks user is
 * authenticated or not
 * @export
 * @class AuthGuardService
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  /**
   *Creates an instance of AuthGuardService.
   * @param {AuthService} authService This property is to bind methods from AuthService
   * @param {Router} authRouter This property is to bind methods from Router
   * @memberof AuthGuardService
   */
  constructor(
    public authService: AuthService,
    public authRouter: Router
  ) { }

  /**
   * This method is to check if the login page is authenticated then
   * only it can redirect to home page
   * @returns {boolean}
   * @memberof AuthGuardService
   */
  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.authRouter.navigate(['login']);
      return false;
    }
    return true;
  }
}
