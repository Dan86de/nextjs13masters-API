import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Product } from './product.entity';

@ObjectType({ description: 'Product collection model' })
export class ProductCollection {
  @Field(() => ID)
  id: string;
  name: string;
  Products: Product[];
}
