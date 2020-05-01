import { Injectable, NotFoundException } from '@nestjs/common';
import DEFAULT_DATA, { Pizza } from '../data/pizza.data';

@Injectable()
export class PizzaService {
  private pizzas: Pizza[] = DEFAULT_DATA;
  private highestId: number;

  constructor() {
    this.highestId = this.pizzas.reduce(
      (max, pizza) => (pizza.id > max ? pizza.id : max),
      this.pizzas[0].id
    );
  }

  public getAllPizzas(): Pizza[] {
    return this.pizzas;
  }

  public getSinglePizza(pizzaId: number): Pizza {
    const pizza = this.pizzas.find((pizza) => pizza.id === pizzaId);
    if (!pizza) {
      throw new NotFoundException();
    }
    return pizza;
  }

  public createPizza(pizza: Pizza): Pizza {
    const newPizza = {
      ...pizza,
      id: this.getNextId()
    }
    this.pizzas.push(newPizza);
    return newPizza;
  }

  public updatePizza(pizzaId: number, pizzaData: Pizza): Pizza {
    const index = this.pizzas.findIndex(p => p.id === pizzaId);
    if (index === -1) {
      throw new NotFoundException();
    }

    this.pizzas[index] = {
      ...pizzaData,
      id: pizzaId
    }
    return this.pizzas[index];
  }

  public deletePizza(pizzaId: number): void {
    const pizza = this.getSinglePizza(pizzaId);
    this.pizzas = this.pizzas.filter(pizza => pizza.id !== pizzaId);
    return;
  }

  private getNextId(): number {
    return ++this.highestId;
  }
}
