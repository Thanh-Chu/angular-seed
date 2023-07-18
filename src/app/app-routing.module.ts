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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
