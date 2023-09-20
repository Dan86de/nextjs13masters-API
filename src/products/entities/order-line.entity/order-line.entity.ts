import { ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Order line model' })
export class OrderLine {
  id: string;
  productItemId: string;
  orderId: string;
  qty: number;
  price: number;
}
