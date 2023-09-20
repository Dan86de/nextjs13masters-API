import { ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Product category model' })
export class ProductCategory {
  id: string;
  parent_category_id: string;
  category_name: string;
}
