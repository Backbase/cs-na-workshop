import { EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';
import { AppState } from './app.state';

export interface State extends EntityState<AppState> {
  userPromotionsLoaded: boolean;
}

export const initialAppState = {
  promotions: [],
  userPromotionsLoaded: false,
};

export const appReducer = createReducer(
  initialAppState,

  on(AppActions.userPromotionsLoaded, (state, action) =>
    Object.assign(state, {
      promotions: action.promotions,
    }),
  ),
);
