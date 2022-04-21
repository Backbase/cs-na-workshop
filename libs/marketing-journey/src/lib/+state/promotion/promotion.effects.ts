import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import * as PromotionActions from './promotion.actions';
import { MockHttpService } from '../../services/mocks.service';
import { fetch } from '@nrwl/angular';

@Injectable()
export class PromotionsEffects {
  loadPromotions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PromotionActions.loadAllPromotions),
      fetch({
        run: (action) => {
          return this.mockHttpService
            .submitPromotionForm(action.user)
            .pipe(map((promotions) => PromotionActions.loadPromotionsSuccess({ promotions })));
        },
        onError: (action, error) => {
          console.error('Error', error);
          return PromotionActions.loadPromotionsFailure({ error });
        },
      }),
    ),
  );

  constructor(private actions$: Actions, private mockHttpService: MockHttpService) {}
}
