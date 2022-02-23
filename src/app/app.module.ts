import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageComponent } from './image/image.component';
import { CategoryIconsComponent } from './category-icons/category-icons.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
import { DessertsComponent } from './desserts/desserts.component';
import { BeverageComponent } from './beverage/beverage.component';
import { AppRoutingModule } from './app-routing.module'


@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    CategoryIconsComponent,
    BreakfastComponent,
    LunchComponent,
    DinnerComponent,
    DessertsComponent,
    BeverageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
