import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ProductCategory } from './product-category.entity';

@ObjectType({ description: 'Product model.' })
export class Product {
  @Field(() => ID, { description: 'Product id.' })
  id: string;
  @Field({ description: 'Product name.' })
  name: string;
  @Field({ description: 'Product description.' })
  description: string;
  @Field({ description: 'Product category.' })
  category: ProductCategory;
  @Field({ description: 'Product category id.' })
  category_id: string;
  @Field({ description: 'Product image.' })
  product_image: string;
}
