import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { filter, first, take, tap, takeUntil } from 'rxjs/operators';
import { AppState } from 'apps/retail-usa/src/app/+state/app.state';
import { getUser, isUserLoaded } from '../../+state/user/user.selectors';
import { arePromotionsLoaded } from '../../+state/promotion/promotion.selectors';
import * as PromotionActions from '../../+state/promotion/promotion.actions';
import * as UserActions from '../../+state/user/user.actions';
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
    dob: null,
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
    // Store user form data
    this.store.dispatch(UserActions.loadUserSuccess({ user: [user] }));

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
    // Get user profile data
    this.store
      .pipe(
        select(isUserLoaded),
        tap((userLoaded) => {
          if (!this.loadingUser$.value && !userLoaded) {
            this.loadingUser$.next(true);
            this.store.dispatch(UserActions.init());
          }
        }),
        filter((userLoaded) => userLoaded),
        first(),
      )
      .subscribe(() => {
        this.loadingUser$.next(false);
      });
  }

  syncProfile(): void {
    // Get user profile data from store
    this.store
      .pipe(select(getUser),take(1))
      .subscribe((user) => {
        this.formGroup.patchValue(user[0]);
      });

    this.formGroup.valueChanges.pipe(takeUntil(this.destroy$))
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
