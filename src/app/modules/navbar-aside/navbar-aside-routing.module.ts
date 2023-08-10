import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarAsideComponent } from './navbar-aside/navbar-aside.component';

const routes: Routes = [
  {
    path:'',
    component: NavbarAsideComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarAsideRoutingModule { }
