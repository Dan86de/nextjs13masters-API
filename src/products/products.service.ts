import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProductInput } from './dto/create-product.input/create-product.input';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return await this.prisma.product.findMany({
      include: {
        category: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
        collections: {
          include: {
            product: true,
            collection: true,
          },
        },
      },
    });
  }

  async findAllFromGivenCollection(collectionId: string) {
    return await this.prisma.product.findMany({
      where: {
        collections: {
          some: {
            collectionId,
          },
        },
      },
      include: {
        _count: true,
        category: true,
      },
    });
  }

  async create(createProductInput: CreateProductInput, category_id: string) {
    return this.prisma.product.create({
      data: { ...createProductInput, category_id },
    });
  }
}
