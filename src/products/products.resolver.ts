import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from './entities/product.entity/product.entity';
import { CreateProductInput } from './dto/create-product.input/create-product.input';
import { ProductsService } from './products.service';

@Resolver()
export class ProductsResolver {
  constructor(private readonly productService: ProductsService) {}
  @Query(() => [Product], { name: 'products', description: 'Get all products' })
  async findAll(): Promise<Product[]> {
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
  ) {
    return this.productService.create(createProductInput);
  }
}
