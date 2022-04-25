import { createAction, props } from '@ngrx/store';
import { PromotionEntity } from './promotion.models';

export const loadAllPromotions = createAction('[Promotions Page] Load All Promotions', props<{ user: any[] }>());

export const loadPromotionsSuccess = createAction(
  '[Promotions/API] Load Promotions Success',
  props<{ promotions: PromotionEntity[] }>(),
);

export const loadPromotionsFailure = createAction('[Promotions/API] Load Promotions Failure', props<{ error: any }>());
