import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from '../../categories.service';
import { ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  public categories: Category[]
  private _subscription: Subscription
  
  public constructor(
      private _categoriesService:CategoriesService,
      private _changeDetectorRef: ChangeDetectorRef
    ){}


  ngOnInit(): void {
      this.getCategories()
  }

  public getCategories(){
    this._subscription = this._categoriesService.getCategory().subscribe((data) => {
      console.log(data);
      this.categories = data;
      this._changeDetectorRef.detectChanges();
    });
  }
}
