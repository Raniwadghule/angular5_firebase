import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent }      from './event/event.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { MemberAreaComponent } from './member-area/member-area.component';
import { ShopComponent } from './shop/shop.component';
import {SupportComponent } from './support/support.component';
import { VisitComponent } from './visit/visit.component';
const routes: Routes = [
  { path: 'event', component: EventComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'support', component: SupportComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'member', component: MemberAreaComponent },
  { path: 'visit', component: VisitComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
