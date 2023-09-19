import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Product } from './product.entity';

@ObjectType({ description: 'Category model' })
export class Category {
  @Field(() => ID, { description: 'An unique identifier' })
  id: string;
  name: string;
  @Field(() => [Product], {
    description: 'A list of products for this category',
  })
  products: Product[];
  createdAt: Date;
  updatedAt: Date;
}
