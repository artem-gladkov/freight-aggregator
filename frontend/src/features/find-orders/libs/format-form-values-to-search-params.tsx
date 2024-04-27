import { FormSearchOrdersValues } from '../constants';
import { FetchOrdersParams } from '../../../entities/order/api';

export const formatFormValuesToSearchParams = ({
  from,
  to,
  loadingDate,
  orderNumber,
}: FormSearchOrdersValues): FetchOrdersParams => ({
  from: from?.trim(),
  to: to?.trim(),
  loadingDate: loadingDate?.format('YYYY-MM-DD'),
  orderNumber,
});
