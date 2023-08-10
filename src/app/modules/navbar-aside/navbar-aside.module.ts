import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarAsideRoutingModule } from './navbar-aside-routing.module';
import { NavbarAsideComponent } from './navbar-aside/navbar-aside.component';


@NgModule({
  declarations: [
    NavbarAsideComponent
  ],
  imports: [
    CommonModule,
    NavbarAsideRoutingModule
  ]
})
export class NavbarAsideModule { }
