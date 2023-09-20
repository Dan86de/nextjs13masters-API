import { ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'User address model' })
export class UserAddress {
  userId: string;
  addressId: string;
  isDefault: boolean;
}
