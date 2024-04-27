import { OrderCard } from './index.ts';
import { Loader } from '../../../shared/ui';
import Empty from 'antd/es/empty/empty';
import { Virtuoso } from 'react-virtuoso';
import styled from 'styled-components';
import { Order } from '../types';
import { FC } from 'react';
import { centeredByTransform } from '../../../shared/ui';

const List = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.indents.small};
  padding: 0 ${({ theme }) => theme.indents.small} 0 0;
`;

const Wrapper = styled.div`
  position: relative;
  height: 600px;
`;

const CenteredLoader = styled(Loader)`
  ${centeredByTransform}
`;

const EmptyStyled = styled.div`
  ${centeredByTransform}
`;

interface OrdersListProps {
  orders: Order[];
  isLoading: boolean;
  isEmpty: boolean;
}

export const OrdersList: FC<OrdersListProps> = ({ orders, isLoading, isEmpty }) => (
  <Wrapper>
    {isEmpty ? (
      <EmptyStyled>
        <Empty />
      </EmptyStyled>
    ) : (
      <>
        {isLoading ? (
          <CenteredLoader />
        ) : (
          <Virtuoso
            totalCount={orders.length}
            components={{ List }}
            itemContent={(index) => <OrderCard order={orders[index]} />}
          />
        )}
      </>
    )}
  </Wrapper>
);
