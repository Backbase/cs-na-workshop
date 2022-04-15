import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, LOCALE_ID, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EntitlementsModule } from '@backbase/foundation-ang/entitlements';
import { LOGOUT } from '@backbase/foundation-ang/web-sdk';
import { AlertModule } from '@backbase/ui-ang/alert';
import { ButtonModule } from '@backbase/ui-ang/button';
import { HeaderModule } from '@backbase/ui-ang/header';
import { ModalModule } from '@backbase/ui-ang/modal';
import {
  AuthConfig,
  OAuthErrorEvent,
  OAuthEvent,
  OAuthModule,
  OAuthModuleConfig,
  OAuthService,
  OAuthStorage,
} from 'angular-oauth2-oidc';
import { CookieService } from 'ngx-cookie-service';
import { CustomSessionTimeoutComponent } from './custom-session-timeout/session-timeout.component';
import { StepUpAuthenticationComponent } from './step-up-authentication/step-up-authentication.component';

/**
 * This is just a temporary solution to handle logout in bb-user-context-menu-widget
 *
 * TODO: remove this func once bb-user-context-menu-widget has an update regarding logout feature
 * @param oAuthService
 */
const logoutFactoryService = (oAuthService: OAuthService) => {
  return {
    goToLoginPage: () => oAuthService.initLoginFlow(),
    logout: () => oAuthService.revokeTokenAndLogout(),
  };
};
/**
 * This is a temporary workaround for capabilities that has download functionality working only via cookies
 * TODO: remove it as soon as capabilities work with auth header
 */
const cookiePaths = [
  '/api/account-statement/client-api/v2/account/statements/download',
  '/api/transaction-manager/client-api/v2/transactions/export',
  '/api/loan/client-api/v1/loans',
];

@NgModule({
  declarations: [CustomSessionTimeoutComponent, StepUpAuthenticationComponent],
  imports: [
    CommonModule,
    FormsModule,
    EntitlementsModule,
    AlertModule,
    ButtonModule,
    HeaderModule,
    ModalModule,
    OAuthModule.forRoot(),
  ],
  exports: [CustomSessionTimeoutComponent, StepUpAuthenticationComponent],
})
export class AuthModule {
  constructor(@Optional() @SkipSelf() targetModule: AuthModule) {
    if (targetModule) {
      throw new Error(
        `${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`,
      );
    }
  }

  static forRoot(apiRoot: string, authConfig: (baseUrl: string) => AuthConfig): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        {
          provide: AuthConfig,
          useFactory: authConfig,
          deps: [[new Optional(), LOCALE_ID]],
        },
        { provide: OAuthStorage, useFactory: () => localStorage },
        {
          provide: APP_INITIALIZER,
          multi: true,
          deps: [OAuthService, CookieService],
          useFactory: (oAuthService: OAuthService, cookieService: CookieService) => () => {
            // todo: delete when files download works without cookies
            oAuthService.events.subscribe((authEvent: OAuthEvent) => {
              if (authEvent.type === 'token_received' || authEvent.type === 'token_refreshed') {
                cookiePaths.forEach((path) =>
                  cookieService.set('Authorization', oAuthService.getAccessToken(), { path }),
                );
              }
            });

            return oAuthService
              .loadDiscoveryDocumentAndLogin()
              .then(() => {
                return oAuthService.setupAutomaticSilentRefresh();
              })
              .catch((error: OAuthErrorEvent) => {
                if (error.type === 'invalid_nonce_in_state') {
                  oAuthService.initLoginFlow();
                }
              });
          },
        },
        {
          provide: OAuthModuleConfig,
          useValue: {
            resourceServer: {
              allowedUrls: [apiRoot],
              sendAccessToken: true,
            },
          },
        },
        {
          provide: LOGOUT,
          useFactory: logoutFactoryService,
          deps: [OAuthService],
        },
      ],
    };
  }
}
