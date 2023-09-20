import { ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Payment method model' })
export class PaymentMethod {
  id: string;
  userId: string;
  paymentTypeId: string;
  provider: Provider;
  accountNumber: string;
  expiryDate: Date;
  isDefault: boolean;
}

enum Provider {
  MASTERCARD,
  VISA,
}
