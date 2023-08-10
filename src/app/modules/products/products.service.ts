import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/models/product.model';

const dataProducts: Product[] = [
  {
    url: 'assets/imgs/items/1.jpg',
    name: 'Seeds of Change Organic Quinoa',
    price: '$34.50',
    status: 'Active',
    date: '02.11.2021'
  },
  {
    url: 'assets/imgs/items/2.jpg',
    name: 'All Natural Italian-Style Chicken',
    price: '$990.99',
    status: 'Active',
    date: '02.11.2021'
  },
  {
    url: 'assets/imgs/items/3.jpg',
    name: 'Gortons Beer Battered Fish Fillets',
    price: '$76.99',
    status: 'Archived',
    date: '02.11.2021'
  },
  {
    url: 'assets/imgs/items/4.jpg',
    name: 'Blue Diamond Almonds Lightly Salted',
    price: '$76.99',
    status: 'Disabled',
    date: '02.11.2021'
  },
  {
    url: 'assets/imgs/items/5.jpg',
    name: 'Chobani Complete Vanilla Greek Yogurt',
    price: '$18.00',
    status: 'Archived',
    date: '02.11.2021'
  },
  {
    url: 'assets/imgs/items/6.jpg',
    name: 'Canada Dry Ginger Ale 2 L Bottle',
    price: '$76.99',
    status: 'Active',
    date: '02.11.2021'
  },
  {
    url: 'assets/imgs/items/7.jpg',
    name: 'Gortons Beer Battered Fish Fillets',
    price: '$15.46',
    status: 'Disable',
    date: '02.11.2021'
  },
  {
    url: 'assets/imgs/items/1.jpg',
    name: 'Gortons Beer Battered Fish Fillets',
    price: '$651.23',
    status: 'Active',
    date: '02.11.2021'
  },
  {
    url: 'assets/imgs/items/3.jpg',
    name: 'Haagen-Dazs Caramel Cone Ice',
    price: '$56.46',
    status: 'Active',
    date: '02.11.2021'
  },
  {
    url: 'assets/imgs/items/4.jpg',
    name: 'Beer Battered Fish Caramel ',
    price: '$849.68',
    status: 'Disable',
    date: '02.11.2021'
  },
]

@Injectable({
  providedIn: 'root'
})
export class ProductsService {



  constructor() { }

  public getProducts():Observable<Product[]>{
    return of(dataProducts)
  }
}
