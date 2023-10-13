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
          orderBy: {
            id: 'asc',
          },
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
    console.log('ADD ITEM TO CART :', { cartId, productItemId, qty });

    await this.prisma.shopping_cart_item.upsert({
      where: {
        cart_id: cartId,
        product_item_id: productItemId,
      },
      create: {
        qty,
        cart_id: cartId,
        product_item_id: productItemId,
      },
      update: {
        qty: {
          increment: 1,
        },
      },
      select: {
        id: true,
        cart_id: true,
        product_item: true,
        product_item_id: true,
        qty: true,
      },
    });
  }

  async removeItemFromCart(cartId: string, shoppingCartItemId: string) {
    console.log('REMOVE ITEM FROM CART :', { cartId, shoppingCartItemId });
    return await this.prisma.shopping_cart_item.delete({
      where: {
        id: shoppingCartItemId,
      },
      select: {
        id: true,
      },
    });
  }

  async incrementItemQtyInCart(shoppingCartItemId: string, qty: number = 1) {
    console.log('INCREMENT ITEM QTY IN CART :', {
      shoppingCartItemId,
      qty,
    });
    return this.prisma.shopping_cart_item.update({
      where: {
        id: shoppingCartItemId,
      },
      data: {
        qty: {
          increment: qty,
        },
      },
      select: {
        id: true,
      },
    });
  }

  async reduceItemQtyInCart(cartId: string, shoppingCartItemId: string) {
    console.log('REDUCE ITEM QTY IN CART :', { cartId, shoppingCartItemId });

    const shoppingCart = await this.prisma.shopping_cart.update({
      where: {
        id: cartId,
      },
      data: {
        shopping_cart_item: {
          update: {
            where: {
              id: shoppingCartItemId,
            },
            data: {
              qty: {
                decrement: 1,
              },
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

    console.dir(
      shoppingCart.shopping_cart_item.find(
        (item) => item.id === shoppingCartItemId,
      ),
    );

    if (
      shoppingCart.shopping_cart_item.find(
        (item) => item.id === shoppingCartItemId,
      ).qty === 0
    ) {
      return await this.prisma.shopping_cart.update({
        where: {
          id: cartId,
        },
        data: {
          shopping_cart_item: {
            delete: {
              id: shoppingCartItemId,
              AND: [
                {
                  qty: {
                    equals: 0,
                  },
                },
                {
                  cart_id: cartId,
                },
              ],
            },
          },
        },
        select: {
          id: true,
        },
      });
    } else return { id: shoppingCart.id };
  }
}
