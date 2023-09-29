import { ObjectType } from '@nestjs/graphql';
import { ProductItem } from './product.entity';

@ObjectType()
export class VariationOption {
  id: string;
  value: string;
  product_categoryId: string;
}

@ObjectType({ description: 'Product configuration model' })
export class ProductConfiguration {
  product: ProductItem;
  product_item_id: string;
  variation_option: VariationOption;
  variation_option_id: string;
}
