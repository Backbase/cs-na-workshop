import { UserPartialState } from "@backbase/marketing-journey";
import { Promotion } from "@backbase/user-marketing-promotions-data";

export interface AppState extends UserPartialState {
    promotions: Promotion[];
} 
