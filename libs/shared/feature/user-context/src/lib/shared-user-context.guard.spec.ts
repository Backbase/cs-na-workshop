import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { ServiceAgreementHttpService } from '@backbase/data-ang/accesscontrol';
import { of } from 'rxjs';
import { SharedUserContextGuard } from './shared-user-context.guard';

describe('UserContextGuard', () => {
  const MOCK_TARGET_URL = '/foo/bar';

  const fakeRouterStateSnapshot: RouterStateSnapshot = <never>{
    url: MOCK_TARGET_URL,
  };
  const fakeActivatedRouteSnapshot: ActivatedRouteSnapshot = <never>{};

  const cookieName = 'USER_CONTEXT';

  const mockRouter: Router = <never>{
    createUrlTree: (urlComponents: never) => {
      return { urlTreeOf: urlComponents };
    },
  };

  const mockServiceAgreementHttpService = jasmine.createSpyObj(['getServiceAgreementContext']);
  mockServiceAgreementHttpService.getServiceAgreementContext.and.returnValue(of(true));

  function createGuard(userContextCookieExists: boolean) {
    const mockCookieService = <never>{
      check: (cookie: string) => {
        if (cookie !== cookieName) {
          throw new Error(`Who cares about the ${cookie} cookie?`);
        }
        return userContextCookieExists;
      },
    };

    return new SharedUserContextGuard(
      mockCookieService,
      mockRouter,
      mockServiceAgreementHttpService as unknown as ServiceAgreementHttpService,
    );
  }

  let guard: SharedUserContextGuard;

  describe(`when a ${cookieName} cookie does not exist`, () => {
    beforeEach(() => {
      guard = createGuard(false);
    });

    it('should retain the target URL for the initial navigation', () => {
      guard.canActivate(fakeActivatedRouteSnapshot, fakeRouterStateSnapshot);
      expect(guard.getTargetUrl()).toEqual(MOCK_TARGET_URL);
    });
  });

  describe(`when a ${cookieName} cookie exists`, () => {
    beforeEach(() => {
      guard = createGuard(true);
    });

    it('should return true', () => {
      const firstResult = guard.canActivate(fakeActivatedRouteSnapshot, fakeRouterStateSnapshot);

      (<any>firstResult).subscribe(() => {
        const secondResult = guard.canActivate(fakeActivatedRouteSnapshot, fakeRouterStateSnapshot);
        expect(secondResult).toBe(true);
      });
    });
  });
});
