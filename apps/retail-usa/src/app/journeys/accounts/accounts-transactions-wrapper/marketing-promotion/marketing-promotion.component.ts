import { ApplicationInitStatus, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {} from '@backbase/user-marketing-promotions-data'
import { selectUserPromotions } from 'apps/retail-usa/src/app/+state/app.selectors';
import { AppState } from 'apps/retail-usa/src/app/+state/app.state';
import * as AppActions from 'apps/retail-usa/src/app/+state/app.actions';

@Component({
  selector: 'bb-marketing-promotion',
  templateUrl: './marketing-promotion.component.html',
})
export class MarketingPromotionComponent implements OnInit {
  constructor(private store: Store<AppState>){
  }

  ngOnInit() {
    this.store.pipe(select(selectUserPromotions)).subscribe((promos) => console.log({promos}))
    this.store.dispatch(AppActions.loadUserPromotions());
  }
}
