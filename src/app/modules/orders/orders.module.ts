import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders.routing';
import { OrdersService } from './orders.service';
import { PipeModule } from '@shared/pipe/pipe.module';

@NgModule({
  declarations: [
  ],
  imports: [CommonModule, OrdersRoutingModule, PipeModule],
  providers: [OrdersService],
})
export class OrdersModule {}
