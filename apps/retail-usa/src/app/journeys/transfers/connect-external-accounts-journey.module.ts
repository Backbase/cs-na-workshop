import { NgModule } from '@angular/core';
import {
  ConnectExternalAccontsCommunicationService,
  ConnectExternalAccountsJourneyModule,
} from '@backbase/connect-external-accounts-journey-ang';
import { PaymentsCommunicationService } from '@backbase/retail/feature/communication';

@NgModule({
  imports: [ConnectExternalAccountsJourneyModule.forRoot()],
  providers: [
    {
      provide: ConnectExternalAccontsCommunicationService,
      useExisting: PaymentsCommunicationService,
    },
  ],
})
export class ConnectExternalAccountsJourneyBundleModule {}
