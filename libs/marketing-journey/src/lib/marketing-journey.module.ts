import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserFormViewComponent } from './views/user-form-view/user-form-view.component';
import { LifeGoalsViewComponent } from './views/life-goals-view/life-goals-view.component';
import { PromotionsViewComponent } from './views/promotions-view/promotions-view.component';


const routes = [
  { path: '', redirectTo: 'info', pathMatch: 'full' },
  {
    path: 'info',
    component: UserFormViewComponent,
  },
  {
    path: 'life-goals',
    component: LifeGoalsViewComponent,
  },
  {
    path: 'promo',
    component: PromotionsViewComponent,
  }
]
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    UserFormViewComponent,
    LifeGoalsViewComponent,
    PromotionsViewComponent
  ],
})
export class MarketingJourneyModule {}
