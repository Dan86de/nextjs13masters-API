import { ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Address model' })
export class Address {
  id: string;
  unitNumber: number;
  streetNumber: number;
  addressLine1: string;
  addressLine2: string;
  city: string;
  postalCode: string;
  countryId: string;
}
