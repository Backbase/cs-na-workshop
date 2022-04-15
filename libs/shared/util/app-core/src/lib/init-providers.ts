import { APP_INITIALIZER, Provider } from '@angular/core';
import { PageTitleService } from './page-title.service';

function initializeApp(pageTitleService: PageTitleService) {
  return function (): Promise<any> {
    return new Promise((resolve) => {
      pageTitleService.run();
      resolve(true);
    });
  };
}

export type InitOptions = 'pageTitles';

export const initProviders: Record<InitOptions, Provider> = {
  pageTitles: {
    provide: APP_INITIALIZER,
    useFactory: initializeApp,
    deps: [PageTitleService],
    multi: true,
  },
};
