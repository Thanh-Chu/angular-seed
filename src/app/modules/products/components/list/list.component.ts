import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  public products: Product[]
  private _subscription: Subscription;
  
  public constructor(
    private _productService: ProductsService,
    private _changeDetectorRef: ChangeDetectorRef
  ){}

  ngOnInit(): void {
      this.getProducts()
  }

  public getProducts(){
    this._subscription = this._productService.getProducts().subscribe((data)=>{
      console.log(data);
      
      this.products= data;
      this._changeDetectorRef.detectChanges()
    })
  }
}
