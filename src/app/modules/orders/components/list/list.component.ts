import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Order } from '../../models/order.model';
import { OrdersService } from '../../orders.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit, OnDestroy {
  private source$ = new BehaviorSubject<number>(1);
  private _subscription: Subscription;
  // public orders$: Observable<Order[]>;
  public orders: Order[];

  public constructor(
    private _orderService: OrdersService,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }
  public getProducts() {
    
    this._subscription = this._orderService.getOrders().subscribe((data) => {
      console.log(data);
      this.orders = data;
      this._changeDetectorRef.detectChanges();
    });

    // this.orders$ = this._orderService.getOrders();
    // console.log(this.orders$);

    // const axxx = this.source$.subscribe((value) => {
    //   // console.log({ value });
    // });
    // this.source$.complete();
  }
  ngOnDestroy(): void {
    // this._subscription.unsubscribe();
  }

  
}
