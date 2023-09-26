import { Field, ID, ObjectType } from '@nestjs/graphql';
import { VariationOption } from '../variation.entity/variation-option';
import { ProductItem } from './product-item.entity';

@ObjectType({ description: 'Product configuration model' })
export class ProductConfiguration {
  @Field(() => ID)
  id: string;
  productItem: ProductItem;
  productItemId: string;
  variationOption: VariationOption;
  variationOptionId: string;
}
