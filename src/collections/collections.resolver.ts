import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { Collection } from './entities/collection.entity';
import { CollectionsService } from './collections.service';

@Resolver()
export class CollectionsResolver {
  constructor(private readonly collectionService: CollectionsService) {}
  @Query(() => [Collection], {
    name: 'categories',
    description: 'Get all collections',
  })
  async findAll() {
    return await this.collectionService.findAll();
  }
  @Query(() => Collection, {
    name: 'category',
    description: 'Get single collection by ID',
    nullable: true,
  })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return this.collectionService.findOne(id);
  }
}
