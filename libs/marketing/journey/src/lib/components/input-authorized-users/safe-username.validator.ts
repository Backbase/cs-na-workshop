import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const SafeUsernameAsyncValidator: (
  isUsernameUnsafe: (username: string) => Observable<boolean>,
) => AsyncValidatorFn = (isUsernameUnsafe: (username: string) => Observable<boolean>) => (control: AbstractControl) => {
  if (!control.value) {
    return null;
  }

  return isUsernameUnsafe(control.value).pipe(
    map((isUsernameCompliant) =>
      isUsernameCompliant
        ? null
        : {
            safeUsername: true,
          },
    ),
  );
};

export const composeAsyncValidatorFn = (
  validateFn: (value: any) => Observable<boolean> | Promise<boolean>,
  error: { [key: string]: any } = { invalid: true },
): AsyncValidatorFn => {
  return (control: AbstractControl) => {
    if (!control.value) {
      return null;
    }

    const validationPredicate = (isValueValid: boolean) => (isValueValid ? null : error);
    const asyncOperation = validateFn(control.value);

    return asyncOperation instanceof Promise
      ? asyncOperation.then(validationPredicate)
      : asyncOperation.pipe(map(validationPredicate));
  };
};
