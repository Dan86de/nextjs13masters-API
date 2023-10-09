import { Module } from '@nestjs/common';
import { ShoppingCartsResolver } from './shopping-carts.resolver';
import { ShoppingCartsService } from './shopping-carts.service';

@Module({
  providers: [ShoppingCartsResolver, ShoppingCartsService]
})
export class ShoppingCartsModule {}
