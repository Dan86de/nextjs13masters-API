import { Args, ID, Int, Query, Resolver } from '@nestjs/graphql';
import { ShoppingCart } from './entities/shopping-cart.entity';
import { ShoppingCartsService } from './shopping-carts.service';

@Resolver()
export class ShoppingCartsResolver {
  constructor(private readonly shoppingCartsService: ShoppingCartsService) {}
  @Query(() => [ShoppingCart], {
    name: 'shopping_carts',
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

  @Query(() => ShoppingCart, {
    name: 'shopping_cart',
    description: 'Get single cart by ID',
    nullable: true,
  })
  async findOneById(@Args('cartId', { type: () => ID }) cartId: string) {
    return this.shoppingCartsService.findOneById(cartId);
  }

  @Query(() => ShoppingCart, {
    name: 'shopping_cart',
    description: 'Get single cart by user ID',
    nullable: true,
  })
  async findOneByUserId(@Args('userId', { type: () => ID }) userId: string) {
    return this.shoppingCartsService.findOneByUserId(userId);
  }
}
