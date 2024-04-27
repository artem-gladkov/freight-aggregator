import styled, { css } from 'styled-components';
import { DatePicker as AntdDatePicker } from 'antd';

export const DatePicker = styled(AntdDatePicker)<{ $isError?: boolean }>`
  border-color: ${({ theme: { colors }, $isError, value }) => {
    if ($isError) return colors.error;
    if (!$isError && value) return colors.success;

    return colors.gray[200];
  }};
  input {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.s} !important;
  }

  ${({ size }) => {
    switch (size) {
      case 'large':
        return css`
          height: 48px;
        `;
    }
  }}
`;
