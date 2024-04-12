export interface Destination {
  city?: string;
  region?: string;
}

export interface CargoInfo {
  type: string;
  volume: string;
  weight: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  destinations: {
    from: Destination;
    to: Destination;
  };
  distance: number;
  cargoInfo: CargoInfo;
  loadingDate: string;
  payment: {
    main: string;
    fuel: string;
  };
}
