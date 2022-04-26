import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  LoadButtonModule,
} from '@backbase/ui-ang';
import { MarketingUiModule } from '@backbase/marketing/ui';

import { UserFormViewComponent } from './views/user-form-view/user-form-view.component';
import { LifeGoalsViewComponent } from './views/life-goals-view/life-goals-view.component';
import { PromotionsViewComponent } from './views/promotions-view/promotions-view.component';
import { InputAuthorizedUsersComponent } from './components/input-authorized-users/input-authorized-users.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PromotionsEffects } from './+state/promotion/promotion.effects';

import * as fromForm from './+state/form/form.reducer';
import { FormEffects } from './+state/form/form.effects';

const routes = [
  { path: '', redirectTo: 'info', pathMatch: 'full' },
  {
    path: 'info',
    component: UserFormViewComponent,
  },
  {
    path: 'promo',
    component: PromotionsViewComponent,
  },
];

const uiModules = [ButtonModule, HeaderModule, PaymentCardModule, MarketingUiModule];

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
    EffectsModule.forFeature([PromotionsEffects]),
    StoreModule.forFeature(fromForm.FORM_FEATURE_KEY, fromForm.reducer),
    EffectsModule.forFeature([FormEffects]),
    ...uiModules,
  ],
  declarations: [
    UserFormViewComponent,
    LifeGoalsViewComponent,
    PromotionsViewComponent,
    InputAuthorizedUsersComponent,
  ],
})
export class MarketingJourneyModule {}
