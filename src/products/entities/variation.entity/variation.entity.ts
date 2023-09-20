import { ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Variation model' })
export class Variation {
  id: string;
  categoryId: string;
  name: string;
  prodictCategoryId: string;
}
