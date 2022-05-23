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
    firstName: ['', ],
    middleName: [''],
    lastName: ['', ],
    email: ['',],
    phoneNumber: ['', ],
    address: this.fb.group({
      line1: ['', ],
      line2: ['',],
      city: ['', ],
      state: ['', ],
      zipCode: ['', ],
    }),
    income: ['', ],
    employmentStatus: ['', ],
    maritalStatus: ['', ],
    ssn: ['', ],
    authorizedUsers: this.fb.array([], []),
    agreement: [false,],
  });

  constructor(protected fb: FormBuilder) {}

  get authorizedUsers(): FormArray {
    return this.formGroup.get('authorizedUsers') as FormArray;
  }

  addUser() {
    const userForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      confirm: '',
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
