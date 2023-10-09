import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Shopping cart model.' })
export class ShoppingCart {
  @Field(() => ID, { description: 'Shopping cart id.' })
  id: string;
  @Field(() => String, { description: 'User id.' })
  userId: string;
}
