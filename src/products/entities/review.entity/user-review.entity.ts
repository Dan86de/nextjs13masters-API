import { ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'User review model' })
export class UserReview {
  id: string;
  user_id: string;
  order_id: string;
  rating_value: RatingValue;
  review_text: string;
}

enum RatingValue {
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
}
