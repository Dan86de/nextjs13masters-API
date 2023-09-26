import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PromotionProduct } from '../promotion.entity/promotion-product.entity';
import { ProductCategory } from './product-category.entity';
import { ProductCollection } from './product-collection.entity';
import { ProductItem } from './product-item.entity';

@ObjectType({ description: 'Product model' })
export class Product {
  @Field(() => ID)
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  categoryId: string;
  collections: ProductCollection[];
  productImage: string;
  productItems: ProductItem[];
  productPromotions: PromotionProduct[];
}
