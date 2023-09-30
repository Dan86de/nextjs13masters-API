import { Args, ID, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './dto/create-product.input/create-product.input';
import { Product } from './entities/product.entity/product.entity';
import { ProductsService } from './products.service';

@Resolver()
export class ProductsResolver {
  constructor(private readonly productService: ProductsService) {}

  @Query(() => [Product], { name: 'products', description: 'Get all products' })
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
    return await this.productService.findAll(skip, take);
  }

  @Query(() => Product, {
    name: 'product',
    description: 'Get single product by ID',
    nullable: true,
  })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    const product = await this.productService.findOne(id);
    return product;
  }

  @Query(() => [Product], {
    name: 'productsFromCollection',
    description: 'Get all products from collection with given id.',
    nullable: true,
  })
  async findAllFromGivenCollection(
    @Args('collectionId', { type: () => ID }) collectionId: string,
  ) {
    const product =
      await this.productService.findAllFromGivenCollection(collectionId);
    return product;
  }

  @Query(() => [Product], {
    name: 'productsFromCategory',
    description: 'Get all products from category with given category id.',
    nullable: true,
  })
  async findAllFromGivenCategory(
    @Args('categoryId', { type: () => ID }) categoryId: string,
  ) {
    const product =
      await this.productService.findAllFromGivenCategory(categoryId);
    return product;
  }

  @Mutation(() => Product, { name: 'createProduct', nullable: true })
  async create(
    @Args('createProductInput') createProductInput: CreateProductInput,
    @Args('createProductInput') category_id: string,
  ) {
    return this.productService.create(createProductInput, category_id);
  }
}
