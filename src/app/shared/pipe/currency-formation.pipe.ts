import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyUnit } from '../../modules/orders/models/currency-unit.model';
import { formatCurrency } from 'src/app/helpers';

@Pipe({
  name: 'currencyFormation',
})
export class CurrencyFormationPipe implements PipeTransform {
  public transform(total: number, currencyUnit?: CurrencyUnit): string {
    const result = formatCurrency(total, currencyUnit);
    return result;
    // // if (currencyUnit.name === 'USDollar') {
    // //   return `${currencyUnit.symbol}${total}`;
    // // }
    // // if (currencyUnit.name === 'VietnamDong') {
    // //   return `${total}000${currencyUnit.symbol}`;
    // // }

    // // return `${total}${currencyUnit.symbol}`;
    // // switch (currencyUnit.name) {
    // //   case 'USDollar':
    // //     return `${currencyUnit.symbol}${total}`;
    // //   case 'VietnamDong':
    // //     return `${total}000${currencyUnit.symbol}`;
    // //     break;
    // //   default:
    // //     `${total}${currencyUnit.symbol}`;
    // // }
    // switch (currencyUnit.name) {
    //   case 'USDollar': {
    //     return `${currencyUnit.symbol}${total}`;
    //   }
    //   case 'VietnamDong': {
    //     return `${total}000${currencyUnit.symbol}`;
    //   }
    //   default: {
    //     return `${total}${currencyUnit.symbol}`;
    //   }
    // }
  }
}

/**
 * 9,vnd => 9000d
 * 9,$ => $9
 * 9, CNY => 9CNY
 */
