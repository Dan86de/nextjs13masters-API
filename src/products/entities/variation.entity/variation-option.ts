import { ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Variation option model' })
export class VariationOption {
  id: string;
  variationId: string;
  value: string;
}
