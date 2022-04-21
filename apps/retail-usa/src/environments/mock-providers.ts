/*
 *
 * The content of this file can be edited freely, but to maintain upgradability
 * this file should not be renamed and should always export an array named
 * `mockProviders`.
 *
 *
 */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';
import {
  ServiceAgreementHttpServiceMocksProvider,
  ServiceAgreementsHttpServiceMocksProvider,
  UsersHttpServiceGetArrangementUserPrivilegesMocksProvider,
  UsersHttpServiceGetCheckUserPermissionMocksProvider,
  UsersHttpServiceGetDataItemPermissionsContextMocksProvider,
  UsersHttpServiceGetUserPrivilegesMocksProvider,
  UsersHttpServiceGetUsersByPermissionsMocksProvider,
  UsersHttpServiceMocksProvider,
} from '@backbase/data-ang/accesscontrol';
import { AccountStatementHttpServiceMocksProvider } from '@backbase/data-ang/account-statements';
import {
  ActionRecipesHttpServiceMocksProvider,
  ActionRecipeSpecificationsHttpServiceMocksProvider,
} from '@backbase/data-ang/actions';
import {
  AccountsHttpServiceMocksProvider,
  ArrangementsHttpServiceMocksProvider,
  BalancesHttpServiceMocksProvider,
  ProductKindsHttpServiceMocksProvider,
  ProductSummaryHttpServiceMocksProvider,
} from '@backbase/data-ang/arrangements';
import { ActionsMocksProvider } from '@backbase/actions-mocks-provider-ang';
import {
  NotificationPreferenceServiceCreateNotificationPreferenceMocksProvider,
  NotificationPreferenceServiceGetNotificationPreferencesMocksProvider,
  NotificationPreferenceServiceUpdateNotificationPreferenceMocksProvider,
  NotificationPreferenceServiceMocksProvider,
} from '@backbase/data-ang/engagement';
import { AuthorizedUserServiceMocksProvider } from '@backbase/data-ang/authorized-users';
import {
  BillPayAccountsServiceMocksProvider,
  BillPayAutopayServiceMocksProvider,
  BillPayEbillsServiceMocksProvider,
  BillPayEnrolmentServiceMocksProvider,
  BillPayPayeesServiceMocksProvider,
  BillPayPayeesSummaryServiceMocksProvider,
  BillPayPaymentsServiceMocksProvider,
  BillPayPayverisServiceMocksProvider,
  BillPaySearchServiceMocksProvider,
} from '@backbase/data-ang/billpay';
import { BudgetsHttpServiceMocksProvider } from '@backbase/data-ang/budgeting';
import { CardsHttpServiceMocksProvider, TravelNoticesHttpServiceMocksProvider } from '@backbase/data-ang/cards';
import { CategoriesHttpServiceMocksProvider } from '@backbase/data-ang/categories-management';
import {
  ConsentRequestsHttpServiceMocksProvider,
  ConsentsHttpServiceMocksProvider,
  PaymentRequestsHttpServiceMocksProvider,
} from '@backbase/data-ang/consent';
import { ContactsHttpServiceMocksProvider } from '@backbase/data-ang/contact-manager';
import {
  ManageMyDevicesServiceMocksProvider,
  ManageOtherUsersDevicesServiceMocksProvider,
} from '@backbase/data-ang/device';
import { SelectCampaignServiceSelectCampaignMocksProvider } from '@backbase/data-ang/engagement';
import { FinancialInstitutionManagerClientHttpServiceMocksProvider } from '@backbase/data-ang/financial-institution-manager';
import { MessagecenterHttpServiceMocksProvider } from '@backbase/data-ang/messages';
import { NotificationsHttpServiceMocksProvider } from '@backbase/data-ang/notifications';
import { PaymentOrdersHttpServiceMocksProvider } from '@backbase/data-ang/payment-order';
import { A2aClientHttpServiceMocksProvider } from '@backbase/data-ang/payment-order-a2a';
import { PaymentTemplatesHttpServiceMocksProvider } from '@backbase/data-ang/payment-template';
import { PlacesHttpServiceMocksProvider } from '@backbase/data-ang/places';
import { SavinggoalsHttpServiceMocksProvider } from '@backbase/data-ang/saving-goals';
import { SelfEnrollmentServiceMocksProvider } from '@backbase/data-ang/self-enrollment';
import { StopChecksHttpServiceMocksProvider } from '@backbase/data-ang/stop-checks';
import {
  CategoryPeriodTotalsHttpServiceMocksProvider,
  CategoryTotalsHttpServiceMocksProvider,
  TransactionClientHttpServiceMocksProvider,
  TurnoversHttpServiceMocksProvider,
} from '@backbase/data-ang/transactions';
import {
  IdentityManagementServiceMocksProvider,
  UserManagementServiceMocksProvider,
  UserProfileManagementServiceMocksProvider,
} from '@backbase/data-ang/user';
import { TemplateRegistry } from '@backbase/foundation-ang/core';
import { createMocks, createMocksInterceptor } from '@backbase/foundation-ang/data-http';
import { NotificationsMocksProvider } from '@backbase/notifications-mocks-provider-ang';
import { SummaryMockInterceptor } from '@backbase/retail/data-access-mocks';
import { productSummaryContextArrangementsMocks, promotionsMock, userMock } from './mock-data';

const SubmitCardPromotionMockProvider = createMocks([
  {
    urlPattern: '/promotions/submit',
    method: 'POST',
    responses: [
      {
        status: 200,
        body: promotionsMock,
      },
    ],
  },
]);

const AcceptCardPromotionMockProvider = createMocks([
  {
    urlPattern: '/users/me/promotion',
    method: 'GET',
    responses: [
      {
        status: 200,
        body: {},
      },
    ],
  },
]);

export const ProfileHttpServiceMocksProvider: Provider = createMocks([
  {
    urlPattern: '/users/me/profile',
    method: 'GET',
    responses: [
      {
        status: 200,
        body: userMock,
      },
    ],
  },
]);

const ProductSummaryContextArrangementsMockProvider = createMocks([
  {
    urlPattern: '{version}/productsummary/context/arrangements',
    method: 'GET',
    responses: [
      {
        status: 200,
        body: productSummaryContextArrangementsMocks,
      },
    ],
  },
]);

/**
 * Mock providers for Backbase services used when running the app in dev mode.
 */

export const mockProviders: Provider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: SummaryMockInterceptor,
    multi: true,
  },
  ActionsMocksProvider,
  createMocksInterceptor(),
  //,
  ProductSummaryContextArrangementsMockProvider,
  AccountsHttpServiceMocksProvider,
  ArrangementsHttpServiceMocksProvider,
  BalancesHttpServiceMocksProvider,
  ProductKindsHttpServiceMocksProvider,
  ProductSummaryHttpServiceMocksProvider,
  TransactionClientHttpServiceMocksProvider,
  PaymentOrdersHttpServiceMocksProvider,
  A2aClientHttpServiceMocksProvider,
  ContactsHttpServiceMocksProvider,
  PlacesHttpServiceMocksProvider,
  TemplateRegistry,
  AccountsHttpServiceMocksProvider,
  MessagecenterHttpServiceMocksProvider,
  CardsHttpServiceMocksProvider,
  IdentityManagementServiceMocksProvider,
  UserManagementServiceMocksProvider,
  UserProfileManagementServiceMocksProvider,
  ManageMyDevicesServiceMocksProvider,
  ManageOtherUsersDevicesServiceMocksProvider,
  ConsentsHttpServiceMocksProvider,
  SavinggoalsHttpServiceMocksProvider,
  SelfEnrollmentServiceMocksProvider,
  AccountStatementHttpServiceMocksProvider,
  BudgetsHttpServiceMocksProvider,
  CategoriesHttpServiceMocksProvider,
  BillPayAccountsServiceMocksProvider,
  BillPayAutopayServiceMocksProvider,
  BillPayEbillsServiceMocksProvider,
  BillPayEnrolmentServiceMocksProvider,
  BillPayPayeesServiceMocksProvider,
  BillPayPayeesSummaryServiceMocksProvider,
  BillPayPaymentsServiceMocksProvider,
  BillPayPayverisServiceMocksProvider,
  BillPaySearchServiceMocksProvider,
  ActionRecipesHttpServiceMocksProvider,
  ActionRecipeSpecificationsHttpServiceMocksProvider,
  StopChecksHttpServiceMocksProvider,
  //NotificationsHttpServiceMocksProvider,
  AuthorizedUserServiceMocksProvider,
  ServiceAgreementHttpServiceMocksProvider,
  ServiceAgreementsHttpServiceMocksProvider,
  TurnoversHttpServiceMocksProvider,
  CategoryPeriodTotalsHttpServiceMocksProvider,
  CategoryTotalsHttpServiceMocksProvider,
  TravelNoticesHttpServiceMocksProvider,
  PaymentRequestsHttpServiceMocksProvider,
  ConsentRequestsHttpServiceMocksProvider,
  UsersHttpServiceMocksProvider,
  UsersHttpServiceGetUserPrivilegesMocksProvider,
  UsersHttpServiceGetUsersByPermissionsMocksProvider,
  UsersHttpServiceGetDataItemPermissionsContextMocksProvider,
  UsersHttpServiceGetCheckUserPermissionMocksProvider,
  UsersHttpServiceGetArrangementUserPrivilegesMocksProvider,
  PaymentTemplatesHttpServiceMocksProvider,
  FinancialInstitutionManagerClientHttpServiceMocksProvider,
  NotificationPreferenceServiceCreateNotificationPreferenceMocksProvider,
  NotificationPreferenceServiceGetNotificationPreferencesMocksProvider,
  NotificationPreferenceServiceUpdateNotificationPreferenceMocksProvider,
  NotificationPreferenceServiceMocksProvider,
  SelectCampaignServiceSelectCampaignMocksProvider,
  SubmitCardPromotionMockProvider,
  AcceptCardPromotionMockProvider,
  ProfileHttpServiceMocksProvider,
];
