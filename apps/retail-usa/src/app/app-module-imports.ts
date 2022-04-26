/*
 *
 * The content of this file can be edited freely, but to maintain upgradability
 * this file should not be renamed and should always export an array named
 * `appModuleImports`.
 *
 */

import { RemoteConfigModule } from '@backbase/remote-config-ang';
import { AuthModule } from '@backbase/shared/feature/auth';
import { SharedAppCoreModule } from '@backbase/shared/util/app-core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { authConfig, environment } from '../environments/environment';
import { AppDataModule } from './app-data.module';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { remoteConfigDefaults } from './remote-config/remote-config';
import { RoutableModalModule } from './routable-modal/routable-modal.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppEffects } from './+state/app.effects';
import { reducers } from './+state/app.reducers';

/**
 * Modules in this array are added to the `imports` array of the AppModule
 * in app.module.ts.
 */
export const appModuleImports = [
  SharedAppCoreModule.forRoot(environment),
  AuthModule.forRoot(environment.apiRoot, authConfig),
  LayoutModule,
  AppDataModule,
  AppRoutingModule,
  StoreModule.forRoot(reducers),
  StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  EffectsModule.forRoot([AppEffects]),
  RemoteConfigModule.forRoot({
    appName: 'bb-retail-app-ang',
    appVersion: '2021.10-beta',
    defaults: remoteConfigDefaults,
    disabled: false,
    projectName: 'backbase-retail-prototypes',
    serviceRoot: '/api/remote-config',
  }),
  RoutableModalModule,
];
