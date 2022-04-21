import { UserPartialState } from "@backbase/marketing-journey";
import { Promotion } from "@backbase/retail/util/promotions";

export interface AppState extends UserPartialState {
    promotions: Promotion[];
} 
