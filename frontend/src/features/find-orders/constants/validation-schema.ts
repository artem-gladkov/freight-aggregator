import { object, string, date, number } from 'yup';
import { EFormOrdersSearchNames } from './form-names.ts';

export const formSearchOrdersValidationSchema = object({
  [EFormOrdersSearchNames.orderNumber]: number().min(10),
  [EFormOrdersSearchNames.loadingDate]: date(),
  [EFormOrdersSearchNames.from]: string(),
  [EFormOrdersSearchNames.to]: string(),
});
