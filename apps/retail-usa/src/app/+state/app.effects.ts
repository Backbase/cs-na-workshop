import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Promotion, ProfileHttpService } from '@backbase/retail/util/promotions';
import { map, switchMap, take, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as AppActions from './app.actions';
import * as AppSelectors from './app.selectors';

@Injectable()
export class AppEffects {
  loadUserPromotions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.getUserPromotions),
      withLatestFrom(this.store$.select(AppSelectors.arePromotionsLoaded)),
      switchMap(([action, arePromotionsLoaded]: [any, boolean]) => {
        return arePromotionsLoaded
          ? this.store$.select(AppSelectors.getUserPromotions).pipe(take(1))
          : this.profileHttp.getUserPromotions();
      }),
      map((promotions: Promotion[]) => AppActions.loadUserPromotions({ promotions })),
    ),
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store$: Store,
    private readonly profileHttp: ProfileHttpService,
  ) {}
}
