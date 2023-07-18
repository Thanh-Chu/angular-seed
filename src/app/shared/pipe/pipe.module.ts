import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyFormationPipe } from './currency-formation.pipe';
// import { LocalDatePipe } from './local-date.pipe';

@NgModule({
  declarations: [CurrencyFormationPipe, ],
  imports: [CommonModule],
  exports: [CurrencyFormationPipe,],
})
export class PipeModule {}
