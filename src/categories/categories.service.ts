import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}
  async findAll(skip: number = 0, take: number = 20) {
    return await this.prisma.product_category.findMany({
      skip,
      take,
    });
  }

  async findOneById(id: string) {
    return this.prisma.product_category.findFirst({
      where: { id },
      include: {
        products: true,
      },
    });
  }

  async findOneByName(name: string) {
    return this.prisma.product_category.findFirst({
      where: { category_name: name },
      include: {
        products: true,
      },
    });
  }
}
