import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CollectionsService {
  constructor(private prisma: PrismaService) {}
  async findAll(skip: number = 0, take: number = 20) {
    return await this.prisma.collection.findMany({
      skip,
      take,
    });
  }

  async findOneById(collectionId: string) {
    return this.prisma.collection.findUnique({
      where: {
        id: collectionId,
      },
      include: {
        products: true,
      },
    });
  }

  async findOneByName(name: string) {
    return this.prisma.collection.findFirst({
      where: {
        name,
      },
      include: {
        products: true,
      },
    });
  }
}
