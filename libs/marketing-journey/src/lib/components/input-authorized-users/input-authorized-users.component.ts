import { Component } from '@angular/core';
import { ControlContainer } from '@angular/forms';


@Component({
  selector: 'bb-input-authorized-users',
  templateUrl: './input-authorized-users.component.html',
  styleUrls: ['./input-authorized-users.component.scss'],
})
export class InputAuthorizedUsersComponent {
  constructor(public controlContainer: ControlContainer) {}

  get formGroup() {
    return this.controlContainer.control;
  }
}
