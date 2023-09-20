import { ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Payment type model' })
export class PaymentType {
  id: string;
  value: PaymentMethod;
}

enum PaymentMethod {
  CREDIT_CARD,
  PAYPAL,
  GOOGLE_PAY,
  APPLE_PAY,
}
