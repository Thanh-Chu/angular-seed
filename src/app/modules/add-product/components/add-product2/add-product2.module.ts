import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProduct2Component } from './add-product2.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddProduct2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: AddProduct2Component
      }
    ]),
    ReactiveFormsModule
  ]
})
export class AddProduct2Module { }
