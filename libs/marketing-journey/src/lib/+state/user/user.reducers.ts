import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import * as UserActions from './user.actions';
import { UserEntity } from './user.models';

export const USER_FEATURE_KEY = 'user';

export interface UserState extends EntityState<UserEntity> {
  loaded: boolean; // has the User list been loaded
  error?: string | null; // last known error (if any)
}

export interface UserPartialState {
  readonly [USER_FEATURE_KEY]: UserState;
}

export const userAdapter: EntityAdapter<UserEntity> = createEntityAdapter<UserEntity>();

export const initialState: UserState = userAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

export const userReducer = createReducer(
  initialState,
  on(UserActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(UserActions.loadUserSuccess, (state, { user }) => userAdapter.setAll(user, { ...state, loaded: true })),
  on(UserActions.loadUserFailure, (state, { error }) => ({ ...state, error })),
);

export const selectUser = userAdapter.getSelectors().selectAll;
