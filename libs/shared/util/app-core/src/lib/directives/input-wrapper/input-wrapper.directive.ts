import { Directive, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[formControlName][bbInputWrapper]',
  providers: [],
})
export class InputWrapperDirective {
  constructor(@Self() @Optional() public control: NgControl) {}
}
