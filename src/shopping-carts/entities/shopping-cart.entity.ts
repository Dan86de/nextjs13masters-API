import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ProductItem } from 'src/products/entities/product.entity/product.entity';

@ObjectType({ description: 'Shopping cart model.' })
export class ShoppingCart {
  @Field(() => ID, { description: 'Shopping cart id.' })
  id: string;
}

@ObjectType({ description: 'Shopping cart with items.' })
export class ShoppingCartWithItems extends ShoppingCart {
  @Field(() => [ShoppingCartItem])
  shopping_cart_item: ShoppingCartItem[];
}

@ObjectType({ description: 'Shopping cart item model.' })
export class ShoppingCartItem {
  @Field(() => ID, { description: 'Shopping cart item id.' })
  id: string;
  cart_id: string;
  product_item: ProductItem;
  product_item_id: string;
  qty: number;
}
