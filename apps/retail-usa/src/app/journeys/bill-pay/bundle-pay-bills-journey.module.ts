import { NgModule } from '@angular/core';
import {
  PayBillsCommunicationService,
  PayBillsJourneyConfigurationToken,
  PayBillsJourneyModule,
} from '@backbase/pay-bills-journey-ang';
import { BillpayCommunication } from '@backbase/retail/feature/communication';

@NgModule({
  imports: [PayBillsJourneyModule.forRoot()],
  providers: [
    {
      provide: PayBillsJourneyConfigurationToken,
      useValue: {
        notificationDismissTime: 5000,
        paymentDetailsTitle: 'Payment Details',
        paymentDefaultCurrency: 'USD',
        multipleBillsMode: true,
        deliveryDateMessage: 'Delivered in 5 working days',
      },
    },
    {
      provide: PayBillsCommunicationService,
      useExisting: BillpayCommunication,
    },
  ],
})
export class PayBillsJourneyBundleModule {}
