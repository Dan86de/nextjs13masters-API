import { Field, ID, ObjectType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';
import { Category } from './category.entity';
import { Collection } from './collection.entity';

@ObjectType({ description: 'Product model' })
export class Product {
  @Field(() => ID, { description: 'An unique identifier' })
  id: string;
  @MinLength(3)
  @Field(() => String, { description: 'A new product name.' })
  name: string;
  description: string;
  price: number;
  image: string;
  @Field(() => [Category], {
    description: 'A list of categories for this product.',
  })
  category: Category[];
  @Field(() => [Collection], {
    description: 'A list of collections for this product.',
  })
  collection: Collection[];
  createdAt: Date;
  updatedAt: Date;
}
