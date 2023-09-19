import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Product } from './product.entity';

@ObjectType({ description: 'Collection model' })
export class Collection {
  @Field(() => ID, { description: 'An unique identifier' })
  id: string;
  name: string;
  @Field(() => [Product], {
    description: 'A list of products for this collection',
  })
  products: Product[];
  createdAt: Date;
  updatedAt: Date;
}
