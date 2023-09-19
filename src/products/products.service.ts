import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProductInput } from './dto/create-product.input/create-product.input';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(id: string) {
    return this.prisma.product.findFirst({
      where: { id },
    });
  }

  async create(createProductInput: CreateProductInput) {
    return this.prisma.product.create({ data: createProductInput });
  }
}
