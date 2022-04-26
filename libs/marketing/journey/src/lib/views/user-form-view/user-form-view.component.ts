import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ConstComponent } from './const.component';

// STORE.APP
import { select, Store } from '@ngrx/store';
import { AppState } from 'apps/retail-usa/src/app/+state/app.state';
import * as AppSelectors from 'apps/retail-usa/src/app/+state/app.selectors';

// STORE.FORM
import { getFormData, getUserProfile } from '../../+state/form/form.selectors';
import * as FormActions from '../../+state/form/form.actions';

// STORE.PROMOTIONS
import * as PromotionActions from '../../+state/promotion/promotion.actions';

// RXJS
import { BehaviorSubject } from 'rxjs';
import { filter, first, take, tap, takeUntil, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'bb-user-form-view',
  templateUrl: './user-form-view.component.html',
  styleUrls: ['./user-form-view.component.scss'],
})
export class UserFormViewComponent extends ConstComponent implements OnInit {
  /**
   * Streams of loading flag indicators.
   */
  readonly loadingPromotions$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(protected fb: FormBuilder, private router: Router, private store: Store<AppState>) {
    super(fb);
  }

  /**
   * Submit the user form to retrieve valid promotions
   * @returns {void}
   */
  onSubmit() {
    const user = this.formGroup.value;

    // Get list of promotions
    this.store
      .pipe(
        select(AppSelectors.arePromotionsLoaded),
        tap((promotionsLoaded) => {
          if (!this.loadingPromotions$.value && !promotionsLoaded) {
            this.loadingPromotions$.next(true);
            this.store.dispatch(PromotionActions.loadAllPromotions({ user }));
          }
        }),
        filter((promotionsLoaded) => promotionsLoaded),
        first(),
      )
      .subscribe(() => {
        this.loadingPromotions$.next(false);
        this.router.navigate(['/marketing/promo']);
      });
  }

  ngOnInit(): void {
    /**
     * Save form data to store after 0.5sec of inactivity
     */
    this.formGroup.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(500)).subscribe((formData) => {
      this.store.dispatch(FormActions.setFormData({ formData }));
    });

    /**
     * When syncing user profile data, overwrite form data
     */
    this.store
      .pipe(
        takeUntil(this.destroy$),
        select(getUserProfile),
        filter((data) => data !== undefined),
      )
      .subscribe((userProfile) => {
        this.formGroup.patchValue(userProfile);
      });

    /**
     * Prefill form data when loading the instance
     */
    this.store.pipe(select(getFormData), take(1)).subscribe((formData) => {
      this.formGroup.patchValue(formData);
    });
  }

  /**
   * Request user profile data to overwrite form data
   * @returns {void}
   */
  syncProfile(): void {
    this.store.dispatch(FormActions.getUserProfile());
  }
}
