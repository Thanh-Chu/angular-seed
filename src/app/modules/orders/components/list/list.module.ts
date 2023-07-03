import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { RouterModule } from '@angular/router';
import { PipeModule } from '@shared/pipe/pipe.module';
import { CurrencyFormationPipe } from '@shared/pipe/currency-formation.pipe';
import { HightLightDirective } from '../hight-light/hight-light.directive';
import { HightLightComponent } from './hight-light/hight-light.component';

@NgModule({
  declarations: [ListComponent,HightLightDirective, HightLightComponent],
  imports: [
    CommonModule,
    PipeModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListComponent,
      },
    ]),
  ],
})
export class ListModule {}
