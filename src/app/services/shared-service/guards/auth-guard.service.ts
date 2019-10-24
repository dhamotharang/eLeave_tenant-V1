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
   * Creates an instance of AuthGuardService.
   * @param {JwtHelperService} jwtHelper
   * @memberof AuthGuardService
   */
  constructor(
    public authService: AuthService,
    public authRouter: Router
  ) { }

  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.authRouter.navigate(['login']);
      return false;
    }
    return true;
  }
}
