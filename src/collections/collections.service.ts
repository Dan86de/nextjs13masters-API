import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CollectionsService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return await this.prisma.collection.findMany({
      include: {
        products: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.collection.findFirst({
      where: { id },
      include: {
        products: true,
      },
    });
  }
}
