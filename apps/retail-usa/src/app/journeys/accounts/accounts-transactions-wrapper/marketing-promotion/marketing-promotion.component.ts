import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { Promotion } from '@backbase/retail/util/promotions';
import { AppState } from 'apps/retail-usa/src/app/+state/app.state';
import * as AppActions from 'apps/retail-usa/src/app/+state/app.actions';

import { getUserPromotions } from 'apps/retail-usa/src/app/+state/app.selectors';

@Component({
  selector: 'bb-marketing-promotion',
  templateUrl: './marketing-promotion.component.html',
})
export class MarketingPromotionComponent implements OnInit, OnDestroy {
  promotions$: Observable<Promotion[]>;

  /**
   * Component destroyed indicator
   */
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.promotions$ = this.store.pipe(
      takeUntil(this.destroy$),
      select(getUserPromotions),
      filter((data) => data.length > 0),
    );

    this.store.dispatch(AppActions.getUserPromotions());
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
