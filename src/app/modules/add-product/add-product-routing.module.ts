import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'add-product1',
    loadChildren:()=> import('./components/add-product1/add-product1.module').then(m=>m.AddProduct1Module)
  },
  {
    path:'add-product2',
    loadChildren:()=> import('./components/add-product2/add-product2.module').then(m=>m.AddProduct2Module)
  },
  {
    path:'add-product3',
    loadChildren: ()=> import('./components/add-product3/add-product3.module').then(m=>m.AddProduct3Module)
  },
  {
    path:'add-product4',
    loadChildren: ()=> import('./components/add-product4/add-product4.module').then(m=>m.AddProduct4Module)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddProductRoutingModule { }
