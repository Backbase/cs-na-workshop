import { Inject, Injectable, InjectionToken } from '@angular/core';

export const UserContextConfigurationToken = new InjectionToken<string>('UserContextConfiguration:landingPageUrl');

@Injectable()
export class SharedUserContextService {
  constructor(@Inject(UserContextConfigurationToken) private landingPageUrl: string) {}

  public getRedirectPage(redirectProtocol: string = 'spa') {
    return `${redirectProtocol}:${this.landingPageUrl}`;
  }
}
