import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPromotions from './promotion.reducers';
import { PROMOTION_FEATURE_KEY } from './promotion.reducers';

export const getPromotionsState = createFeatureSelector<fromPromotions.PromotionState>(PROMOTION_FEATURE_KEY);

export const selectAllPromotions = createSelector(getPromotionsState, fromPromotions.selectAll);

export const arePromotionsLoaded = createSelector(getPromotionsState, (state) => state.allPromotionsLoaded);
