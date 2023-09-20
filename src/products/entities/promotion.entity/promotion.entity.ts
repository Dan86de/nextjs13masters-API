import { ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Promotion model' })
export class Promotion {
  id: string;
  name: string;
  description: string;
  discountRate: number;
  startDate: Date;
  endDate: Date;
}
