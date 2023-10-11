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
    return await this.prisma.shopping_cart.findUnique({
      where: {
        id: cartId,
      },
      select: {
        id: true,
        shopping_cart_item: {
          include: {
            product_item: true,
          },
        },
      },
    });
  }

  async findOneByUserId(userId: string) {
    return await this.prisma.shopping_cart.findFirst({
      where: {
        user_id: userId,
      },
      select: {
        id: true,
        shopping_cart_item: {
          include: {
            product_item: true,
          },
        },
      },
    });
  }

  async create(userId: string) {
    return await this.prisma.shopping_cart.create({
      data: {
        user_id: userId,
      },
      select: {
        id: true,
      },
    });
  }

  async addToEmptyCart(cartId: string, productItemId: string, qty: number = 1) {
    return await this.prisma.shopping_cart.update({
      where: {
        id: cartId,
      },
      data: {
        shopping_cart_item: {
          create: {
            product_item_id: productItemId,
            qty,
          },
        },
      },
      select: {
        id: true,
        shopping_cart_item: {
          include: {
            product_item: true,
          },
        },
      },
    });
  }

  async updateQtyForCartItem(cartId: string, cartItemId: string, qty: number) {
    return this.prisma.shopping_cart.update({
      where: {
        id: cartId,
      },
      data: {
        shopping_cart_item: {
          update: {
            where: {
              id: cartItemId,
            },
            data: {
              qty: {
                increment: qty,
              },
            },
          },
        },
      },
      select: {
        id: true,
        shopping_cart_item: {
          select: {
            id: true,
            product_item_id: true,
            product_item: true,
            qty: true,
          },
        },
      },
    });
  }
}
