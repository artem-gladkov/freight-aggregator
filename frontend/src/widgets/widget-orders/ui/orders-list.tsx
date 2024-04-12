import { OrderCard } from '../../../entities/order/ui';
import { Loader } from '../../../shared/ui';
import Empty from 'antd/es/empty/empty';
import { Virtuoso } from 'react-virtuoso';
import styled, { css } from 'styled-components';
import { Order } from '../../../entities/order/types';
import { FC } from 'react';

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
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Scroller = styled.div`
  ${({ theme: { colors } }) => css`
    &::-webkit-scrollbar {
      height: 15px;
      width: 15px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 5px;
      background-color: #1e1e1e;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: ${colors.primary};
    }
  `}
`;

interface OrdersListProps {
  orders: Order[];
  isLoading: boolean;
  isEmpty: boolean;
}

const EmptyStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const OrdersList: FC<OrdersListProps> = ({ orders, isLoading, isEmpty }) => {
  return (
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
              components={{ List, Scroller }}
              itemContent={(index) => <OrderCard order={orders[index]} />}
            />
          )}
        </>
      )}
    </Wrapper>
  );
};
