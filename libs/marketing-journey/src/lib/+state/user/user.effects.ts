import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { concatMap } from 'rxjs/operators';
import { MockHttpService } from '../../services/mocks.service';

import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.init),
      concatMap((action) => this.mockHttpService.getUserProfile()),
      fetch({
        run: (user) => {
          return UserActions.loadUserSuccess({ user: [user] });
        },
        onError: (error) => {
          console.error('Error', error);
          return UserActions.loadUserFailure({ error });
        },
      }),
    ),
  );

  constructor(private readonly actions$: Actions, private mockHttpService: MockHttpService) {}
}
