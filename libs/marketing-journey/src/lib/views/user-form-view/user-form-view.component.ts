import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'bb-user-form-view',
  templateUrl: './user-form-view.component.html',
  styleUrls: ['./user-form-view.component.scss']
})
export class UserFormViewComponent  {
  formGroup = this.fb.group({
    firstName: '',
    middleName: '',
    lastName: '',
    dob: null,
    address: this.fb.group({}),
    income: '',
    employmentStatus: '',
    maritalStatus: '',
    ssn: '',
    authorizedUsers: this.fb.array([]),
    agreement: [false, Validators.requiredTrue]
  });
  constructor(private fb: FormBuilder, private router: Router) { }

  onSubmit(){
    this.router.navigate(['/marketing/life-goals'])
  }
}
