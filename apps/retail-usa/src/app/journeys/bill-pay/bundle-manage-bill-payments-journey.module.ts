import { NgModule } from '@angular/core';
import {
  ManageBillPaymentsCommunicationService,
  ManageBillPaymentsJourneyConfiguration,
  ManageBillPaymentsJourneyConfigurationToken,
  ManageBillPaymentsJourneyModule,
} from '@backbase/manage-bill-payments-journey-ang';
import { BillpayCommunication } from '@backbase/retail/feature/communication';

@NgModule({
  imports: [ManageBillPaymentsJourneyModule.forRoot()],
  providers: [
    {
      provide: ManageBillPaymentsJourneyConfigurationToken,
      useValue: {
        pageTitle: 'Pending Payments',
      } as ManageBillPaymentsJourneyConfiguration,
    },
    {
      provide: ManageBillPaymentsCommunicationService,
      useExisting: BillpayCommunication,
    },
  ],
})
export class ManageBillPaymentsJourneyBundleModule {}
