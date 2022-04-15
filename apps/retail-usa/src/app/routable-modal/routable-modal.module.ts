import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedRoutableModalModule } from '@backbase/shared/feature/routable-modal';
import { ROUTABLE_MODAL_ROUTES } from './routable-modal.routes';

@NgModule({
  imports: [SharedRoutableModalModule, RouterModule.forChild(ROUTABLE_MODAL_ROUTES)],
  exports: [SharedRoutableModalModule],
})
export class RoutableModalModule {}
