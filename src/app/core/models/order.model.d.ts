import type { CurrencyUnit } from './currency-unit.model';

export interface Order {
  id: number;
  name: string;
  email: string;
  total: number;
  currencyUnit: CurrencyUnit;
  status: string;
  date: string;
}
