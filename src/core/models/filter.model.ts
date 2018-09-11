import { Languages, SortTypes } from '@core/enums';

export interface FilterModel {
  q: string;
  sources: string;
  domains: string;
  excludeDomains: string;
  from: string;
  to: string;
  language: Languages;
  sortBy: SortTypes;
  pageSize: number;
  page: number;
}
