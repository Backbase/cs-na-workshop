import { createAction, props } from '@ngrx/store';
import { PromotionEntity } from './promotion.models';

export const loadAllPromotions = createAction('[Promotions Resolver] Load All Promotions');

export const allPromotionsLoaded = createAction(
  '[Load Promotions Effect] All Promotions Loaded',
  props<{ promotions: PromotionEntity[] }>(),
);
