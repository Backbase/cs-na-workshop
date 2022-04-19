import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USER_FEATURE_KEY, State, userAdapter } from './user.reducer';

// Lookup the 'User' feature state managed by NgRx
export const getUserState = createFeatureSelector<State>(USER_FEATURE_KEY);

export const getUser = createSelector(getUserState, (state: State) => state);