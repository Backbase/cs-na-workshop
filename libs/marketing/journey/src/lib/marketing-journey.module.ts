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
import { DirectivesModule } from '@backbase/shared/util/app-core';

import { UserFormViewComponent } from './views/user-form-view/user-form-view.component';
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

const uiModules = [
  InputTextModule,
  DropdownSingleSelectModule,
  InputEmailModule,
  InputPhoneModule,
  AmountInputModule,
  IconModule,
  InputPasswordModule,
  InputCheckboxModule,
  LoadButtonModule,
  ButtonModule,
  HeaderModule,
  PaymentCardModule,
  MarketingUiModule,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,

    EffectsModule.forFeature([PromotionsEffects]),
    StoreModule.forFeature(fromForm.FORM_FEATURE_KEY, fromForm.reducer),
    EffectsModule.forFeature([FormEffects]),
    ...uiModules,
    DirectivesModule,
  ],
  declarations: [UserFormViewComponent, PromotionsViewComponent, InputAuthorizedUsersComponent],
})
export class MarketingJourneyModule {}
