import { createAction, props } from '@ngrx/store';

export const loadAllPromotions = createAction('[Promotions Page] Load All Promotions', props<{ user: any[] }>());
