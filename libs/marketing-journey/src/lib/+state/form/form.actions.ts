import { createAction, props } from '@ngrx/store';
import { UserProfile } from '@backbase/retail/util/promotions';

export const setFormData = createAction('[User Form] Set User Form', props<{ formData: any }>());

export const getUserProfile = createAction('[User Form] Get User Profile Data');

export const loadUserProfileSuccess = createAction(
  '[Profile/API] Load User Profile Success',
  props<{ profile: UserProfile }>(),
);

export const loadUserProfileFailure = createAction('[Profile/API] Load User Profile Failure', props<{ error: any }>());
