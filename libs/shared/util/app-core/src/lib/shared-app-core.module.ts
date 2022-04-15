import { DOCUMENT } from '@angular/common';
import { LOCALE_ID, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { ENTITLEMENTS_CONFIG, EntitlementsModule } from '@backbase/foundation-ang/entitlements';
import { PAGE_CONFIG, PUBSUB, PubSubService, SET_LOCALE } from '@backbase/foundation-ang/web-sdk';

export function concatUrl(...items: Array<string>) {
  return items
    .map((item) => (item.trim().endsWith('/') ? item.slice(0, -1) : item))
    .map((item) => (item.trim().startsWith('/') ? item.slice(1) : item))
    .filter((item) => !!item)
    .join('/');
}

export type CommonConfig = {
  production: boolean;
  apiRoot: string;
  baseHref: string;
  localize?: boolean;
  disableEntitlements?: boolean;
};

const pageConfigFactory =
  (config: CommonConfig) =>
  (locale: string = '') => ({
    linkRoot: '/',
    apiRoot: config.apiRoot,
    staticResourcesRoot: concatUrl(window.location.origin, config.baseHref, config.localize ? locale : ''),
    locale,
  });

@NgModule({
  imports: [EntitlementsModule],
  providers: [
    {
      provide: PUBSUB,
      useExisting: PubSubService,
    },
    {
      provide: SET_LOCALE,
      useFactory: (document: Document) => (value: string) => {
        document.cookie = encodeURIComponent('bb-locale') + '=' + encodeURIComponent(value) + ';';
      },
      deps: [DOCUMENT],
    },
  ],
})
export class SharedAppCoreModule {
  static forRoot(config: CommonConfig): ModuleWithProviders<SharedAppCoreModule> {
    return {
      ngModule: SharedAppCoreModule,
      providers: [
        {
          provide: ENTITLEMENTS_CONFIG,
          useValue: {
            forceResolved: !!config.disableEntitlements,
            accessControlBasePath: `${config.apiRoot}/access-control`,
          },
        },
        {
          provide: PAGE_CONFIG,
          useFactory: pageConfigFactory(config),
          deps: [[new Optional(), LOCALE_ID]],
        },
      ],
    };
  }
}
