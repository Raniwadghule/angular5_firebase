import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { VisitComponent } from './visit/visit.component';
import { SupportComponent } from './support/support.component';
import { ShopComponent } from './shop/shop.component';
import { MemberAreaComponent } from './member-area/member-area.component';
import { FacilitiesComponent } from './facilities/facilities.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    HomeComponent,
    AboutComponent,
    VisitComponent,
    SupportComponent,
    ShopComponent,
    MemberAreaComponent,
    FacilitiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
