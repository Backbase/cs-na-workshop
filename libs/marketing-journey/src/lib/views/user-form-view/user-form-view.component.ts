import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { EMPLOYMENT_STATUS, MARITAL_STATUS, STATES } from './const';
import * as fromStore from '../../+state/user.reducer';
import { getUser } from '../../+state/user.selectors';

@Component({
  selector: 'bb-user-form-view',
  templateUrl: './user-form-view.component.html',
  styleUrls: ['./user-form-view.component.scss'],
})
export class UserFormViewComponent implements OnInit {
  readonly states = STATES;
  readonly martialStatus = MARITAL_STATUS;
  readonly employmentStatus = EMPLOYMENT_STATUS;
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

  get authorizedUsers(): FormArray {
    return this.formGroup.get('authorizedUsers') as FormArray;
  }

  constructor(private fb: FormBuilder, private router: Router, private store: Store<fromStore.State>) {}

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
    this.router.navigate(['/marketing/life-goals']);
  }

  ngOnInit(): void {
    console.log('hey jamel');
    this.store
      .pipe(select(getUser))
      .pipe(take(1))
      .subscribe((user) => {
        console.log('InputAuthorizedUsersComponent', user);
        this.formGroup.patchValue(user);
      });
  }
}
