import { Args, ID, Int, Query, Resolver } from '@nestjs/graphql';
import { CollectionsService } from './collections.service';
import { Collection } from './entities/collection.entity';

@Resolver()
export class CollectionsResolver {
  constructor(private readonly collectionService: CollectionsService) {}
  @Query(() => [Collection], {
    name: 'collections',
    description: 'Get all collections',
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
    return await this.collectionService.findAll(skip, take);
  }

  @Query(() => Collection, {
    name: 'collection',
    description: 'Get single collection by ID',
    nullable: true,
  })
  async findOneById(
    @Args('collectionId', { type: () => ID }) collectionId: string,
  ) {
    return this.collectionService.findOneById(collectionId);
  }

  @Query(() => Collection, {
    name: 'collection',
    description: 'Get single collection by name',
    nullable: true,
  })
  async findOneByName(
    @Args('collectionName', { type: () => String }) collectionName: string,
  ) {
    return this.collectionService.findOneByName(collectionName);
  }
}
