import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HeaderModule,
  PaymentCardModule,
  ButtonModule,
  DropdownSingleSelectModule,
  InputTextModule,
} from '@backbase/ui-ang';
import { DirectivesModule } from '@backbase/shared/util/app-core';

import { PromotionCardComponent } from './promotion-card/promotion-card.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    PaymentCardModule,
    ButtonModule,
    DirectivesModule,
    DropdownSingleSelectModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  declarations: [PromotionCardComponent, AddressFormComponent],
  exports: [PromotionCardComponent, AddressFormComponent],
})
export class MarketingUiModule {}
