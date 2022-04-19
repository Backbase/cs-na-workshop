import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as UserActions from './user.actions';
import * as UserFeature from './user.reducer';

@Injectable()
export class UserEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return UserActions.loadUserSuccess({ user: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return UserActions.loadUserFailure({ error });
        },
      }),
    ),
  );

  constructor(private readonly actions$: Actions) {}
}
