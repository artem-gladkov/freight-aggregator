import styled, { css } from 'styled-components';
import { Button as AntdButton } from 'antd';

export const Button = styled(AntdButton)<{ $width?: string; $underline?: boolean }>`
  width: ${(props) => props.$width || 'max-content'};
  padding: ${(props) => props.size || 'max-content'};

  ${({ $underline, theme }) =>
    $underline &&
    css`
      & > span {
        transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        border-bottom: 1px solid ${theme.colors.gray[100]};
      }
    `};

  ${({ type, theme: { colors } }) => {
    switch (type) {
      case 'text': {
        return css`
          color: ${colors.gray[200]};

          &:hover {
            color: ${colors.gray[300]};
            background: none !important;

            & > span {
              border-color: ${colors.gray[300]};
            }
          }

          &:disabled {
            color: ${colors.gray[100]};

            & > span {
              color: ${colors.gray[100]};
              border-color: ${colors.gray[100]};
            }
          }
        `;
      }
    }
  }}

  ${({ size, theme }) => {
    switch (size) {
      case 'large': {
        return css`
          padding: ${theme.indents.small};
          height: 56px;
        `;
      }
    }
  }}
`;
