import { NgModule } from '@angular/core';
import {
  ManagePayeesCommunicationService,
  ManagePayeesJourneyConfiguration,
  ManagePayeesJourneyConfigurationToken,
  ManagePayeesJourneyModule,
} from '@backbase/manage-payees-journey-ang';
import { BillpayCommunication } from '@backbase/retail/feature/communication';

@NgModule({
  imports: [ManagePayeesJourneyModule.forRoot()],
  providers: [
    {
      provide: ManagePayeesJourneyConfigurationToken,
      useValue: {
        notificationDismissTime: 3000,
        multipleBillsMode: true,
      } as ManagePayeesJourneyConfiguration,
    },
    {
      provide: ManagePayeesCommunicationService,
      useExisting: BillpayCommunication,
    },
  ],
})
export class ManagePayeesJourneyBundleModule {}
