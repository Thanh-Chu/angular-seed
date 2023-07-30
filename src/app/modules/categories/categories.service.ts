import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/models/category.model';


const dataCategories: Category[] = [
  {
    name: 'Yonex',
    slug: 'the great explorer of the truth',
    description: 'the master-builder of human happiness' ,
    parent: 'Adidas'
  }
]

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  public getCategory():Observable<Category[]>{
    return of(dataCategories);
  }
  constructor() { }

  public formatCategory(){}

}
