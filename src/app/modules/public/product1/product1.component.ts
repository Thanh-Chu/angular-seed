import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./product1.component.scss'],
})
export class Product1Component implements OnInit {
  public abc = 'assets/imgs/items/2.jpg';
  @Input() public products: Product[] = [
    {
      url: 'assets/imgs/items/1.jpg',
      name: 'Seeds of Change Organic Quinoa',
      price: '$34.50',
      status: 'Active',
      date: '02.11.2021',
    },
    {
      url: 'assets/imgs/items/2.jpg',
      name: 'All Natural Italian-Style Chicken',
      price: '$990.99',
      status: 'Active',
      date: '02.11.2021',
    },
    {
      url: 'assets/imgs/items/3.jpg',
      name: 'Gortons Beer Battered Fish Fillets',
      price: '$76.99',
      status: 'Archived',
      date: '02.11.2021',
    },
    {
      url: 'assets/imgs/items/4.jpg',
      name: 'Foster Farms Takeout Crispy Classic Buffalo',
      price: '$18.00',
      status: 'Active',
      date: '02.11.2021',
    },
    {
      url: 'assets/imgs/items/4.jpg',
      name: 'Blue Diamond Almonds Lightly Salted',
      price: '$76.99',
      status: 'Disabled',
      date: '09.09.2009',
    },
  ];
  public ngOnInit(): void {
    console.log('?');
    
  }
}
