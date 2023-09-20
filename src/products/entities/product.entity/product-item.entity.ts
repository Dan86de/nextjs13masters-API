import { ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Product item model' })
export class ProductItem {
  id: string;
  productId: string;
  SKU: string;
  qtyInStock: number;
  price: number;
  productImages: string[];
}
