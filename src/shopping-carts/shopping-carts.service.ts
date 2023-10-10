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
      include: {
        shopping_cart_item: {
          include: {
            product_item: true,
          },
        },
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

  async create(userId: string) {
    return this.prisma.shopping_cart.create({
      data: {
        user_id: userId,
      },
      select: {
        id: true,
        shopping_cart_item: true,
      },
    });
  }

  async addToCart(cartId: string, productItemId: string) {
    // fix this one here
    return this.prisma.shopping_cart.update({
      where: {
        id: cartId,
      },
      data: {
        shopping_cart_item: {
          create: {
            product_item_id: productItemId,
            qty: 1,
          },
        },
      },
    });
  }
}
