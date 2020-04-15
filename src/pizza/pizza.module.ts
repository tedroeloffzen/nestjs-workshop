import { Module } from '@nestjs/common';
import { PizzaController } from './controller/pizza.controller';
import { PizzaService } from './service/pizza.service';

@Module({
  controllers: [PizzaController],
  providers: [PizzaService]
})
export class PizzaModule {}
