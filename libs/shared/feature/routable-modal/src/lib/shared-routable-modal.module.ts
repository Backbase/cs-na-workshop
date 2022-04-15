import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@backbase/ui-ang/button';
import { HeaderModule } from '@backbase/ui-ang/header';
import { IconModule } from '@backbase/ui-ang/icon';
import { ModalModule } from '@backbase/ui-ang/modal';
import { SharedRoutableModalComponent } from './shared-routable-modal.component';

@NgModule({
  declarations: [SharedRoutableModalComponent],
  imports: [CommonModule, HeaderModule, ButtonModule, IconModule, ModalModule, RouterModule],
  exports: [SharedRoutableModalComponent],
})
export class SharedRoutableModalModule {}
