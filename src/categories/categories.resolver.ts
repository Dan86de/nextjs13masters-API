import { Args, ID, Int, Query, Resolver } from '@nestjs/graphql';
import { ProductCategory } from 'src/categories/entities/category.entity';
import { CategoriesService } from './categories.service';

@Resolver()
export class CategoriesResolver {
  constructor(private readonly categoryService: CategoriesService) {}
  @Query(() => [ProductCategory], {
    name: 'categories',
    description: 'Get all categories',
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
    return await this.categoryService.findAll(skip, take);
  }

  @Query(() => ProductCategory, {
    name: 'category',
    description: 'Get single category by ID',
    nullable: true,
  })
  async findOneById(@Args('id', { type: () => ID }) id: string) {
    return this.categoryService.findOneById(id);
  }

  @Query(() => ProductCategory, {
    name: 'category',
    description: 'Get single category by ID',
    nullable: true,
  })
  async findOneByName(@Args('name', { type: () => String }) name: string) {
    return this.categoryService.findOneByName(name);
  }
}
