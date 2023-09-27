import { Module } from '@nestjs/common';
import { CollectionsResolver } from './collections.resolver';
import { CollectionsService } from './collections.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [CollectionsResolver, CollectionsService, PrismaService],
})
export class CollectionsModule {}
