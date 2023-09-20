import { ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Product model' })
export class Product {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  productImage: string;
}
