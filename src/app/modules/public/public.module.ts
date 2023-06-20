import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormSkillComponent } from './form-skill/form-skill.component';
import { FormAddressComponent } from './form-address/form-address.component';
import { FormStaffComponent } from './form-staff/form-staff.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { OrderList1Component } from './order-list1/order-list1.component';
import { OrderList2Component } from './order-list2/order-list2.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';

@NgModule({
  declarations: [
    RegisterComponent,
    SignInComponent,
    FormSkillComponent,
    FormAddressComponent,
    FormStaffComponent,
    AddStaffComponent,
    LoginComponent,
    DashboardComponent,
    IndexComponent,
    OrderList1Component,
    OrderList2Component,
    Product1Component,
    Product2Component,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class PublicModule {}
