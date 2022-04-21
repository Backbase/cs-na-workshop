import { USER_FEATURE_KEY } from '@backbase/marketing-journey';
import { AppState } from './app.state';

 
export const selectUser = (state: AppState) => state[USER_FEATURE_KEY];
 
export const selectUserPromotions = (state: AppState) => state.promotions;
