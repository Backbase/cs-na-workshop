import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectContextWidgetModule } from '@backbase/select-context-widget-ang';
import { SharedUserContextModule, UserContextConfigurationToken } from '@backbase/shared/feature/user-context';
import { environment } from '../../environments/environment';
import { UserContextComponent } from './user-context.component';

@NgModule({
  declarations: [UserContextComponent],
  imports: [
    CommonModule,
    SharedUserContextModule,
    SelectContextWidgetModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserContextComponent,
      },
    ]),
  ],
  providers: [
    {
      provide: UserContextConfigurationToken,
      useValue: environment.landingPageUrl,
    },
  ],
})
export class UserContextModule {}
