import { Component } from '@angular/core';
import { RemoteConfigService } from '@backbase/remote-config-ang';
import { PERMISSIONS } from '../../auth/permissions';
import { RetailAppRemoteConfig } from '../../remote-config/remote-config';

@Component({
  selector: 'bb-navigation-menu',
  templateUrl: './navigation-menu.component.html',
})
export class NavigationMenuComponent {
  permissions = PERMISSIONS;
  readonly showContacts = this.remoteConfig.getValue('show_contacts');

  constructor(private remoteConfig: RemoteConfigService<RetailAppRemoteConfig>) {}
}
