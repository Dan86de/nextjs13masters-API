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

  async addItemToCart(cartId: string, productItemId: string, qty: number = 1) {
    return await this.prisma.shopping_cart.update({
      where: {
        id: cartId,
      },
      data: {
        shopping_cart_item: {
          upsert: {
            where: {
              product_item_id: productItemId,
            },
            create: {
              product_item_id: productItemId,
              qty,
            },
            update: {
              qty,
            },
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

  async removeItemFromCart(cartId: string, shoppingCartItemId: string) {
    return await this.prisma.shopping_cart.update({
      where: {
        id: cartId,
      },
      data: {
        shopping_cart_item: {
          delete: {
            id: shoppingCartItemId,
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
}
