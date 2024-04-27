import { Container, Space } from '../shared/ui';
import { FormSearchOrders } from '../features/find-orders';
import { useQuery } from '@tanstack/react-query';
import type { Order } from '../entities/order/types';
import { orderApi } from '../entities/order/api';
import { useSearchParams } from 'react-router-dom';
import { OrdersList } from '../entities/order/ui';

export const HomePage = () => {
  const [searchParams] = useSearchParams();

  const {
    data: orders,
    isFetching,
    isFetched,
  } = useQuery<Order[]>({
    queryKey: ['orders', ...searchParams],
    queryFn: () => {
      const { from, to, loadingDate, orderNumber } = Object.fromEntries(searchParams.entries());
      return orderApi.fetchOrders({ from, to, loadingDate, orderNumber });
    },
    initialData: [],
  });

  const isEmptyList = isFetched && orders.length === 0;

  return (
    <Container>
      <Space direction="vertical" size={16}>
        <FormSearchOrders isDisableSubmit={isFetching} />
        <OrdersList orders={orders} isLoading={isFetching} isEmpty={isEmptyList} />
      </Space>
    </Container>
  );
};
