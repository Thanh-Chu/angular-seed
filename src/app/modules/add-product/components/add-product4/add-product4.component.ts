import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product2 } from 'src/app/models/add-product2.model';

@Component({
  selector: 'app-add-product4',
  templateUrl: './add-product4.component.html',
  styleUrls: ['./add-product4.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddProduct4Component implements OnInit {
  public product4Form:FormGroup;
  public isSubmit = false;

  public constructor(private _formBuilder: FormBuilder){}


  ngOnInit(): void {
      this.product4Form= this.createFormProduct4({} as Product2);
  }
  
  public createFormProduct4(_:Product2):FormGroup{
    return this._formBuilder.group({
      title: this._formBuilder.control('',[Validators.required]),
      description:this._formBuilder.control('',[Validators.required]),
      brand: this._formBuilder.control('',[Validators.required]),
      price: this._formBuilder.control('',[Validators.required]),
      category: this._formBuilder.control('',[Validators.required]),
      images: this._formBuilder.control('',[Validators.required]),
    })
  }

  public onSubmit():void{
    console.log( this.product4Form.value);
    this.isSubmit = true;
  }
}
