import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Product } from 'src/products/entities/product.entity/product.entity';

@ObjectType({ description: 'Collection model.' })
export class Collection {
  @Field(() => ID, { description: 'Collection id.' })
  id: string;
  @Field(() => String, { description: 'Collection name.' })
  name: string;
  products: Product[];
}
