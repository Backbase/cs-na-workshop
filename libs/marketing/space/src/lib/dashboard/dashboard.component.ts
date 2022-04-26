import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { Promotion } from '@backbase/retail/util/promotions';
import { AppState } from 'apps/retail-usa/src/app/+state/app.state';
import * as AppActions from 'apps/retail-usa/src/app/+state/app.actions';

import { getUserPromotions } from 'apps/retail-usa/src/app/+state/app.selectors';

@Component({
  selector: 'bb-marketing-dashboard',
  template: `
    <ng-container *ngIf="promotions$ | async as promotions; else defaultPromo">
      <promotion-card [item]="promotions[0]"></promotion-card>
    </ng-container>

    <ng-template #defaultPromo>
      <a routerLink="/marketing"><img width="315" src="/assets/great-promos.png" /></a>
    </ng-template>
  `,
})
export class DashboardComponent implements OnInit, OnDestroy {
  promotions$: Observable<Promotion[]>;

  /**
   * Component destroyed indicator
   */
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // EXERCISE: GET APP STATE, AND DISPATCH AN EVENT
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
