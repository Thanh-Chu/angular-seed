import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProduct4Component } from './add-product4.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'


@NgModule({
  declarations: [
    AddProduct4Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: AddProduct4Component
      }
    ]),
    ReactiveFormsModule,
    
    MatIconModule,
  ]
})
export class AddProduct4Module { }
