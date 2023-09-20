import { ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Promotion product model' })
export class PromotionProduct {
  id: string;
  promotionId: string;
  productId: string;
}
