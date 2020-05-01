import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post, Put, UseGuards,
  UsePipes,
} from '@nestjs/common';
import { Pizza } from '../data/pizza.data';
import { PizzaService } from '../service/pizza.service';
import { DefaultAuthGuard } from '../auth/auth.guard';

@Controller('pizza')
@UseGuards(DefaultAuthGuard)
export class PizzaController {

  constructor(private readonly pizzaService: PizzaService)
  {}

  // Assignment 1: Create an endpoint that returns all pizza's using a Get-request
  @Get()
  getAllPizzas(): Pizza[] {
    return this.pizzaService.getAllPizzas();
  }

  // Assignment 2: Create an endpoint that returns a single pizza, with a specific ID, using a Get-request
  @Get(':id')
  getSinglePizza(@Param('id', new ParseIntPipe()) id: number): Pizza {
    return this.pizzaService.getSinglePizza(id);
  }

  // Assignment 3: Create an endpoint that creates a new pizza using a Post-request
  @Post()
  createPizza(@Body() pizza: Pizza): Pizza {
    if (pizza.id) {
      throw new BadRequestException('ID mag niet meegestuurd worden.');
    }
    return this.pizzaService.createPizza(pizza);
  }

  // Assignment 1: Create an endpoint that updates a pizza, with a specific ID, using a Put-request
  @Put(':id')
  updatePizza(@Param('id', new ParseIntPipe()) id: number, @Body() pizza: Pizza): Pizza {
    return this.pizzaService.updatePizza(id, pizza);
  }

  // Assignment 5: Create an endpoint that deletes a pizza, with a specific ID, using a Delete-request
  @Delete(':id')
  deletePizza(@Param('id', new ParseIntPipe()) id: number): void {
    this.pizzaService.deletePizza(id);
    return;
  }
}
