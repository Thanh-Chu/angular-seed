import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyFormationPipe } from './currency-formation.pipe';
import { FormatDatePipe } from './format-date.pipe';
import { LocalDatePipe } from './local-date.pipe';

@NgModule({
  declarations: [CurrencyFormationPipe, FormatDatePipe, LocalDatePipe],
  imports: [CommonModule],
  exports: [CurrencyFormationPipe, FormatDatePipe, LocalDatePipe],
})
export class PipeModule {}
