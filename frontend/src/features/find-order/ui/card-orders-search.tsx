import { FC } from 'react';
import { Card } from '../../../shared/ui';
import { Formik, FormikHelpers } from 'formik';
import {
  FORM_SEARCH_ORDERS_INITIAL_VALUES,
  formSearchOrdersValidationSchema,
  IFormOrdersSearchValues,
} from '../constants';
import { EFormOrdersSearchNames } from '../constants/form-names.ts';
import { useSearchParams } from 'react-router-dom';
import { IFetchOrdersParams } from '../../../entities/order/api';
import { FormBody } from './form-body.tsx';

export interface OrderSearchProps {
  onSubmit?: (values: IFormOrdersSearchValues, helpers: FormikHelpers<IFormOrdersSearchValues>) => void;
  isDisableSubmit?: boolean;
}

export const CardOrdersSearch: FC<OrderSearchProps> = ({ onSubmit, isDisableSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (values: IFormOrdersSearchValues, helpers: FormikHelpers<IFormOrdersSearchValues>) => {
    const { from, to, loadingDate, orderNumber } = values;
    const params: IFetchOrdersParams = {
      from: from?.trim(),
      to: to?.trim(),
      loadingDate: loadingDate?.format('YYYY-MM-DD'),
      orderNumber: orderNumber?.trim(),
    };

    for (const [key, value] of Object.entries(params)) {
      if (value === undefined || value === '') {
        searchParams.delete(key);
      } else {
        searchParams.set(key, value);
      }
    }

    setSearchParams(searchParams);

    if (onSubmit && !isDisableSubmit) {
      onSubmit(values, helpers);
    }
  };

  const handleReset = () => {
    [
      EFormOrdersSearchNames.to,
      EFormOrdersSearchNames.from,
      EFormOrdersSearchNames.loadingDate,
      EFormOrdersSearchNames.orderNumber,
    ].forEach((key) => searchParams.delete(key));

    setSearchParams(searchParams);
  };

  return (
    <Card>
      <Formik
        initialValues={FORM_SEARCH_ORDERS_INITIAL_VALUES}
        onSubmit={handleSubmit}
        onReset={handleReset}
        validationSchema={formSearchOrdersValidationSchema}
      >
        <FormBody isDisableSubmit={isDisableSubmit} />
      </Formik>
    </Card>
  );
};
