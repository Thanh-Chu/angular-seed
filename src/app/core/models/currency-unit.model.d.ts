import { SupportedCurrency } from '@constants';

export interface CurrencyUnit {
  symbol: string;
  name: string;
  code: SupportedCurrency;
}


/**
 * date, formation
 * formation === 'DD/MM/YYYY' => 39/09/2023
 * formation === 'MM/DD/YYYY' => 09/30/2023
 */