import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ShoppingCartsResolver } from './shopping-carts.resolver';
import { ShoppingCartsService } from './shopping-carts.service';

@Module({
  providers: [ShoppingCartsResolver, ShoppingCartsService, PrismaService],
})
export class ShoppingCartsModule {}
