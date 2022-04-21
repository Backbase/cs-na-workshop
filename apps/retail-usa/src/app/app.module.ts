import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateRegistry } from '@backbase/foundation-ang/core';
import { TransactionSigningModule } from '@backbase/identity-auth/transaction-signing';
import { IdentityAuthModule } from '@backbase/identity-auth';
import { RemoteConfigService } from '@backbase/remote-config-ang';
import { AuthInterceptor } from '@backbase/shared/feature/auth';
import { environment } from '../environments/environment';
import { appModuleImports } from './app-module-imports';
import { AppComponent } from './app.component';
import { RetailAppRemoteConfig } from './remote-config/remote-config';
import { appReducer } from './+state/app.reducers';
import { AppEffects } from './+state/app.effects';

export function applicationInitializer(remoteConfig: RemoteConfigService<RetailAppRemoteConfig>) {
  return () => remoteConfig.fetchAndActivate();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientXsrfModule,
    TransactionSigningModule,
    IdentityAuthModule,
    environment.animation ? BrowserAnimationsModule : NoopAnimationsModule,
    ...appModuleImports,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: applicationInitializer,
      multi: true,
      deps: [RemoteConfigService],
    },
    TemplateRegistry,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    ...(environment.production ? [] : environment.mockProviders),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
