import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPromotions from './app.reducers';

export const getPromotionsState = createFeatureSelector<fromPromotions.PromotionState>(
  fromPromotions.PROMOTION_FEATURE_KEY,
);

export const getUserPromotions = createSelector(getPromotionsState, fromPromotions.selectAll);

export const arePromotionsLoaded = createSelector(getPromotionsState, (state) => state.loaded);
