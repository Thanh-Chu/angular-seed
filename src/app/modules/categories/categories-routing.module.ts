import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: () => import('./components/list/list.module').then(m=>m.ListModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./components/edit/edit.module').then(m=>m.EditModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./components/create/create.module').then(m=>m.CreateModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
