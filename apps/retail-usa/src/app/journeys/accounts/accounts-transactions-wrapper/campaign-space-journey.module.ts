import { NgModule } from '@angular/core';

import {
  CampaignSpaceConfiguration,
  CampaignSpaceConfigurationToken,
  CampaignSpaceModule,
} from '@backbase/campaign-space-ang';

@NgModule({
  imports: [CampaignSpaceModule],
  exports: [CampaignSpaceModule],
  providers: [
    {
      provide: CampaignSpaceConfigurationToken,
      useValue: {
        portalName: 'backbase-wc3:backbase-wc3:0',
        locale: 'en-US',
        designMode: false,
      } as CampaignSpaceConfiguration,
    },
  ],
})
export class CampaignSpaceJourneyBundleModule {}
