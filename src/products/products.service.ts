import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input/create-product.input';

@Injectable()
export class ProductsService {
  async findAll() {
    return [];
  }

  async findOne(id: string) {
    return null;
  }

  async create(createCoffeeInput: CreateProductInput) {
    return null;
  }
}
