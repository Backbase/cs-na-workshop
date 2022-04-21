import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Promotion, ProfileHttpService } from '@backbase/user-marketing-promotions-data';
import { concatMap, map } from 'rxjs/operators';
import * as AppActions from './app.actions';

@Injectable()
export class AppEffects {
  loadUserPromotions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadUserPromotions),
      concatMap((action) => this.profileHttpService.getUserPromotions()),
      map((promotions: Promotion[]) => AppActions.userPromotionsLoaded({ promotions })),
    ),
  );

  constructor(private actions$: Actions, private profileHttpService: ProfileHttpService) {}
}