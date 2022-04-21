import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuickTransferJourneyModule } from '@backbase/quick-transfer-journey-ang';
import { QuickActionsComponent } from '../quick-actions.component';
import { CampaignSpaceJourneyBundleModule } from './campaign-space-journey.module';
import { MarketingPromotionComponent } from './marketing-promotion/marketing-promotion.component';
import { AccountsTransactionsJourneyWrapperComponent } from './wrapper-accounts-transactions-journey.component';

const routes: Routes = [
  {
    path: '',
    component: AccountsTransactionsJourneyWrapperComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../bundle-accounts-transactions-journey.module').then(
            (m) => m.AccountsTransactionsJourneyBundleModule,
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [AccountsTransactionsJourneyWrapperComponent, QuickActionsComponent, MarketingPromotionComponent],
  imports: [QuickTransferJourneyModule, RouterModule.forChild(routes), CommonModule, CampaignSpaceJourneyBundleModule],
})
export class AccountsTransactionsJourneyBundleModule {}
