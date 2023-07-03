import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { SupportedCurrency } from '@constants';
import { CurrencyUnit } from './models/currency-unit.model';
import { Order as OrderBase } from '@core';//
import { Order } from './models/order.model';
import { formatCurrency } from '@helpers';
import { CurrencyFormationPipe } from 'src/app/shared/pipe/currency-formation.pipe';

const dataMock: OrderBase[] = [
  {
    id: 1901,
    name: 'Marvin McKinney',
    email: 'marvin@example.com',
    total: 9,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Pending',
    // date: new Date().toISOString(),
    date: '03.19.2020'
  },
  {
    id: 2300,
    name: 'Leslie Alexander	',
    email: 'leslie@example.com	',
    total: 46.61,
    currencyUnit: {
      symbol: '$',
      name: 'USDollar',
      code: SupportedCurrency.USDollar,
    },
    status: 'Pending',
    // date: new Date().toISOString(),
    date: '03.21.2020'
  },
  {
    id: 1233,
    name: 'Esther Howard	',
    email: 'esther@example.com	',
    total: 12,
    currencyUnit: {
      symbol: 'đ',
      name: 'VietnamDong',
      code: SupportedCurrency.VietnamDong,
    },
    status: 'Canceled',
    date: new Date().toISOString(),
    // date: '03.07.2020'
  },
  {
    id: 1234,
    name: 'Esther Alexander	',
    email: 'esader@example.com	',
    total: 19,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Canceled',
    date: new Date().toISOString(),
    // date: '09.07.2020'
  },
  {
    id: 2323,
    name: 'Jenny Wilson	',
    email: 'jenny@example.com	',
    total: 589.99,
    currencyUnit: {
      symbol: '$',
      name: 'USDollar',
      code: SupportedCurrency.USDollar,
    },
    status: 'Received',
    date: new Date().toISOString()
    // date: '22.05.2020',
  },
  {
    id: 2112,
    name: 'Marvin McKinney	',
    email: 'marvin@example.com	',
    total: 16.58,
    currencyUnit: {
      symbol: 'đ',
      name: 'VietnamDong',
      code: SupportedCurrency.VietnamDong,
    },
    status: 'Received',
    date: new Date().toISOString()
    // date: '23.04.2020	',
  },
  {
    id: 7897,
    name: 'Albert Flores	',
    email: 'albertn@example.com	',
    total: 10.0,
    currencyUnit: {
      symbol: '$',
      name: 'USDollar',
      code: SupportedCurrency.USDollar,
    },
    status: 'Received',
    date: new Date().toISOString()
    // date: '13.03.2020	',
  },
  {
    id: 2322,
    name: 'Wade Warren	',
    email: 'waden@example.com	',
    total: 105.55,
    currencyUnit: {
      symbol: '$',
      name: 'USDollar',
      code: SupportedCurrency.USDollar,
    },
    status: 'Received',
    date: new Date().toISOString()
    // date: '23.09.2020	',
  },
  {
    id: 2324,
    name: 'Jane Cooper',
    email: 'jane@example.com	',
    total: 710.68,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Received',
    date: new Date().toISOString()
    // date: '28.04.2020	',
  },
  {
    id: 2325,
    name: 'Savannah Nguyen',
    email: 'savannah@example.com	',
    total: 451.16,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Received',
    date: new Date().toISOString()
    // date: '23.04.2020	',
  },
  {
    id: 2326,
    name: 'Guy Hawkins',
    email: 'guy@example.com	',
    total: 767.5,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Received',
    date: new Date().toISOString()
    // date: '22.04.2020	',
  },
  {
    id: 2327,
    name: 'Darrell Steward',
    email: 'darrel@example.com	',
    total: 406.27,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Received',
    date: new Date().toISOString()
    // date: '13.08.2020	',
  },
  {
    id: 2328,
    name: 'Jane Cooper',
    email: 'jane@example.com	',
    total: 601.13,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Received',
    date: new Date().toISOString()
    // date: '18.03.2020	',
  },
  {
    id: 2329,
    name: 'Darlene Robertson	',
    email: 'darlene@example.com	',
    total: 948.18,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Received',
    date: new Date().toISOString()
    // date: '02.02.2020	',
  },
  {
    id: 2330,
    name: 'Gol D.Ace',
    email: 'portgas@example.com',
    total: 512.26,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Received',
    date: new Date().toISOString()
    // date: '22.03.2020',
  },
  {
    id: 2331,
    name: 'Monkey D.Luf',
    email: 'monkey@example.com',
    total: 981.52,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Received',
    date: new Date().toISOString()
    // date: '13.01.2020',
  },
  {
    id: 2332,
    name: 'Nio Robin',
    email: 'nior@example.com',
    total: 202.13,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Received',
    date: new Date().toISOString()
    // date: '12.05.2020',
  },
  {
    id: 2333,
    name: 'Red Shank',
    email: 'shank@example.com',
    total: 612.65,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Received',
    date: new Date().toISOString()
    // date: '11.04.2020',
  },
  {
    id: 2334,
    name: 'Edward Negate',
    email: 'edward@example.com',
    total: 853.26,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Received',
    date: new Date().toISOString()
    // date: '06.06.2020',
  },
  {
    id: 2335,
    name: 'Tony Chopper',
    email: 'tony@example.com',
    total: 153.26,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Pending',
    date: new Date().toISOString()
    // date: '05.05.2020',
  },
  {
    id: 2335,
    name: 'Boa Hancock',
    email: 'boa@example.com',
    total: 659.43,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Canceled',
    date: new Date().toISOString()
    // date: '02.10.2021',
  },
  {
    id: 2336,
    name: 'Dracula Mihawk',
    email: 'mihawk@example.com',
    total: 641.65,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Pending',
    date: new Date().toISOString()
    // date: '09.08.2019',
  },
  {
    id: 2337,
    name: 'Vinsmoke Sanji',
    email: 'sanji@example.com',
    total: 465.36,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Pending',
    date: new Date().toISOString()
    // date: '19.06.2020',
  },
  {
    id: 2338,
    name: 'Water Law',
    email: 'law@example.com',
    total: 458.19,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Received',
    date: new Date().toISOString()
    // date: '23.05.2019',
  },
  {
    id: 2339,
    name: 'Premium Buggy',
    email: 'buggy@example.com',
    total: 749.88,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Pending',
    date: new Date().toISOString()
    // date: '03.05.2020',
  },
  {
    id: 2340,
    name: 'SoldKin Usopp',
    email: 'usopp@example.com',
    total: 849.15,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Pending',
    date: new Date().toISOString()
    // date: '05.09.2020',
  },
  {
    id: 2341,
    name: 'Sergeant Cobby',
    email: 'cobby@example.com',
    total: 946.53,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Pending',
    date: new Date().toISOString()
    // date: '16.03.2020',
  },
  {
    id: 2342,
    name: 'Aokiji Kuzan',
    email: 'kuzan@example.com',
    total: 626.94,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Pending',
    date: new Date().toISOString()
    // date: '25.06.2020',
  },
  {
    id: 2343,
    name: 'Musician Brook',
    email: 'brook@example.com',
    total: 486.28,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Pending',
    date: new Date().toISOString()
    // date: '24.07.2020',
  },
  {
    id: 2344,
    name: 'Moa Jinbei',
    email: 'jinbei@example.com',
    total: 235.68,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Pending',
    date: new Date().toISOString()
    // date: '26.02.2020',
  },
  {
    id: 2345,
    name: 'Junko Sabo',
    email: 'sabo@example.com',
    total: 574.46,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Pending',
    date: new Date().toISOString()
    // date: '28.07.2020',
  },
  {
    id: 2346,
    name: 'Monk Dragon',
    email: 'dragon@example.com',
    total: 132.35,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Pending',
    date: new Date().toISOString()
    // date: '06.08.2020',
  },
  {
    id: 2347,
    name: 'Docs Dore',
    email: 'doream@example.com',
    total: 844.66,
    currencyUnit: {
      symbol: '¥',
      name: 'ChinaYen',
      code: SupportedCurrency.ChinaYen,
    },
    status: 'Pending',
    date: new Date().toISOString()
    // date: '09.08.2020',
  },
  {
    id: 2348,
    name: 'Cun Wantana',
    email: 'wantana@example.com',
    total: 136.58,
    currencyUnit: {
      symbol: '$',
      name: 'USDollar',
      code: SupportedCurrency.USDollar,
    },
    status: 'Pending',
    date: new Date().toISOString()
    // date: '10.08.2020',
  },
  {
    id: 2349,
    name: 'Align Conte',
    email: 'conte@example.com',
    total: 562.66,
    currencyUnit: {
      symbol: '$',
      name: 'USDollar',
      code: SupportedCurrency.USDollar,
    },
    status: 'Canceled',
    date: new Date().toISOString()
    // date: '12.08.2020',
  },
  {
    id: 2350,
    name: 'Same Frank',
    email: 'franky@example.com',
    total: 568.12,
    currencyUnit: {
      symbol: '$',
      name: 'USDollar',
      code: SupportedCurrency.USDollar,
    },
    status: 'Canceled',
    date: new Date().toISOString()
    // date: '15.08.2020',
  },
  {
    id: 2351,
    name: 'Kai Baron',
    email: 'baron@example.com',
    total: 436.28,
    currencyUnit: {
      symbol: '$',
      name: 'USDollar',
      code: SupportedCurrency.USDollar,
    },
    status: 'Canceled',
    date: new Date().toISOString()
    // date: '25.08.2020',
  },
  {
    id: 2352,
    name: 'Limo Teem',
    email: 'teemconte@example.com',
    total: 232.69,
    currencyUnit: {
      symbol: '$',
      name: 'USDollar',
      code: SupportedCurrency.USDollar,
    },
    status: 'Canceled',
    date: new Date().toISOString()
    // date: '02.09.2020',
  },
  {
    id: 2353,
    name: 'Van Verse',
    email: 'verse@example.com',
    total: 351.23,
    currencyUnit: {
      symbol: '$',
      name: 'USDollar',
      code: SupportedCurrency.USDollar,
    },
    status: 'Canceled',
    date: new Date().toISOString()
    // date: '10.09.2020',
  },
  {
    id: 2354,
    name: 'Math Liu',
    email: 'liu@example.com',
    total: 582.34,
    currencyUnit: {
      symbol: '$',
      name: 'USDollar',
      code: SupportedCurrency.USDollar,
    },
    status: 'Canceled',
    date: new Date().toISOString()
    // date: '12.09.2020',
  },
  {
    id: 2355,
    name: 'Hight Foam',
    email: 'foam@example.com',
    total: 659.99,
    currencyUnit: {
      symbol: '$',
      name: 'USDollar',
      code: SupportedCurrency.USDollar,
    },
    status: 'Canceled',
    date: new Date().toISOString()
    // date: '18.09.2020',
  },
];

@Injectable()
export class OrdersService {
  public constructor(private _httpClient: HttpClient) {}
  public getOrders(): Observable<Order[]> {
    // const withGeneric = this._httpClient
    //   .get<Order[]>('http://192.168.1.8:8000/api/orders')
    //   .pipe(map((data) => data.map((item) => this.formatOrder(item))));

    // return withGeneric;
    return of(dataMock).pipe(
      map((data) => data.map((item) => this.formatOrder(item)))
    );
  }

  public getOrderById(id: number): Observable<Order> {
    // 'http://192.168.1.8:8000/api/orders/3242r'
    const product = dataMock.find((item) => item.id === id);

    return of(product);
    // return this._httpClient.get<Order>(
    //   `http://192.168.1.8:8000/api/orders/${id}`
    // );
  }

  private formatOrder(item: OrderBase): Order {
    const formattedOrder: Order = {
      ...item,

      formationTotal: formatCurrency(item.total, item.currencyUnit),
    };
    return formattedOrder;
  }

  public changeCurrency(order: Order, newCurrency: SupportedCurrency): void {
    order.currencyUnit.code = newCurrency;
  }
}
