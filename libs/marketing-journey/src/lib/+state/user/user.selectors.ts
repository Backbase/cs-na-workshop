import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsers from './user.reducers';
import { USER_FEATURE_KEY, UserState } from './user.reducers';

// Lookup the 'User' feature state managed by NgRx
export const getUserState = createFeatureSelector<UserState>(USER_FEATURE_KEY);

export const getUser = createSelector(getUserState, fromUsers.selectUser);

export const isUserLoaded = createSelector(getUserState, (state) => state.loaded);
