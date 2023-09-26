import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Product category model' })
export class ProductCategory {
  @Field(() => ID)
  id: string;
  @Field(() => String, { nullable: true })
  parent_category_id: string;
  category_name: string;
}
