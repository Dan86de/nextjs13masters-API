import { ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'User model' })
export class User {
  id: string;
  email: string;
  phoneNumber: string;
}
