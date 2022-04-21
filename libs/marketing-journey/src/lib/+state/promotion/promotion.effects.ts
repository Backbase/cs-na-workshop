import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import * as PromotionActions from './promotion.actions';
import { MockHttpService } from '../../services/mocks.service';

@Injectable()
export class PromotionsEffects {
  loadPromotions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PromotionActions.loadAllPromotions),
      concatMap((action) => this.mockHttpService.submitPromotionForm(null)),
      map((promotions) => PromotionActions.allPromotionsLoaded({ promotions })),
    ),
  );

  constructor(private actions$: Actions, private mockHttpService: MockHttpService) {}
}
