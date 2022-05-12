import { Component, ContentChild, HostBinding, Input, OnInit, TemplateRef } from '@angular/core';
import { NgControl, ValidationErrors } from '@angular/forms';
import { InputWrapperDirective } from '../../directives/input-wrapper/input-wrapper.directive';
import { VALIDATION_ERRORS } from './const';

@Component({
  selector: 'bb-input-wrapper',
  template: `
    <div class="form-group">
      <ng-content></ng-content>
      <bb-input-validation-message-ui [showErrors]="errorMessage">
        <span>{{ errorMessage }}</span>
      </bb-input-validation-message-ui>
    </div>
  `,
})
export class InputWrapperComponent implements OnInit {
  @ContentChild(InputWrapperDirective, { static: true })
  wrapperDirective: InputWrapperDirective;

  @Input() errorMessages = {
    required: 'Field is required',
    pattern: 'Incorrect format',
  };

  ngOnInit() {
    if (!this.wrapperDirective) {
      throw new Error('wrapperDirective is required!');
    }
  }

  get errorMessage() {
    let message = '';
    const control = this.wrapperDirective.control;
    if (control && control.errors && control.touched) {
      const controlErrors = control.errors;
      switch (true) {
        case VALIDATION_ERRORS.REQUIRED in controlErrors:
          message = this.errorMessages.required;
          break;
        case VALIDATION_ERRORS.PATTERN in controlErrors:
          message = this.errorMessages.pattern;
          break;
        default:
          break;
      }
    }
    return message;
  }
}
