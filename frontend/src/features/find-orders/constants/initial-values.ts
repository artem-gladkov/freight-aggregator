import { EFormOrdersSearchNames } from './form-names.ts';
import { Dayjs } from 'dayjs';

export interface FormSearchOrdersValues {
  [EFormOrdersSearchNames.from]?: string;
  [EFormOrdersSearchNames.to]?: string;
  [EFormOrdersSearchNames.loadingDate]?: Dayjs;
  [EFormOrdersSearchNames.orderNumber]?: string;
}

export const FORM_SEARCH_ORDERS_INITIAL_VALUES: FormSearchOrdersValues = {
  [EFormOrdersSearchNames.loadingDate]: undefined,
  [EFormOrdersSearchNames.from]: undefined,
  [EFormOrdersSearchNames.to]: undefined,
  [EFormOrdersSearchNames.orderNumber]: undefined,
};
