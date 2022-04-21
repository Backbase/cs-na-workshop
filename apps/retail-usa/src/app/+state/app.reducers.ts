
import { state } from '@angular/animations';
import { Action } from '@backbase/data-ang/payment-template';
import { Promotion } from '@backbase/user-marketing-promotions-data';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';
import { AppState } from './app.state';

export interface State extends EntityState<AppState> {
    userPromotionsLoaded: boolean
}

export const initialAppState = {
    promotions: [],
    userPromotionsLoaded: false,
};

export const appReducer = createReducer(
  initialAppState,

  on(AppActions.userPromotionsLoaded, (state, action) => Object.assign(state, {
    promotions: action.promotions,
  })),
);