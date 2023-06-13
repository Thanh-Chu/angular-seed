import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConverter',
})
export class TempConverterPipe implements PipeTransform {
  transform(value: number): number {
    return value * 23300;
  }
}
