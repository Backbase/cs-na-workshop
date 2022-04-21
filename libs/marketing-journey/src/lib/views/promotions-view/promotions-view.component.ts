import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from 'apps/retail-usa/src/app/+state/app.state';
import { ActivatedRoute, Router } from '@angular/router';
import { selectAllPromotions } from '../../+state/promotion/promotion.selectors';
import { PromotionEntity } from '../../+state/promotion/promotion.models';

@Component({
  selector: 'bb-promotions-view',
  templateUrl: './promotions-view.component.html',
  styleUrls: ['./promotions-view.component.scss'],
})
export class PromotionsViewComponent implements OnInit, OnDestroy {
  promotions$: Observable<PromotionEntity[]>;

  constructor(
    private store: Store<AppState>,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit() {
    // Get promotions from store
    this.promotions$ = this.store.pipe(select(selectAllPromotions));
  }

  ngOnDestroy() {}

  goBack() {
    this.router.navigate(['/marketing/info']);
  }

  /**
   * @name onPromotionSelect
   * @description
   * Handle click Apply button event emitter
   */
  async onPromotionSelect(promotion: PromotionEntity): Promise<void> {
    console.log('Apply to promotion: ' + promotion.name);
  }
}
