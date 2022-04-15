import { NgModule, Provider } from '@angular/core';
import {
  AccountAliasDisplayingLevel,
  AccountsCommunicationService,
  AccountsPaymentsCommunication,
  AccountsTransactionsJourneyConfiguration,
  AccountsTransactionsJourneyConfigurationToken,
  AccountsTransactionsJourneyModule,
} from '@backbase/accounts-transactions-journey-ang';
import { PUBSUB, PubSubService } from '@backbase/foundation-ang/web-sdk';
import {
  AccountsCommunicationService as AccountsCommunicationServiceImplementation,
  AccountsInitiatePaymentCommunication,
} from '@backbase/retail/feature/communication';

const AccountsTransactionsConfigProvider: Provider = {
  provide: AccountsTransactionsJourneyConfigurationToken,
  useValue: {
    showCheckImages: true,
    disputeTopicId: '',
    inquireTopicId: '',
    productKindsWithExternalDetailsPage: [],
    accountAliasDisplayLevel: AccountAliasDisplayingLevel.USER,
  } as Partial<AccountsTransactionsJourneyConfiguration>,
};

@NgModule({
  imports: [AccountsTransactionsJourneyModule.forRoot()],
  providers: [
    AccountsTransactionsConfigProvider,
    { provide: AccountsPaymentsCommunication, useExisting: AccountsInitiatePaymentCommunication },
    { provide: AccountsCommunicationService, useExisting: AccountsCommunicationServiceImplementation },
    { provide: PUBSUB, useExisting: PubSubService },
  ],
})
export class AccountsTransactionsJourneyBundleModule {}
