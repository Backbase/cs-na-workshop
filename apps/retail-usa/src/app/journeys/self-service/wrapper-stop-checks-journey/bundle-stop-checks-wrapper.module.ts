import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StopChecksJourneyConfiguration, StopChecksJourneyConfigurationToken } from '@backbase/stop-checks-journey-ang';
import { ButtonModule } from '@backbase/ui-ang/button';
import { HeaderModule } from '@backbase/ui-ang/header';
import { IconModule } from '@backbase/ui-ang/icon';
import { StopChecksJourneyWrapperComponent } from './stop-checks-journey-wrapper.component';

@NgModule({
  declarations: [StopChecksJourneyWrapperComponent],
  providers: [
    {
      provide: StopChecksJourneyConfigurationToken,
      useValue: { shouldDisplayHeading: false } as StopChecksJourneyConfiguration,
    },
  ],
  imports: [
    IconModule,
    HeaderModule,
    ButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: StopChecksJourneyWrapperComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('../bundle-stop-checks.module').then((m) => m.StopChecksJourneyBundleModule),
          },
        ],
      },
    ]),
  ],
})
export class StopChecksJourneyWrapperBundleModule {}
