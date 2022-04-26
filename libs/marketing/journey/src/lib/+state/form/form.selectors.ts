import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FORM_FEATURE_KEY, State } from './form.reducer';

// Lookup the 'Form' feature state managed by NgRx
export const getFormState = createFeatureSelector<State>(FORM_FEATURE_KEY);

export const getFormData = createSelector(getFormState, (state: State) => state.formData);

export const getUserProfile = createSelector(getFormState, (state: State) => state.profile);

export const isUserProfileLoaded = createSelector(getFormState, (state: State) => state.loaded);
