import { ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Shop order model' })
export class ShopOrder {
  id: string;
  userId: string;
  orderDate: Date;
  paymentMethiodId: string;
  shippingAddressId: string;
  shippingMethodId: string;
  orderTotal: number;
  orderStatus: OrderStatus;
}

enum OrderStatus {
  ORDERED,
  PROCESSING,
  SHIPPED,
  DELIVERED,
  CANCELLED,
  RETURNED,
  REFUNDED,
}
