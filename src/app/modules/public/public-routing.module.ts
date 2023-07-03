import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddStaffComponent } from './add-staff/add-staff.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormAddressComponent } from './form-address/form-address.component';
import { FormSkillComponent } from './form-skill/form-skill.component';
import { FormStaffComponent } from './form-staff/form-staff.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { OrderList1Component } from './order-list1/order-list1.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'form-skill',
        component: FormSkillComponent,
      },
      {
        path: 'form-staff',
        component: FormStaffComponent,
      },
      {
        path: 'form-address',
        component: FormAddressComponent,
      },
      {
        path: 'add-staff',
        component: AddStaffComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'index',
        component: IndexComponent,
      },
      {
        path: 'page-order-1',
        component: OrderList1Component,
      },
      {
        path: 'page-product-1',
        component: Product1Component,
      },
      {
        path: 'page-product-2',
        component: Product2Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
