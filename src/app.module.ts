import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { CollectionsResolver } from './collections/collections.resolver';
import { CollectionsService } from './collections/collections.service';
import { CollectionsModule } from './collections/collections.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ProductsModule,
    CategoriesModule,
    CollectionsModule,
  ],
  controllers: [AppController],
  providers: [AppService, CollectionsResolver, CollectionsService],
})
export class AppModule {}
