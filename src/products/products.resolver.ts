import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './dto/create-product.input/create-product.input';
import { Product } from './entities/product.entity/product.entity';
import { ProductsService } from './products.service';

@Resolver()
export class ProductsResolver {
  constructor(private readonly productService: ProductsService) {}
  @Query(() => [Product], { name: 'products', description: 'Get all products' })
  async findAll() {
    return this.productService.findAll();
  }
  @Query(() => Product, {
    name: 'product',
    description: 'Get single product by ID',
    nullable: true,
  })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return this.productService.findOne(id);
  }
  @Mutation(() => Product, { name: 'createProduct', nullable: true })
  async create(
    @Args('createProductInput') createProductInput: CreateProductInput,
    @Args('createProductInput') category_id: string,
  ) {
    return this.productService.create(createProductInput, category_id);
  }
}
