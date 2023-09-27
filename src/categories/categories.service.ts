import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return await this.prisma.product_category.findMany({
      include: {
        products: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.product_category.findFirst({
      where: { id },
      include: {
        products: true,
      },
    });
  }
}
