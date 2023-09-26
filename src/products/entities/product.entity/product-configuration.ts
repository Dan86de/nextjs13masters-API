import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Product configuration model' })
export class ProductConfiguration {
  @Field(() => ID)
  id: string;
}
