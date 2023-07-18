import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: EditComponent
      }
    ])
  ]
})
export class EditModule { }
