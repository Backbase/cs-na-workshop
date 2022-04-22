import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { ProfileHttpService } from '@backbase/retail/util/promotions';
import { map, withLatestFrom, switchMap, take } from 'rxjs/operators';

import * as FormActions from './form.actions';
import * as FormFeature from './form.reducer';
import * as FormSelectors from './form.selectors';

@Injectable()
export class FormEffects {
  getUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FormActions.getUserProfile),
      withLatestFrom(this.store$.select(FormSelectors.isUserProfileLoaded)),
      switchMap(([action, isUserProfileLoaded]: [any, boolean]) => {
        return isUserProfileLoaded
          ? this.store$.select(FormSelectors.getUserProfile).pipe(take(1))
          : this.profileHttp.getUserProfile();
      }),
      map((profile) =>
        FormActions.loadUserProfileSuccess({
          profile: {
            ...profile,
          },
        }),
      ),
    ),
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store$: Store,
    private readonly profileHttp: ProfileHttpService,
  ) {}
}
