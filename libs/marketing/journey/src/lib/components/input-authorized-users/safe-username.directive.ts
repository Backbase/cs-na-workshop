import { Directive } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  AsyncValidatorFn,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthorizedUserService } from '../../services/authorized-user.service';
import { composeAsyncValidatorFn } from './safe-username.validator';

@Directive({
  selector: '[safeUsername]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: SafeUsernameValidatorDirective,
      multi: true,
    },
  ],
})
export class SafeUsernameValidatorDirective implements AsyncValidator {
  private asyncUsernameValidatorFn: AsyncValidatorFn;

  constructor(authorizedUserService: AuthorizedUserService) {
    this.asyncUsernameValidatorFn = composeAsyncValidatorFn(
      (username) => authorizedUserService.verifyIsUsernameCompliant(username),
      {
        unsafeUsername: true,
      },
    );
  }

  validate(control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
    return this.asyncUsernameValidatorFn(control);
  }
}
