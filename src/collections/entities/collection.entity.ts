import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Collection model.' })
export class Collection {
  @Field(() => ID, { description: 'Collection id.' })
  id: string;
}
