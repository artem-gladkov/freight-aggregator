import { faker } from '@faker-js/faker';
import { IOrderDTO } from '../models';

export const createRandomOrder = (): IOrderDTO => {
  return {
    cargoInfo: {
      type: 'Строительные материалы',
      volume: `${faker.number.int({ min: 1, max: 100 })} м3.`,
      weight: `${faker.number.int({ min: 0, max: 25 })} т.`,
    },
    destinations: {
      from: { city: faker.location.city(), region: faker.location.county() },
      to: { city: faker.location.city(), region: faker.location.county() },
    },
    distance: faker.number.int({ min: 100, max: 10000 }),
    loadingDate: faker.date.soon(),
    orderNumber: faker.string.numeric(5),
    payment: {
      fuel: faker.number
        .int({
          min: 500,
          max: 5000,
        })
        .toString(),
      main: faker.number
        .int({
          min: 5000,
          max: 100000,
        })
        .toString(),
    },
    id: faker.string.uuid(),
  };
};
