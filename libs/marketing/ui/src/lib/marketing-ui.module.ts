import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule, PaymentCardModule, ButtonModule } from '@backbase/ui-ang';

import { PromotionCardComponent } from './promotion-card/promotion-card.component';

@NgModule({
  imports: [CommonModule, HeaderModule, PaymentCardModule, ButtonModule],
  declarations: [PromotionCardComponent],
  exports: [PromotionCardComponent],
})
export class MarketingUiModule {}
