import { ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Country model' })
export class Address {
  id: string;
  countryName: string;
}
