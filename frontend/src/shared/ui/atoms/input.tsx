import styled from 'styled-components';
import { Input as AntdInput } from 'antd';

export const Input = styled(AntdInput)<{ $width?: string; $isError?: boolean }>`
  border-radius: ${({ theme }) => theme.borderRadius.small};
  max-width: ${({ $width }) => $width || '268px'};
  padding: ${({ theme }) => theme.indents.small || '268px'};
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: 1;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  height: 48px;
  font-weight: 500;
  border-color: ${({ $isError, value, theme }) => {
    if ($isError) return theme.colors.error;
    if (!$isError && value) return theme.colors.success;
  }};

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    display: none;
    -webkit-appearance: none;
  }
`;
