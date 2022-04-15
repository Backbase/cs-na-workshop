import { NgModule } from '@angular/core';
import {
  ManageUpcomingAndHistoricalPaymentsCommunicationService,
  ManageUpcomingAndHistoricalPaymentsJourneyModule,
} from '@backbase/manage-upcoming-and-historical-payments-journey-ang';
import { PaymentsCommunicationService } from '@backbase/retail/feature/communication';

@NgModule({
  imports: [ManageUpcomingAndHistoricalPaymentsJourneyModule.forRoot()],
  providers: [
    {
      provide: ManageUpcomingAndHistoricalPaymentsCommunicationService,
      useExisting: PaymentsCommunicationService,
    },
  ],
})
export class ManageUpcomingAndHistoricalPaymentsJourneyBundleModule {}
