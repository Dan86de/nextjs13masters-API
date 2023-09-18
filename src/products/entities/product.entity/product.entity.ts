import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Product model' })
export class Product {
  @Field(() => ID, { description: 'An unique identifier' })
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}
