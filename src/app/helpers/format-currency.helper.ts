import { CurrencyUnit } from '../modules/orders/models/currency-unit.model';

export const formatCurrency = (total: number, currencyUnit?: CurrencyUnit) => {
  // if (currencyUnit=== undefined){
  //   return `$${total}` 
  // }
  // const name = currencyUnit ? currencyUnit.name : undefined;
  switch (currencyUnit?.name) {
    case 'USDollar': {
      return `${currencyUnit.symbol}${total}`;
    }
    case 'VietnamDong': {
      return `${total}000${currencyUnit.symbol}`;
    }
    default: {
      return `$${total}`;
    }
  }
  
};
