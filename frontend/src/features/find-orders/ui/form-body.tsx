import styled from 'styled-components';
import { Button, centeredByTransform, DatePicker, Input, Title } from '../../../shared/ui';
import { FC, useEffect } from 'react';
import { FormSearchOrdersValues } from '../constants';
import { EFormOrdersSearchNames, FORM_SEARCH_ORDERS_NAMES } from '../constants/form-names.ts';
import dayjs, { Dayjs } from 'dayjs';
import { Field, FieldProps, Form, useFormikContext } from 'formik';
import SwapIcon from '../../../shared/ui/icons/swap.svg?react';

const FormStyled = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 268px;
  grid-template-rows: 1fr 1fr 56px;
  gap: ${({ theme }) => theme.indents.medium};
  align-items: center;
`;

const ButtonReset = styled(Button)`
  justify-self: end;
  padding: 0;
`;

const ButtonSwap = styled(Button)`
  ${centeredByTransform};

  z-index: 1;
`;

const DestinationFields = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  gap: 18px;
  position: relative;
`;

interface FormBodyProps {
  isDisableSubmit?: boolean;
}

export const FormBody: FC<FormBodyProps> = ({ isDisableSubmit }) => {
  const { setValues, values } = useFormikContext<FormSearchOrdersValues>();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    void setValues((formValues) => {
      for (const fieldName of FORM_SEARCH_ORDERS_NAMES) {
        const valueFromSearchParams = params.get(fieldName);
        if (!valueFromSearchParams) {
          continue;
        }

        if (fieldName === EFormOrdersSearchNames.loadingDate) {
          formValues[fieldName] = dayjs(valueFromSearchParams);
        } else {
          formValues[fieldName] = valueFromSearchParams;
        }
      }

      return formValues;
    });
  }, [setValues]);

  const onSwapDestination = () => {
    void setValues((formValues) => ({
      ...formValues,
      [EFormOrdersSearchNames.from]: values[EFormOrdersSearchNames.to],
      [EFormOrdersSearchNames.to]: values[EFormOrdersSearchNames.from],
    }));
  };

  return (
    <FormStyled>
      <Title>Поиск грузов</Title>
      <Field name={EFormOrdersSearchNames.orderNumber}>
        {({ field, meta: { error, touched } }: FieldProps) => (
          <Input type="number" placeholder="№ заказа" $isError={!!error && touched} {...field} />
        )}
      </Field>
      <DestinationFields>
        <Field name={EFormOrdersSearchNames.from}>
          {({ field, meta: { error, touched } }: FieldProps) => (
            <Input placeholder="Откуда" $width="100%" $isError={!!error && touched} {...field} />
          )}
        </Field>
        <ButtonSwap shape="circle" icon={<SwapIcon />} onClick={onSwapDestination} />
        <Field name={EFormOrdersSearchNames.to}>
          {({ field, meta: { error, touched } }: FieldProps) => (
            <Input placeholder="Куда" $width="100%" $isError={!!error && touched} {...field} />
          )}
        </Field>
      </DestinationFields>
      <Field name={EFormOrdersSearchNames.loadingDate}>
        {({
          field: { value, name },
          form: { setFieldValue, setTouched },
          meta: { error, touched },
        }: FieldProps<Dayjs, FormSearchOrdersValues>) => {
          const handleChange = (date: unknown) => {
            void setTouched({ [name]: true });
            void setFieldValue(name, date);
          };

          const isError = !!error && error.length > 0 && touched;

          return (
            <DatePicker
              value={value}
              disabledDate={(current) => current.add(1, 'day') < dayjs()}
              format="DD-MM-YYYY"
              onChange={handleChange}
              size="large"
              $isError={isError}
            />
          );
        }}
      </Field>
      <ButtonReset htmlType="reset" type="text" size="large" $underline disabled={isDisableSubmit}>
        Сбросить фильтры
      </ButtonReset>
      <Button htmlType="submit" type="primary" size="large" $width="100%" disabled={isDisableSubmit}>
        Поиск
      </Button>
    </FormStyled>
  );
};
