import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AccountsCommunicationService as AccountsCommunicationServiceAPI,
  ProductKindUri,
} from '@backbase/accounts-transactions-journey-ang';

@Injectable({
  providedIn: 'root',
})
export class AccountsCommunicationService implements AccountsCommunicationServiceAPI {
  constructor(private readonly router: Router, private readonly route: ActivatedRoute) {}

  navigateToExternalAccountDetails(navigationInfo: { id: string; kind: string }) {
    if (navigationInfo.kind === ProductKindUri.LOAN) {
      this.navigateToLoansInfoPage(navigationInfo.id);
    } else {
      console.error('Not configured navigation to account external details: ', navigationInfo);
    }
  }

  private navigateToLoansInfoPage(accountId: string) {
    this.router.navigate([`loans/details/${accountId}/info`], { relativeTo: this.route });
  }
}
