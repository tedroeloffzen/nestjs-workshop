import { Controller, Get, Param, ParseIntPipe, UsePipes } from '@nestjs/common';
import { Pizza } from '../data/pizza.data';
import { PizzaService } from '../service/pizza.service';

@Controller('pizza')
export class PizzaController {

  constructor(private readonly pizzaService: PizzaService)
  {}

  // Assignment 1: Create an endpoint that returns all pizza's using a Get-request
  getAllPizzas(): Pizza[] {
    return [];
  }

  // Assignment 2: Create an endpoint that returns a single pizza, with a specific ID, using a Get-request
  getSinglePizza(): Pizza {
    return null;
  }

  // Assignment 3: Create an endpoint that creates a new pizza using a Post-request
  createPizza(): Pizza {
    return null;
  }

  // Assignment 1: Create an endpoint that updates a pizza, with a specific ID, using a Put-request
  updatePizza(): Pizza {
    return null;
  }

  // Assignment 5: Create an endpoint that deletes a pizza, with a specific ID, using a Delete-request
  deletePizza(): void {
    return;
  }
}
