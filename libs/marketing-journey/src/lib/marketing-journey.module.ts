import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  NgrxPromotionsApiModule,
  NgrxPromotionsConfiguration,
  NgrxPromotionsConfigurationParameters
} from "@backbase/retail/util/promotions";

export const apiConfigFactory = function(): NgrxPromotionsConfiguration {
  const params: NgrxPromotionsConfigurationParameters = {
    // set configuration parameters here: check the NgrxPromotionsConfigurationParameters type for options
  };
  return new NgrxPromotionsConfiguration(params);
};

import {
  InputTextModule,
  DropdownSingleSelectModule,
  InputEmailModule,
  InputPhoneModule,
  AmountInputModule,
  ButtonModule,
  IconModule,
  InputPasswordModule,
  InputCheckboxModule,
  HeaderModule,
  PaymentCardModule,
  LoadButtonModule
} from "@backbase/ui-ang";

import { UserFormViewComponent } from "./views/user-form-view/user-form-view.component";
import { LifeGoalsViewComponent } from "./views/life-goals-view/life-goals-view.component";
import { PromotionsViewComponent } from "./views/promotions-view/promotions-view.component";
import { InputAuthorizedUsersComponent } from "./components/input-authorized-users/input-authorized-users.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import * as fromUser from "./+state/user/user.reducers";
import * as fromPromotion from "./+state/promotion/promotion.reducers";
import { UserEffects } from "./+state/user/user.effects";
import { PromotionsEffects } from "./+state/promotion/promotion.effects";
import { MockHttpService } from "./services/mocks.service";
import { PromotionCardComponent } from "./components/promotion-card/promotion-card.component";

const routes = [
  { path: "", redirectTo: "info", pathMatch: "full" },
  {
    path: "info",
    component: UserFormViewComponent
  },
  {
    path: "promo",
    component: PromotionsViewComponent
  }
];

const uiModules = [ButtonModule, HeaderModule, PaymentCardModule];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownSingleSelectModule,
    InputEmailModule,
    InputPhoneModule,
    AmountInputModule,
    ButtonModule,
    IconModule,
    InputPasswordModule,
    InputCheckboxModule,
    LoadButtonModule,
    StoreModule.forFeature(fromUser.USER_FEATURE_KEY, fromUser.userReducer),
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forFeature(
      fromPromotion.PROMOTION_FEATURE_KEY,
      fromPromotion.promotionReducer
    ),
    EffectsModule.forFeature([PromotionsEffects]),
    NgrxPromotionsApiModule.forRoot(apiConfigFactory),
    ...uiModules
  ],
  declarations: [
    UserFormViewComponent,
    LifeGoalsViewComponent,
    PromotionsViewComponent,
    PromotionCardComponent,
    InputAuthorizedUsersComponent
  ],
  providers: [MockHttpService]
})
export class MarketingJourneyModule {}
