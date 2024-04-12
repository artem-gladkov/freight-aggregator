import { Router } from 'express';
import { serviceOrders } from '../services';

export const ordersRouter = Router();

interface QueryParams {
  from?: string;
  to?: string;
  loadingDate?: string;
  orderNumber?: string;
}
ordersRouter.get<'/orders', {}, unknown, unknown, QueryParams>('/orders', (req, res) => {
  const {
    query: { from, to, loadingDate, orderNumber },
  } = req;
  let orders = [...serviceOrders.orders];

  if (from) {
    orders = orders.filter(
      ({ destinations }) =>
        destinations.from.region?.toLowerCase().includes(from.trim().toLowerCase()) ||
        destinations.from.city?.toLowerCase().includes(from.trim().toLowerCase()),
    );
  }

  if (to) {
    orders = orders.filter(
      ({ destinations }) =>
        destinations.to.region?.toLowerCase().includes(to.trim().toLowerCase()) ||
        destinations.to.city?.toLowerCase().includes(to.trim().toLowerCase()),
    );
  }

  if (loadingDate) {
    orders = orders.filter((order) => {
      return order.loadingDate.split('T')[0] === loadingDate;
    });
  }

  if (orderNumber) {
    orders = orders.filter((order) => order.orderNumber === orderNumber);
  }

  res.status(200).json(orders);
});
