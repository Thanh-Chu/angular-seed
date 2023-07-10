import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationBarRoutingModule } from './pagination-bar-routing.module';
import { PaginationBarComponent } from './components/pagination-bar/pagination-bar.component';


@NgModule({
  declarations: [
    PaginationBarComponent
  ],
  imports: [
    CommonModule,
    PaginationBarRoutingModule
  ]
})
export class PaginationBarModule { }
