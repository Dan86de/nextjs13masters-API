import { InputType } from '@nestjs/graphql';

@InputType({ description: 'Create product input object type.' })
export class CreateProductInput {
  name: string;
  description: string;
  price: number;
  image: string;
  product_image: string;
}
