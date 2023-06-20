import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempConverterPipe } from 'src/app/modules/pipes/temp-converter.pipe';

@NgModule({
  declarations: [TempConverterPipe],
  imports: [CommonModule],
  exports: [TempConverterPipe],
})
export class PipeModule {}
