import { Component, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Subject, BehaviorSubject } from 'rxjs';
import * as CONSTS from './const';

@Component({
  selector: 'bb-user-form-const-view',
  template: ``,
})
export class ConstComponent implements OnDestroy {
  /**
   * Form field constants
   */
  readonly states = CONSTS.STATES;
  readonly martialStatus = CONSTS.MARITAL_STATUS;
  readonly employmentStatus = CONSTS.EMPLOYMENT_STATUS;
  /**
   * Component destroyed indicator
   */
  destroy$: Subject<boolean> = new Subject<boolean>();
  /**
   * Streams of loading flag indicators.
   */
  readonly loadingPromotions$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  /**
   * User Form formGroup
   */
  formGroup = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
    middleName: [''],
    lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required]],
    address: this.fb.group({
      line1: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]+$/)]],
      line2: ['', [Validators.pattern(/^[a-zA-Z0-9 ]+$/)]],
      city: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      state: ['', [Validators.required]],
      zipCode: ['', [Validators.required, Validators.pattern(/^[0-9]{5}(?:-[0-9]{4})?$/)]],
    }),
    income: ['', [Validators.required]],
    employmentStatus: ['', [Validators.required]],
    maritalStatus: ['', [Validators.required]],
    ssn: ['', [Validators.required]],
    authorizedUsers: this.fb.array([], [Validators.required]),
    agreement: [false, [Validators.requiredTrue]],
  });

  constructor(protected fb: FormBuilder) {}

  get authorizedUsers(): FormArray {
    return this.formGroup.get('authorizedUsers') as FormArray;
  }

  addUser() {
    const userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required],
      address: this.fb.group({
        line1: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]+$/)]],
        line2: ['', [Validators.pattern(/^[a-zA-Z0-9 ]+$/)]],
        city: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
        state: ['', [Validators.required]],
        zipCode: ['', [Validators.required, Validators.pattern(/^[0-9]{5}(?:-[0-9]{4})?$/)]],
      }),
    });

    this.authorizedUsers.push(userForm);
  }

  removeUser(index: number){
    this.authorizedUsers.removeAt(index);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
