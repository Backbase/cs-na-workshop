/*
 *
 * The content of this file can be edited freely, but to maintain upgradability
 * this file should not be renamed and should always export an Angular module named
 * `AppDataModule`.
 *
 *
 */
import { InjectionToken, NgModule } from '@angular/core';
import { ACCESS_CONTROL_BASE_PATH } from '@backbase/data-ang/accesscontrol';
import { ACCOUNT_STATEMENT_BASE_PATH } from '@backbase/data-ang/account-statements';
import { ACTIONS_BASE_PATH } from '@backbase/data-ang/actions';
import { ARRANGEMENT_MANAGER_BASE_PATH } from '@backbase/data-ang/arrangements';
import { AUTHORIZED_USER_BASE_PATH } from '@backbase/data-ang/authorized-users';
import { BILLPAY_BASE_PATH } from '@backbase/data-ang/billpay';
import { BUDGETING_BASE_PATH } from '@backbase/data-ang/budgeting';
import { CARDS_BASE_PATH } from '@backbase/data-ang/cards';
import { CASH_FLOW_BASE_PATH } from '@backbase/data-ang/cash-flow';
import { CATEGORIES_MANAGEMENT_BASE_PATH } from '@backbase/data-ang/categories-management';
import { CONSENT_BASE_PATH } from '@backbase/data-ang/consent';
import { CONTACT_MANAGER_BASE_PATH } from '@backbase/data-ang/contact-manager';
import { DEVICE_BASE_PATH } from '@backbase/data-ang/device';
import { ENGAGEMENT_BASE_PATH } from '@backbase/data-ang/engagement';
import { FINANCIAL_INSTITUTION_MANAGER_BASE_PATH } from '@backbase/data-ang/financial-institution-manager';
import { MESSAGES_BASE_PATH } from '@backbase/data-ang/messages';
import { NOTIFICATIONS_BASE_PATH } from '@backbase/data-ang/notifications';
import { PAYMENT_ORDER_BASE_PATH } from '@backbase/data-ang/payment-order';
import { PAYMENT_ORDER_A2A_BASE_PATH } from '@backbase/data-ang/payment-order-a2a';
import { PLACES_BASE_PATH } from '@backbase/data-ang/places';
import { SAVING_GOALS_BASE_PATH } from '@backbase/data-ang/saving-goals';
import { STOP_CHECKS_BASE_PATH } from '@backbase/data-ang/stop-checks';
import { TRANSACTIONS_BASE_PATH } from '@backbase/data-ang/transactions';
import { NGRX_PROMOTIONS_BASE_PATH } from '@backbase/user-marketing-promotions-data'
import { USER_BASE_PATH } from '@backbase/data-ang/user';
import { environment } from '../environments/environment';

/**
 * Service paths for the individual data modules.
 *
 * The values provided here are mapped to FactoryProviders in the AppDataModules
 * module below, using the servicePathFactory function above to create the
 * factory for each injection token.
 *
 * If for some reason you do not want to use the servicePathFactory to provide
 * the base path for a service, remove it from this array and add a separate
 * provider for it to the AppDataModules module, below.
 *
 * The entries in this array may be edited, added or removed as required, but
 * deleting or renaming the array itself may prevent future upgrades being
 * correctly applied.
 */
const dataModulePaths: [InjectionToken<string>, string][] = [
  [ACCESS_CONTROL_BASE_PATH, '/access-control'],
  [ACCOUNT_STATEMENT_BASE_PATH, '/account-statement'],
  [ACTIONS_BASE_PATH, '/action'],
  [ARRANGEMENT_MANAGER_BASE_PATH, '/arrangement-manager'],
  [AUTHORIZED_USER_BASE_PATH, '/authorized-user'],
  [BILLPAY_BASE_PATH, '/billpay-integrator'],
  [BUDGETING_BASE_PATH, '/budget-planner'],
  [CARDS_BASE_PATH, '/cards-presentation-service'],
  [CASH_FLOW_BASE_PATH, '/cashflow-service'],
  [CATEGORIES_MANAGEMENT_BASE_PATH, '/transaction-category-collector'],
  [CONSENT_BASE_PATH, '/consent'],
  [CONTACT_MANAGER_BASE_PATH, '/contact-manager'],
  [DEVICE_BASE_PATH, '/device-management-service'],
  [ENGAGEMENT_BASE_PATH, '/engagement'],
  [FINANCIAL_INSTITUTION_MANAGER_BASE_PATH, '/financial-institution-manager'],
  [NOTIFICATIONS_BASE_PATH, '/notifications-service'],
  [MESSAGES_BASE_PATH, '/messages-service'],
  [PAYMENT_ORDER_BASE_PATH, '/payment-order-service'],
  [PAYMENT_ORDER_A2A_BASE_PATH, '/payment-order-a2a'],
  [PLACES_BASE_PATH, '/places-presentation-service'],
  [SAVING_GOALS_BASE_PATH, '/saving-goal-planner'],
  [STOP_CHECKS_BASE_PATH, '/stop-checks'],
  [TRANSACTIONS_BASE_PATH, '/transaction-manager'],
  [USER_BASE_PATH, '/user-manager'],
  [ENGAGEMENT_BASE_PATH, '/engagement'],
  [NGRX_PROMOTIONS_BASE_PATH, '/ngrx-promotions']
];

/**
 * This module is added to the `imports` array of the AppModule in app.module.ts.
 *
 * Service configuration may be customised by modifying the relevant
 * `*_BASE_PATH` provider token value or by adding a `ModuleWithProvider`
 * as an import to this module by calling `.forRoot` on an API module:
 *
 * ```
 * @NgModule({
 *   providers: [...],
 *   imports: [
 *     AuditApiModule.forRoot(() => new AuditConfiguration({ ... }))
 *   ]
 * })
 * export class AppDataModules {}
 * ```
 */
@NgModule({
  providers: [
    ...dataModulePaths.map(([token, servicePath]) => ({
      provide: token,
      useValue: `${environment.apiRoot}${servicePath}`,
    })),
  ],
})
export class AppDataModule {}
