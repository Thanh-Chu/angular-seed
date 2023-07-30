import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'create',
    loadChildren: ()=> import('./components/create/create.module').then(m=>m.CreateModule)
  },
  {
    path: 'list',
    loadChildren: ()=> import('./components/list/list.module').then(m=>m.ListModule)
  },
  {
    path: ':abc',
    loadChildren: ()=>import('./components/detail/detail.module').then(m=>m.DetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
