import { PromotionEntity } from './promotion.models';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as PromotionActions from './promotion.actions';

export const PROMOTION_FEATURE_KEY = 'promotion';

export interface PromotionState extends EntityState<PromotionEntity> {
  allPromotionsLoaded: boolean;
}
export interface PromotionPartialState {
  readonly [PROMOTION_FEATURE_KEY]: PromotionState;
}

export const promotionAdapter: EntityAdapter<PromotionEntity> = createEntityAdapter<PromotionEntity>();

export const initialPromotionsState = promotionAdapter.getInitialState({
  allPromotionsLoaded: false,
});

export const promotionReducer = createReducer(
  initialPromotionsState,

  on(PromotionActions.loadPromotionsSuccess, (state, action) =>
    promotionAdapter.setAll(action.promotions, { ...state, allPromotionsLoaded: true }),
  ),

  on(PromotionActions.loadPromotionsFailure, (state, { error }) => ({ ...state, error })),
);

export const { selectAll } = promotionAdapter.getSelectors();
