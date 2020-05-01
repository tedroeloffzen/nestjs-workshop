export interface Ingredient {
  id: number;
  name: string;
}

export interface Pizza {
  id?: number;
  name: string;
  description: string;
  price: number;
  ingredients?: Ingredient[];
}

const DEFAULT_DATA: Pizza[] = [{
  id: 1,
  name: 'Hawaï',
  description: 'Pineapple and ham',
  price: 5.99,
  ingredients: [{
    id: 1,
    name: 'Tomato sauce'
  },
  {
    id: 2,
    name: 'Mozarella'
  }]
}, {
  id: 2,
  name: 'Salami',
  description: 'Salami',
  price: 4.99,
  ingredients: [{
    id: 1,
    name: 'Tomato sauce'
  },
    {
      id: 2,
      name: 'Mozarella'
    },
    {
      id: 7,
      name: 'Salami'
    }
  ]
}, {
  id: 3,
  name: 'Tonno',
  description: 'Tuna',
  price: 5.99,
  ingredients: [{
    id: 1,
    name: 'Tomato sauce'
  },
    {
      id: 2,
      name: 'Mozarella'
    },
    {
      id: 6,
      name: 'Tuna'
    }
  ]
}, {
  id: 4,
  name: 'Salmone',
  description: 'Salmon',
  price: 5.99,
  ingredients: [{
  id: 1,
    name: 'Tomato sauce'
  },
    {
      id: 2,
      name: 'Mozarella'
    },
    {
      id: 5,
      name: 'Salmon'
    }
  ]
}, {
  id: 5,
  name: 'Proscuitto e funghi',
  description: 'Ham and mushrooms',
  price: 4.49,
  ingredients: [{
    id: 1,
    name: 'Tomato sauce'
  },
    {
      id: 2,
      name: 'Mozarella'
    },
    {
      id: 3,
      name: 'Ham'
    },
    {
      id: 4,
      name: 'Mushroom'
    }
  ]
}, {
  id: 6,
  name: 'Diavola',
  description: 'Spicy with salami',
  price: 6.49,
  ingredients: [{
    id: 1,
    name: 'Tomato sauce'
  },
    {
      id: 2,
      name: 'Mozarella'
    }, {
    id: 4,
      name: 'Mushroom'
  }, {
    id: 7,
      name: 'Salami'
    }, {
      id: 8,
      name: 'Jalapeño'
    }]
}];

export default DEFAULT_DATA;
