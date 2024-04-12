import { IOrderDTO } from '../models';
import mockData from '../db/mock-data.json';

export class ServiceOrders {
  private readonly _orders: IOrderDTO[] = [];

  constructor() {
    this._orders = mockData;
  }

  get orders(): IOrderDTO[] {
    return this._orders;
  }
}

export const serviceOrders = new ServiceOrders();
