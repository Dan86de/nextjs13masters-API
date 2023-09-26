import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { ProductCategory } from 'src/products/entities/product.entity/product-category.entity';

@Resolver()
export class CategoriesResolver {
  constructor(private readonly categoryService: CategoriesService) {}
  @Query(() => [ProductCategory], {
    name: 'categories',
    description: 'Get all categories',
  })
  async findAll() {
    return await this.categoryService.findAll();
  }
  @Query(() => ProductCategory, {
    name: 'category',
    description: 'Get single category by ID',
    nullable: true,
  })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return this.categoryService.findOne(id);
  }
}
