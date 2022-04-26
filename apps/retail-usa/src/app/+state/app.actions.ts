import { createAction, props } from '@ngrx/store';
import { Promotion } from '@backbase/retail/util/promotions';

export const loadUserPromotions = createAction(
  '[Dashboard] Load User Promotions',
  props<{ promotions: Promotion[] }>(),
);

export const getUserPromotions = createAction('[Dashboard] Get User Promotions');

export const loadPromotionsSuccess = createAction(
  '[Promotions/API] Load Promotions Success',
  props<{ promotions: Promotion[] }>(),
);

export const loadPromotionsFailure = createAction('[Promotions/API] Load Promotions Failure', props<{ error: any }>());
