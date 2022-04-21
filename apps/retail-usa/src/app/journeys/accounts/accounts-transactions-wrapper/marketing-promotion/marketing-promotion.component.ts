import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Promotion } from '@backbase/retail/util/promotions';
import { selectUserPromotions } from 'apps/retail-usa/src/app/+state/app.selectors';
import { AppState } from 'apps/retail-usa/src/app/+state/app.state';
import * as AppActions from 'apps/retail-usa/src/app/+state/app.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'bb-marketing-promotion',
  templateUrl: './marketing-promotion.component.html',
})
export class MarketingPromotionComponent implements OnInit {
  promotions$: Observable<Promotion[]> = this.store.pipe(select(selectUserPromotions));
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(AppActions.loadUserPromotions());
  }
}
