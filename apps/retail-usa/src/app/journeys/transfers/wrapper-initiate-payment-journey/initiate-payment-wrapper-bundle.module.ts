import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PERMISSIONS } from '../../../auth/permissions';
import { InitiatePaymentJourneyWrapperComponent } from './initiate-payment-journey.component';

@NgModule({
  declarations: [InitiatePaymentJourneyWrapperComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: InitiatePaymentJourneyWrapperComponent,
        children: [
          {
            path: 'make-a-transfer',
            loadChildren: () =>
              import('../internal-transfer-bundle.module').then((m) => m.InternalTransferJourneyBundleModule),
          },
        ],
        data: {
          title: $localize`:@@make-transfer.nav.item.title:Make a transfer - Transfer - Retail Banking`,
          modalTitle: $localize`:@@routable-modal.modal-title.payments-internal-transfer:Make a Transfer`,
          entitlements: PERMISSIONS.canCreateA2A,
        },
      },
      {
        path: '',
        component: InitiatePaymentJourneyWrapperComponent,
        children: [
          {
            path: 'money-to-member',
            loadChildren: () =>
              import('../intrabank-transfer-bundle.module').then((m) => m.IntrabankTransferJourneyBundleModule),
          },
        ],
        data: {
          title: $localize`:@@money-to-member.nav.item.title:Send money to member - Transfer - Retail Banking`,
          modalTitle: $localize`:@@routable-modal.modal-title.payments-intrabank-transfer:Send Money to Member`,
          entitlements: PERMISSIONS.canCreateA2A,
        },
      },
      {
        path: '',
        component: InitiatePaymentJourneyWrapperComponent,
        children: [
          {
            path: 'money-to-someone',
            loadChildren: () => import('../p2p-transfer-bundle.module').then((m) => m.P2PTransferJourneyBundleModule),
          },
        ],
        data: {
          title: $localize`:@@money-to-someone.nav.item.title:Send money to someone - Transfer - Retail Banking`,
          modalTitle: $localize`:@@routable-modal.modal-title.payments-intrabank-transfer:Send Money to Someone`,
          entitlements: PERMISSIONS.canCreateA2A,
        },
      },
    ]),
  ],
})
export class InitiatePaymentWrapperBundleModule {}
