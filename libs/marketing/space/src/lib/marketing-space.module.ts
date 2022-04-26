import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MarketingUiModule } from '@backbase/marketing/ui';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [CommonModule, RouterModule, MarketingUiModule],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
})
export class MarketingSpaceModule {}
