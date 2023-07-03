import { Order as OrderCore } from 'src/app/core';
import type { CurrencyUnit } from './currency-unit.model';

export interface Order extends OrderCore {
  formationTotal?: string;
  formationDate?: string;
}