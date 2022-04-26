import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { fetch } from '@nrwl/angular';
import * as PromotionActions from './promotion.actions';
import * as AppActions from 'apps/retail-usa/src/app/+state/app.actions';
import { PromotionsHttpService } from '@backbase/retail/util/promotions';

@Injectable()
export class PromotionsEffects {
  loadPromotions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PromotionActions.loadAllPromotions),
      fetch({
        run: (action) => {
          return this.promotionsHttpService
            .submitPromotionForm({ submitPromotionForm: action.user as any })
            .pipe(map((promotions) => AppActions.loadPromotionsSuccess({ promotions })));
        },
        onError: (action, error) => {
          console.error('Error', error);
          return AppActions.loadPromotionsFailure({ error });
        },
      }),
    ),
  );

  constructor(private readonly actions$: Actions, private readonly promotionsHttpService: PromotionsHttpService) {}
}
