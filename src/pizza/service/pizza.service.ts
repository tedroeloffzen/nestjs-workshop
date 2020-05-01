import { Injectable, NotFoundException } from '@nestjs/common';
import DEFAULT_DATA, { Pizza } from '../data/pizza.data';

@Injectable()
export class PizzaService {
  private pizzas: Pizza[] = DEFAULT_DATA;

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

  public createPizza(): Pizza {
    return null;
  }

  public updatePizza(): Pizza {
    return null;
  }

  public deletePizza(): void {
    return;
  }
}
