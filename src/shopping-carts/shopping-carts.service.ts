import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ShoppingCartsService {
  constructor(private prisma: PrismaService) {}
  async findAll(skip: number = 0, take: number = 20) {
    return await this.prisma.shopping_cart.findMany({
      skip,
      take,
    });
  }

  async findOneById(cartId: string) {
    return this.prisma.shopping_cart.findUnique({
      where: {
        id: cartId,
      },
    });
  }

  async findOneByUserId(userId: string) {
    return this.prisma.shopping_cart.findFirst({
      where: {
        user_id: userId,
      },
    });
  }

  async create(userId: string, itemId: string) {
    return this.prisma.shopping_cart.create({
      data: {
        user_id: userId,
        shopping_cart_item: {
          connect: {
            id: itemId,
            // TODO: add possibility to put more items
            qty: 1,
          },
        },
      },
    });
  }
}
