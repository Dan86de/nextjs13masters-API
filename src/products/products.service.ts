import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input/create-product.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(id: string) {
    return this.prisma.product.findFirst({ where: { id } });
  }

  async create(createProductInput: CreateProductInput) {
    return this.prisma.product.create({ data: createProductInput });
  }
}
