import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { Collection } from './entities/collection.entity';
import { CollectionsService } from './collections.service';

@Resolver()
export class CollectionsResolver {
  constructor(private readonly collectionService: CollectionsService) {}
  @Query(() => [Collection], {
    name: 'collections',
    description: 'Get all collections',
  })
  async findAll() {
    return await this.collectionService.findAll();
  }
  @Query(() => Collection, {
    name: 'collection',
    description: 'Get single collection by ID',
    nullable: true,
  })
  async findOne(
    @Args('collectionId', { type: () => ID }) collectionId: string,
  ) {
    return this.collectionService.findOne(collectionId);
  }
}
