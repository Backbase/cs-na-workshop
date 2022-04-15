import { Component } from '@angular/core';
import { SharedUserContextService } from '@backbase/shared/feature/user-context';

@Component({
  templateUrl: './user-context.component.html',
})
export class UserContextComponent {
  constructor(public readonly userContextService: SharedUserContextService) {}
}
