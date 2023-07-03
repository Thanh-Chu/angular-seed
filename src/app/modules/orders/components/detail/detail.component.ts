import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../orders.service';
import { Order } from '../../models/order.model';
import { switchMap, tap, map } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent implements OnInit {
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _orderService = inject(OrdersService);
  private readonly _changeDetectorRef = inject(ChangeDetectorRef);
  public order: Order;

  ngOnInit(): void {
    this._activatedRoute.paramMap
      .pipe(
        switchMap((paramMap) =>
          this._orderService.getOrderById(Number(paramMap.get('abc'))).pipe(
            map((data) => {
              return { order: data, paramMap };
            })
          )
        ),
        tap(() => {
          console.log('ok');
        })
      )
      .subscribe((data) => {
        this.order = data.order;
        // data.paramMap
        this._changeDetectorRef.markForCheck();
      });
  }
}
