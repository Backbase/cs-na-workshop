import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { ProfileHttpService } from '@backbase/retail/util/promotions';
import { map } from 'rxjs/operators';

import * as FormActions from './form.actions';
import * as FormFeature from './form.reducer';

@Injectable()
export class FormEffects {
  getUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FormActions.getUserProfile),
      fetch({
        run: (action) => {
          return this.profileHttp
            .getUserProfile()
            .pipe(map((profile) => FormActions.loadUserProfileSuccess({ profile })));
        },
        onError: (action, error) => {
          console.error('Error', error);
          return FormActions.loadUserProfileFailure({ error });
        },
      }),
    ),
  );

  constructor(private readonly actions$: Actions, private readonly profileHttp: ProfileHttpService) {}
}
