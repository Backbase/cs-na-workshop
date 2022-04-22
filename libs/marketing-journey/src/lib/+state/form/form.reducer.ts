import { Action, createReducer, on } from '@ngrx/store';
import * as FormActions from './form.actions';
import { UserProfile } from '@backbase/retail/util/promotions';

export const FORM_FEATURE_KEY = 'userform';

export interface State {
  formData?: UserProfile;
  profile?: any;
}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(FormActions.setFormData, (state, { formData }) => ({
    ...state,
    formData,
  })),
  on(FormActions.loadUserProfileSuccess, (state, { profile }) => ({ ...state, profile })),
);
