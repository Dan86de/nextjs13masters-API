import { ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Product configuration model' })
export class ProductConfiguration {
  productItemId: string;
  variationOptionId: string;
}
