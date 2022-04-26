import { createReducer, on } from '@ngrx/store';
import * as FormActions from './form.actions';
import { UserProfile } from '@backbase/retail/util/promotions';

export const FORM_FEATURE_KEY = 'userform';

export interface State {
  loaded: boolean;
  formData?: any;
  profile?: UserProfile;
}

export const initialState: State = {
  loaded: false,
};

export const reducer = createReducer(
  initialState,
  on(FormActions.setFormData, (state, { formData }) => ({
    ...state,
    formData,
  })),
  on(FormActions.loadUserProfileSuccess, (state, { profile }) => {
    return { ...state, profile, loaded: true };
  }),
  on(FormActions.loadUserProfileFailure, (state, { error }) => ({ ...state, error })),
);
