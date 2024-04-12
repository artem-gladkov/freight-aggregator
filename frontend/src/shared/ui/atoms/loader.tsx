import { LoadingOutlined } from '@ant-design/icons';
import { FC, forwardRef } from 'react';
import styled from 'styled-components';

interface LoaderProps {
  loadingText?: string;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, max-content);
    justify-content: center;
  width: max-content;
  gap: 8px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary}}
`;

const Spin = styled(LoadingOutlined)`
  margin: 0 auto;
  font-size: 24px;
`;

const LoadingText = styled.span`
  font-size: 24px;
`;

export const Loader: FC<LoaderProps> = forwardRef<HTMLDivElement, LoaderProps>(
  ({ loadingText = 'Загрузка...', ...restProps }, ref) => {
    return (
      <Wrapper ref={ref} {...restProps}>
        <Spin spin />
        {loadingText && <LoadingText>{loadingText}</LoadingText>}
      </Wrapper>
    );
  },
);
