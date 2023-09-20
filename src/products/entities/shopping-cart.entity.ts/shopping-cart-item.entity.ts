import { ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Shopping cart item model' })
export class ShoppingCartItem {
  id: string;
  cartId: string;
  productItemId: string;
  qty: number;
}
