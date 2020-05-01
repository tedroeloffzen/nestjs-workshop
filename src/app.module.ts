import { Module } from '@nestjs/common';
import { PizzaModule } from './pizza/pizza.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [PizzaModule,
  GraphQLModule.forRoot({
    context: ({ req }) => ({ req }),
    debug: true,
    typePaths: [__dirname.replace(/\\/g, '/') + '/../**/*.graphql']
    })
  ]
})
export class AppModule {}
