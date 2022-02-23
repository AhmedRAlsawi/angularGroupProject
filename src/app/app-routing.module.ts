import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
import { DessertsComponent } from './desserts/desserts.component';
import { BeverageComponent } from './beverage/beverage.component';

const routes: Routes = [
  {
    path: "breakfast", component: BreakfastComponent
  },
  {
    path: "lunch", component: LunchComponent
  },
  {
    path: "dinner", component: DinnerComponent
  },
  {
    path: "desserts", component: DessertsComponent
  },
  {
    path: "beverage", component: BeverageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
