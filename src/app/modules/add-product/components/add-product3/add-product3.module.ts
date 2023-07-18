import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProduct3Component } from './add-product3.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddProduct3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component:AddProduct3Component
      }
    ]),
    ReactiveFormsModule
  ]
})
export class AddProduct3Module { }
