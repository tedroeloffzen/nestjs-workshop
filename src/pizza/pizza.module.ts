import { Module } from '@nestjs/common';
import { PizzaController } from './controller/pizza.controller';
import { PizzaService } from './service/pizza.service';
import { PizzaResolver } from './resolvers/pizza.resolver';
import { DefaultAuthGuard, GraphqlAuthGuard } from './auth/auth.guard';

@Module({
  controllers: [PizzaController],
  providers: [PizzaService, PizzaResolver, DefaultAuthGuard, GraphqlAuthGuard]
})
export class PizzaModule {}
