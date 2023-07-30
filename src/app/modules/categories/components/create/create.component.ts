import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from '../../categories.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent implements OnInit {
  public formCategory: FormGroup;
  public categories: Category[]

  public constructor(private _formBuilder: FormBuilder,
    private _categoryService: CategoriesService
    ){}
  ngOnInit(): void {
    this.formCategory = this.createFormCategory({} as Category)
  }

  public createFormCategory(category: Category):FormGroup{
    return this._formBuilder.group({
      name: this._formBuilder.control('',[Validators.required]),
      slug: this._formBuilder.control('',[Validators.required]),
      description: this._formBuilder.control('',[Validators.required]),
      parent: this._formBuilder.control('',[Validators.required])
    })
  }

  public onSubmit():void{
    console.log(this.formCategory.value);
    
  }
}
