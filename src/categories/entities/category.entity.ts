import { Field, ID, ObjectType } from '@nestjs/graphql';
import { VariationOption } from 'src/products/entities/product.entity/product-configuration.entity';

@ObjectType({ description: 'Product category model' })
export class ProductCategory {
  @Field(() => ID)
  id: string;
  @Field(() => String, { nullable: true })
  parent_category_id: string;
  category_name: string;
  variations: Variation[];
}

@ObjectType()
export class Variation {
  id: string;
  name: string;
  variation_options: VariationOption[];
}
