import { Args, ID, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  ShoppingCart,
  ShoppingCartItem,
  ShoppingCartWithItems,
} from './entities/shopping-cart.entity';
import { ShoppingCartsService } from './shopping-carts.service';

@Resolver()
export class ShoppingCartsResolver {
  constructor(private readonly shoppingCartsService: ShoppingCartsService) {}
  @Query(() => [ShoppingCart], {
    name: 'shoppingCarts',
    description: 'Get all shopping carts',
  })
  async findAll(
    @Args('skip', {
      defaultValue: 0,
      type: () => Int,
      nullable: true,
      name: 'Skip',
    })
    skip?: number,
    @Args('take', {
      defaultValue: 20,
      type: () => Int,
      nullable: true,
      name: 'Take',
    })
    take?: number,
  ) {
    return await this.shoppingCartsService.findAll(skip, take);
  }

  @Query(() => ShoppingCartWithItems, {
    name: 'shoppingCartGetByCartId',
    description: 'Get single cart by ID',
    nullable: true,
  })
  async findOneById(@Args('cartId', { type: () => ID }) cartId: string) {
    return await this.shoppingCartsService.findOneById(cartId);
  }

  @Query(() => ShoppingCart, {
    name: 'shoppingCartGetByUserId',
    description: 'Get single cart by user ID',
    nullable: true,
  })
  async findOneByUserId(@Args('userId', { type: () => ID }) userId: string) {
    return await this.shoppingCartsService.findOneByUserId(userId);
  }

  @Mutation(() => ShoppingCart, { name: 'createShoppingCart', nullable: true })
  async createShoppingCart(@Args('userId') userId: string) {
    return await this.shoppingCartsService.create(userId);
  }

  @Mutation(() => ShoppingCartItem, {
    name: 'addItemToCart',
    nullable: true,
  })
  async addItemToCart(
    @Args('cartId') cartId: string,
    @Args('productItemId') productItemId: string,
    @Args('qty', { defaultValue: 1, type: () => Int, nullable: true })
    qty?: number,
  ) {
    return await this.shoppingCartsService.addItemToCart(
      cartId,
      productItemId,
      qty,
    );
  }

  @Mutation(() => ShoppingCartWithItems, {
    name: 'removeItemFromCart',
    nullable: true,
  })
  async removeItemFromCart(
    @Args('cartId') cartId: string,
    @Args('shoppingCartItemId') shoppingCartItemId: string,
  ) {
    return await this.shoppingCartsService.removeItemFromCart(
      cartId,
      shoppingCartItemId,
    );
  }

  @Mutation(() => ShoppingCartWithItems, {
    name: 'incrementItemQtyInCart',
    nullable: true,
  })
  async incrementItemQtyInCart(
    @Args('shoppingCartItemId') shoppingCartItemId: string,
    @Args('qty', { defaultValue: 1, type: () => Int, nullable: true })
    qty?: number,
  ) {
    return await this.shoppingCartsService.incrementItemQtyInCart(
      shoppingCartItemId,
      qty,
    );
  }

  @Mutation(() => ShoppingCartWithItems, {
    name: 'reduceItemQtyInCart',
    nullable: true,
  })
  async reduceItemQtyInCart(
    @Args('cartId') cartId: string,
    @Args('shoppingCartItemId') shoppingCartItemId: string,
  ) {
    return await this.shoppingCartsService.reduceItemQtyInCart(
      cartId,
      shoppingCartItemId,
    );
  }
}
