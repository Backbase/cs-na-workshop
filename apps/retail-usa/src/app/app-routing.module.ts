/*
 *
 * The content of this file can be edited freely, but to maintain upgradability
 * this file should not be renamed and should always export an Angular module named
 * `AppRoutingModule`.
 *
 *
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntitlementsGuard } from '@backbase/foundation-ang/entitlements';
import { AuthGuard } from '@backbase/shared/feature/auth';
import { SharedUserContextGuard } from '@backbase/shared/feature/user-context';
import { PERMISSIONS } from './auth/permissions';
import { LayoutComponent } from './layout/layout.component';

//TODO: Find a more elegant solution to decide what landing page to choose
// in the event that the default one is not available due to entitlements

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'my-accounts',
  },
  {
    path: 'select-context',
    loadChildren: () => import('./user-context/user-context.module').then((m) => m.UserContextModule),
    data: {
      title: $localize`:@@context-selection.nav.item.title:Select Context`,
    },
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'accounts',
      },

      /**
       * Accounts & Cards
       */
      {
        path: 'accounts',
        loadChildren: () =>
          import('./journeys/accounts/accounts-transactions-wrapper/wrapper-accounts-transactions-journey.module').then((m) => m.AccountsTransactionsJourneyBundleModule),
        data: {
          title: $localize`:@@accounts.nav.item.title:My accounts - Retail Banking`,
          entitlements: PERMISSIONS.canViewMyAccounts,
          cssClasses: ['container-fluid', 'container'],
          redirectTo: 'transfers/make-a-transfer',
        },
      },
      {
        path: 'transfers',
        data: { cssClasses: ['container--fixed-width mx-auto'] },
        children: [
          {
            path: 'scheduled-transfers',
            loadChildren: () =>
              import('./journeys/transfers/upcoming-and-history-payments.module').then(
                (m) => m.ManageUpcomingAndHistoricalPaymentsJourneyBundleModule,
              ),
            data: {
              title: $localize`:@@scheduled-transfer.nav.item.title:Scheduled transfers - Transfer - Retail Banking`,
              entitlements: PERMISSIONS.canViewScheduledTransfers,
            },
          },
          {
            path: 'connected-accounts',
            loadChildren: () =>
              import('./journeys/transfers/connect-external-accounts-journey.module').then(
                (m) => m.ConnectExternalAccountsJourneyBundleModule,
              ),
            data: {
              title: $localize`:@@connected-accounts.nav.item.title:Connected accounts - Transfer - Retail Banking`,
              entitlements: PERMISSIONS.canViewConnectedAccounts,
            },
          },
          {
            path: '',
            loadChildren: () =>
              import(
                './journeys/transfers/wrapper-initiate-payment-journey/initiate-payment-wrapper-bundle.module'
              ).then((m) => m.InitiatePaymentWrapperBundleModule),
          },
        ],
      },
      {
        path: 'billpay',
        children: [
          {
            path: 'pay-bills',
            loadChildren: () =>
              import('./journeys/bill-pay/bundle-pay-bills-journey.module').then((m) => m.PayBillsJourneyBundleModule),
            data: {
              title: $localize`:@@pay-bill.nav.item.title:Pay a bill - Bill Pay - Retail Banking`,
              entitlements: PERMISSIONS.canViewPayABill,
              cssClasses: ['container-fluid', 'container'],
              redirectTo: 'pending-bills',
            },
          },
          {
            path: 'pending-bills',
            loadChildren: () =>
              import('./journeys/bill-pay/bundle-manage-bill-payments-journey.module').then(
                (m) => m.ManageBillPaymentsJourneyBundleModule,
              ),
            data: {
              title: $localize`:@@pending-bills.nav.item.title:Pending payments - Bill Pay - Retail Banking`,
              entitlements: PERMISSIONS.canViewPendingPayments,
              cssClasses: ['container--fixed-width mx-auto'],
              redirectTo: 'history-bills',
            },
          },
          {
            path: 'history-bills',
            loadChildren: () =>
              import('./journeys/bill-pay/bundle-manage-bill-payments-history-journey.module').then(
                (m) => m.ManageBillPaymentsHistoryJourneyBundleModule,
              ),
            data: {
              title: $localize`:@@history-bills.nav.item.title:History payments - Bill Pay - Retail Banking`,
              entitlements: PERMISSIONS.canViewHistoryPayments,
              cssClasses: ['container--fixed-width mx-auto'],
              redirectTo: 'manage-payees',
            },
          },
          {
            path: 'manage-payees',
            loadChildren: () =>
              import('./journeys/bill-pay/bundle-manage-payees-journey.module').then(
                (m) => m.ManagePayeesJourneyBundleModule,
              ),
            data: {
              title: $localize`:@@manage-payees.nav.item.title:Manage payee - Bill Pay - Retail Banking`,
              entitlements: PERMISSIONS.canViewPendingPayments,
              cssClasses: ['container--fixed-width mx-auto'],
              redirectTo: 'insights',
            },
          },
        ],
      },
      {
        path: 'insights',
        data: { cssClasses: ['container--fixed-width mx-auto'] },
        children: [
          {
            path: 'cashflow',
            loadChildren: () =>
              import('./journeys/insights/bundle-turnovers.module').then((m) => m.TurnoversJourneyBundleModule),
            data: {
              title: $localize`:@@cash-flow.nav.item.title:Cash flow - Analytics - Retail Banking`,
            },
          },
          {
            path: 'income-analysis',
            loadChildren: () =>
              import('./journeys/insights/bundle-income-analysis.module').then((m) => m.IncomeAnalysisBundleModule),
            data: {
              title: $localize`:@@income-analysis.nav.item.title:Income analysis - Analytics - Retail Banking`,
            },
          },
          {
            path: 'spending-analysis',
            loadChildren: () =>
              import('./journeys/insights/bundle-spending-analysis.module').then((m) => m.SpendingAnalysisBundleModule),
            data: {
              title: $localize`:@@spending-analysis.nav.item.title:Spending analysis - Analytics - Retail Banking`,
            },
          },
        ],
      },
      {
        path: 'self-service',
        data: { cssClasses: ['container--fixed-width mx-auto'] },
        children: [
          {
            path: 'profile',
            loadChildren: () =>
              import('./journeys/self-service/bundle-profile-journey.module').then(
                (m) => m.SelfServiceJourneyBundleModule,
              ),
            data: {
              title: $localize`:@@my-profile.nav.item.title:My profile - Self services - Retail Banking`,
            },
          },
          {
            path: 'authorized-users',
            loadChildren: () =>
              import('./journeys/self-service/bundle-authorized-users.module').then(
                (m) => m.AuthorizedUsersJourneyBundleModule,
              ),
            data: {
              title: $localize`:@@authorized-users.nav.item.title:Authorized users - Self services - Retail Banking`,
              entitlements: PERMISSIONS.canViewAuthorizedUsers,
            },
          },
          {
            path: 'manage-cards',
            loadChildren: () =>
              import('./journeys/self-service/bundle-cards-management-journey.module').then(
                (m) => m.CardsManagementJourneyBundleModule,
              ),
            data: {
              title: $localize`:@@manage-cards.nav.item.title:Manage cards - Self services - Retail Banking`,
              entitlements: PERMISSIONS.canViewManageCards,
            },
          },
          {
            path: 'product-list',
            loadChildren: () =>
              import('./journeys/self-service/bundle-actions-retail-notification-preferences-journey.module').then(
                (m) => m.ActionsRetailNotificationPreferencesJourneyBundleModule,
              ),
            data: {
              title: $localize`:@@manage-notifications.nav.item.title:Manage notifications - Self services - Retail Banking`,
              entitlements: PERMISSIONS.canViewManageNotifications,
            },
          },
          {
            path: 'manage-contacts',
            loadChildren: () =>
              import('./journeys/self-service/bundle-contact-journey.module').then(
                (m) => m.ContactManagerJourneyBundleModule,
              ),
            data: {
              title: $localize`:@@manage-contacts.nav.item.title:Manage contacts - Self services - Retail Banking`,
              entitlements: PERMISSIONS.canViewManageContacts,
            },
          },
          {
            path: 'stop-checks',
            loadChildren: () =>
              import('./journeys/self-service/wrapper-stop-checks-journey/bundle-stop-checks-wrapper.module').then(
                (m) => m.StopChecksJourneyWrapperBundleModule,
              ),
            data: {
              title: $localize`:@@stop-checks.nav.item.title:Stop checks - Self services - Retail Banking`,
              entitlements: PERMISSIONS.canViewStopChecks,
            },
          },
          {
            path: 'download-statements',
            loadChildren: () =>
              import('./journeys/self-service/bundle-accounts-statement-retail-journey.module').then(
                (m) => m.AccountStatementRetailJourneyBundleModule,
              ),
            data: {
              title: $localize`:@@download-statements.nav.item.title:Download statements - Self services - Retail Banking`,
              entitlements: PERMISSIONS.canViewDownloadStatements,
            },
          },
        ],
      },
      {
        path: 'more',
        data: { cssClasses: ['container--fixed-width mx-auto'] },
        children: [
          {
            path: 'budgets',
            loadChildren: () => import('./journeys/more/bundle-budget.module').then((m) => m.BudgetJourneyBundleModule),
            data: {
              title: $localize`:@@budgets.nav.item.title:Budgets - Retail Banking`,
              entitlements: PERMISSIONS.canViewBudgets,
            },
          },
          {
            path: 'messages',
            loadChildren: () =>
              import('./journeys/more/bundle-messages-client-inbox-journey-bundle.module').then(
                (m) => m.MessagesClientInboxJourneyBundleModule,
              ),
            data: {
              title: $localize`:@@messages.nav.item.title:Messages - Retail Banking`,
              entitlements: PERMISSIONS.canViewMessages,
            },
          },
          {
            path: 'find-us',
            loadChildren: () => import('./journeys/more/bundle-places.module').then((m) => m.PlacesJourneyBundleModule),
            data: {
              title: $localize`:@@places.nav.item.title:Find branches and ATMs - Retail Banking`,
              entitlements: PERMISSIONS.canViewPlaces,
            },
          },
        ],
      },
    ],
    canActivate: [AuthGuard, SharedUserContextGuard],
    canActivateChild: [EntitlementsGuard],
  },
  {
    path: 'consent',
    loadChildren: () =>
      import('./journeys/consent/bundle-consent-journey.module').then((m) => m.ConsentJourneyBundleModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'my-accounts' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
