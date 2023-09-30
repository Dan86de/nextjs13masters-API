import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ProductCategory } from 'src/categories/entities/category.entity';
import { Collection } from 'src/collections/entities/collection.entity';
import { ProductConfiguration } from './product-configuration.entity';

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
  collections: ProductCollection[];
  product_items: ProductItem[];
}

@ObjectType()
export class ProductCollection {
  product: Product;
  productId: string;
  collection: Collection;
  collectionId: string;
}

@ObjectType()
export class ProductItem {
  id: string;
  product_id: string;
  SKU: string;
  qty_in_stock: number;
  price: number;
  product_images: string[];
  @Field({ nullable: true })
  product_configurations: ProductConfiguration[];
}
