import { Field, ID, ObjectType } from '@nestjs/graphql';
import { OrderLine } from '../order-line.entity/order-line.entity';
import { ShoppingCartItem } from '../shopping-cart.entity.ts/shopping-cart-item.entity';
import { ProductConfiguration } from './product-configuration';
import { Product } from './product.entity';

@ObjectType({ description: 'Product item model' })
export class ProductItem {
  @Field(() => ID)
  id: string;
  product: Product;
  productId: string;
  SKU: string;
  qtyInStock: number;
  price: number;
  productConfigurations: ProductConfiguration[];
  productImages: string[];
  shoppingCartItems: ShoppingCartItem[];
  orderLines: OrderLine[];
}
