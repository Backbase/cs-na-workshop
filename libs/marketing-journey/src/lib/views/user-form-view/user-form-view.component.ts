import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { filter, first, take, tap, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AppState } from 'apps/retail-usa/src/app/+state/app.state';
import { arePromotionsLoaded } from '../../+state/promotion/promotion.selectors';
import * as PromotionActions from '../../+state/promotion/promotion.actions';
import { getFormData, getUserProfile } from '../../+state/form/form.selectors';
import * as FormActions from '../../+state/form/form.actions';
import { EMPLOYMENT_STATUS, MARITAL_STATUS, STATES } from './const';
import { Subject } from 'rxjs';

@Component({
  selector: 'bb-user-form-view',
  templateUrl: './user-form-view.component.html',
  styleUrls: ['./user-form-view.component.scss'],
})
export class UserFormViewComponent implements OnInit, OnDestroy {
  readonly states = STATES;
  readonly martialStatus = MARITAL_STATUS;
  readonly employmentStatus = EMPLOYMENT_STATUS;
  destroy$: Subject<boolean> = new Subject<boolean>();
  formGroup = this.fb.group({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: this.fb.group({
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipCode: '',
    }),
    income: '',
    employmentStatus: '',
    maritalStatus: '',
    ssn: '',
    authorizedUsers: this.fb.array([]),
    agreement: [false, Validators.requiredTrue],
  });

  /**
   * Streams of loading flag indicators.
   */
  readonly loadingPromotions$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  readonly loadingUser$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  get authorizedUsers(): FormArray {
    return this.formGroup.get('authorizedUsers') as FormArray;
  }

  constructor(private fb: FormBuilder, private router: Router, private store: Store<AppState>) {}

  addUser() {
    const userForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirm: '',
    });

    this.authorizedUsers.push(userForm);
  }

  onSubmit() {
    const user = this.formGroup.value;

    // Get list of promotions
    this.store
      .pipe(
        select(arePromotionsLoaded),
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
    this.store.pipe(select(getFormData), take(1)).subscribe((formData) => {
      this.formGroup.patchValue(formData);
    });

    this.formGroup.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(500)).subscribe((formData) => {
      this.store.dispatch(FormActions.setFormData({ formData }));
    });

    this.store
      .pipe(
        takeUntil(this.destroy$),
        select(getUserProfile),
        filter((data) => data !== undefined),
      )
      .subscribe((userProfile) => {
        this.formGroup.patchValue(userProfile);
      });
  }

  syncProfile(): void {
    this.store.dispatch(FormActions.getUserProfile());
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
