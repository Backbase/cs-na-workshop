import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
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
} from '@backbase/ui-ang';

import { UserFormViewComponent } from './views/user-form-view/user-form-view.component';
import { LifeGoalsViewComponent } from './views/life-goals-view/life-goals-view.component';
import { PromotionsViewComponent } from './views/promotions-view/promotions-view.component';
import { InputAuthorizedUsersComponent } from './components/input-authorized-users/input-authorized-users.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUser from './+state/user.reducer';
import { UserEffects } from './+state/user.effects';

const routes = [
  { path: '', redirectTo: 'info', pathMatch: 'full' },
  {
    path: 'info',
    component: UserFormViewComponent,
  },
  {
    path: 'life-goals',
    component: LifeGoalsViewComponent,
  },
  {
    path: 'promo',
    component: PromotionsViewComponent,
  },
];
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
    StoreModule.forFeature(fromUser.USER_FEATURE_KEY, fromUser.reducer),
    EffectsModule.forFeature([UserEffects]),
  ],
  declarations: [UserFormViewComponent, LifeGoalsViewComponent, PromotionsViewComponent, InputAuthorizedUsersComponent],
})
export class MarketingJourneyModule {}
