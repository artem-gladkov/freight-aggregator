import { Order } from '../types';
import { httpClient } from '../../../shared/api';

export interface IFetchOrdersParams {
  /**
   * Timestamp
   */
  loadingDate?: string;
  from?: string;
  to?: string;
  orderNumber?: string;
}

class OrderApi {
  fetchOrders = async (params?: IFetchOrdersParams): Promise<Order[]> => {
    return httpClient('/orders', { params }).then((resp) => resp.data);
  };
}

export const orderApi = new OrderApi();
