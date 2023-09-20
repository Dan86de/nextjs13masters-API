import { ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Shipping method model' })
export class ShippingMethod {
  id: string;
  name: string;
  price: number;
}
