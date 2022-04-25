import { createAction, props } from '@ngrx/store';
import { Promotion } from '@backbase/retail/util/promotions';

export const loadUserPromotions = createAction('[Dashboard] Load User Promotions');

export const userPromotionsLoaded = createAction(
  '[Dashboard] User Promotions Loaded',
  props<{ promotions: Promotion[] }>(),
);
