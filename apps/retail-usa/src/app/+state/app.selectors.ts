import { Promotion } from '@backbase/retail/util/promotions';
import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectUserPromotions = (state: AppState) => state.promotions;

export const userPromotionsSelect = createSelector(selectUserPromotions, (promotions: Promotion[]) => promotions);
