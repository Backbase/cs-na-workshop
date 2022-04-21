import { USER_FEATURE_KEY } from '@backbase/marketing-journey';
import { Promotion } from '@backbase/retail/util/promotions';
import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectUser = (state: AppState) => state[USER_FEATURE_KEY];

export const selectUserPromotions = (state: AppState) => state.promotions;

export const userPromotionsSelect = createSelector(selectUserPromotions, (promotions: Promotion[]) => promotions);
