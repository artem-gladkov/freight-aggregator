import { FC, useCallback } from 'react';
import { Card } from '../../../shared/ui';
import { Formik } from 'formik';
import {
  FORM_SEARCH_ORDERS_INITIAL_VALUES,
  formSearchOrdersValidationSchema,
  FormSearchOrdersValues,
} from '../constants';
import { FORM_SEARCH_ORDERS_NAMES } from '../constants/form-names.ts';
import { useSearchParams } from 'react-router-dom';
import { FormBody } from './form-body.tsx';
import { formatFormValuesToSearchParams } from '../libs';

export interface FormSearchOrdersProps {
  isDisableSubmit?: boolean;
}

export const FormSearchOrders: FC<FormSearchOrdersProps> = ({ isDisableSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = useCallback(
    (values: FormSearchOrdersValues) => {
      const paramsFromValues = formatFormValuesToSearchParams(values);

      FORM_SEARCH_ORDERS_NAMES.forEach((key) => {
        const paramValue = paramsFromValues[key];

        if (paramValue === undefined || paramValue === '') {
          searchParams.delete(key);
        } else {
          searchParams.set(key, paramValue);
        }
      });

      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  const handleReset = useCallback(() => {
    FORM_SEARCH_ORDERS_NAMES.forEach((key) => searchParams.delete(key));
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  return (
    <Card>
      <Formik
        onSubmit={handleSubmit}
        onReset={handleReset}
        initialValues={FORM_SEARCH_ORDERS_INITIAL_VALUES}
        validationSchema={formSearchOrdersValidationSchema}
      >
        <FormBody isDisableSubmit={isDisableSubmit} />
      </Formik>
    </Card>
  );
};
