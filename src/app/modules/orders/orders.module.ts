import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders.routing';
import { OrdersService } from './orders.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, OrdersRoutingModule],
  providers: [OrdersService],
})
export class OrdersModule {}
