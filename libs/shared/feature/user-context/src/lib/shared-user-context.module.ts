import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedUserContextService } from './shared-user-context.service';

@NgModule({
  imports: [CommonModule],
  providers: [SharedUserContextService],
})
export class SharedUserContextModule {}
