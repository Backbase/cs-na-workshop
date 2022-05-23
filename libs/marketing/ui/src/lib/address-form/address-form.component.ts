import { Component } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import * as CONSTS from './const';

@Component({
  selector: 'bb-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent {
  readonly states = CONSTS.STATES;
  constructor(public controlContainer: ControlContainer) {}

  get formGroup() {
    return this.controlContainer.control;
  }
}
