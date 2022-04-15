import { Injectable, NgZone } from '@angular/core';
import { Countdown } from '@backbase/foundation-ang/web-sdk';
import { OAuthService } from 'angular-oauth2-oidc';

/**
 * CustomSessionTimeoutService used to call logout and session services for session management.
 */
@Injectable({
  providedIn: 'root',
})
export class CustomSessionTimeoutService {
  /**
   * CustomSessionTimeoutService constructor
   * @param sessionService Auth factory used to manage session.
   * @param ngZone Service for executing work inside or outside of the Angular zone.
   * @param oAuthService angular-oauth2-oidc service.
   */
  constructor(private readonly ngZone: NgZone, private oAuthService: OAuthService) {}

  /**
   * Calls the auth logout service to log the user out.
   * @returns a promise from the logout service.
   */
  logout(): Promise<void> {
    return this.oAuthService.revokeTokenAndLogout();
  }

  /**
   * Calls the auth session service to register a countdown object for managing session.
   * @param countdown a `Countdown` object that allows a controller to register functions to auth session actions.
   */
  registerCountdown(countdown: Countdown) {
    this.ngZone.runOutsideAngular(() => {
      // TODO: Add implementation
    });
  }

  /**
   * Calls the auth session service to refresh the user's session.
   * @returns a promise from the session service.
   */
  refresh() {
    return this.ngZone.runOutsideAngular(() => {
      // TODO: Add implementation
    });
  }

  /**
   * Calls the auth logout service to send the user to the login page.
   */
  goToLoginPage() {
    this.oAuthService.initLoginFlow();
  }
}
