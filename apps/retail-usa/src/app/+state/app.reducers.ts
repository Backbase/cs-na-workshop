import { Promotion } from '@backbase/retail/util/promotions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { AppState } from './app.state';
import * as AppActions from './app.actions';

export const PROMOTION_FEATURE_KEY = 'promotions';

export interface PromotionState extends EntityState<Promotion> {
  loaded: boolean;
}
export const promotionAdapter: EntityAdapter<Promotion> = createEntityAdapter<Promotion>();

export const initialPromotionsState = promotionAdapter.getInitialState({
  loaded: false,
});

export const promotionReducer = createReducer(
  initialPromotionsState,

  on(AppActions.loadPromotionsSuccess, (state, actions) =>
    promotionAdapter.setAll(actions.promotions, { ...state, loaded: true }),
  ),

  on(AppActions.loadPromotionsFailure, (state, { error }) => ({ ...state, error })),

  on(AppActions.loadUserPromotions, (state, actions) =>
    promotionAdapter.setAll(actions.promotions, { ...state }),
  ),
);

export const { selectAll } = promotionAdapter.getSelectors();

export const reducers: ActionReducerMap<AppState> = {
  [PROMOTION_FEATURE_KEY]: promotionReducer,
};
