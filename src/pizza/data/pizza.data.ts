export interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
}

const DEFAULT_DATA: Pizza[] = [{
  id: 1,
  name: 'Hawaï',
  description: 'Pineapple and ham',
  price: 5.99
}, {
  id: 2,
  name: 'Salami',
  description: 'Salami',
  price: 4.99
}, {
  id: 3,
  name: 'Tonno',
  description: 'Tuna',
  price: 5.99
}, {
  id: 4,
  name: 'Salmone',
  description: 'Salmon',
  price: 5.99
}, {
  id: 1,
  name: 'Proscuitto e funghi',
  description: 'Ham and mushrooms',
  price: 4.49
}];

export default DEFAULT_DATA;
