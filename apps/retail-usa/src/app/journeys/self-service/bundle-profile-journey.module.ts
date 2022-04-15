import { NgModule, Provider } from '@angular/core';
import { DeepPartial } from '@backbase/identity-common-ang';
import {
  IdentitySelfServiceJourneyConfiguration,
  IdentitySelfServiceJourneyConfigurationToken,
  IdentitySelfServiceJourneyModule,
} from '@backbase/identity-self-service-journey-ang';

const ProfileConfigProvider: Provider = {
  provide: IdentitySelfServiceJourneyConfigurationToken,
  useValue: {
    userManageProfile: {
      maxEmailAddresses: 2,
      maxPhoneNumbers: 3,
      maxPostalAddresses: 1,
    },
  } as DeepPartial<IdentitySelfServiceJourneyConfiguration>,
};

@NgModule({
  imports: [IdentitySelfServiceJourneyModule.forRoot()],
  providers: [ProfileConfigProvider],
})
export class SelfServiceJourneyBundleModule {}
