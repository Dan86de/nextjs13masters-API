import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CollectionsService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return await this.prisma.product_collection.findMany();
  }

  async findOne(collectionId: string) {
    return this.prisma.collection.findUnique({
      where: {
        id: collectionId,
      },
      include: {
        products: true,
      },
    });
  }
}
