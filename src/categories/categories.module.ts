import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { PrismaService } from 'src/prisma.service';
import { CategoriesResolver } from './categories.resolver';

@Module({
  providers: [CategoriesResolver, CategoriesService, PrismaService],
})
export class CategoriesModule {}
