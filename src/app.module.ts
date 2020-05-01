import { Module } from '@nestjs/common';
import { PizzaModule } from './pizza/pizza.module';

@Module({
  imports: [PizzaModule]
})
export class AppModule {}
