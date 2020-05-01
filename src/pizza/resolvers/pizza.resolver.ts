import { Args, Mutation, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import { Ingredient, Pizza } from '../data/pizza.data';
import { PizzaService } from '../service/pizza.service';
import { UseGuards } from '@nestjs/common';
import { GraphqlAuthGuard } from '../auth/auth.guard';

@Resolver('Pizza')
@UseGuards(GraphqlAuthGuard)
export class PizzaResolver {
  constructor(private readonly pizzaService: PizzaService) {
  }

  @Query('pizzas')
  getAllPizzas(): Pizza[] {
    return this.pizzaService.getAllPizzas()
  }

  @Query('pizza')
  getSinglePizza(@Args('id') id: number): Pizza {
    return this.pizzaService.getSinglePizza(id);
  }

  @Mutation('pizzaCreate')
  createPizza(@Args('pizza') pizzaData: Pizza): Pizza {
    return this.pizzaService.createPizza(pizzaData);
  }

  @Mutation('pizzaUpdate')
  updatePizza(@Args('id') id: number, @Args('pizza') pizzaData: Pizza): Pizza {
    return this.pizzaService.updatePizza(id, pizzaData);
  }

  @Mutation('pizzaDelete')
  deletePizza(@Args('id') id: number): boolean {
    this.pizzaService.deletePizza(id);
    return true;
  }

  @ResolveProperty('ingredients')
  getIngredients(@Parent() pizza: Pizza): Ingredient[] {
    return pizza.ingredients.filter(ingredient => ingredient.id % 2 === 0);
  }
}
