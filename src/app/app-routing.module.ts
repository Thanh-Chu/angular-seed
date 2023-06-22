import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./modules/orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path:'categories',
    loadChildren: () => import('./modules/categories/categories.module').then(m=>m.CategoriesModule)
  },
  {
    path: 'products',
    loadChildren: ()=> import('./modules/products/products.module').then(m=>m.ProductsModule)
  },
  {
    path: 'navbar',
    loadChildren: ()=>import('./modules/navbar-aside/navbar-aside.module').then(m=>m.NavbarAsideModule)
  },
  {
    path:'',
    loadChildren: ()=> import('./modules/add-product/add-product.module').then(m=>m.AddProductModule)
  },
  {
    path:'',
    loadChildren: ()=> import('./modules/pagination/pagination.module').then(m=>m.PaginationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
