import { ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Shopping cart model' })
export class ShoppingCart {
  id: string;
  userId: string;
}
