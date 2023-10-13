import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingCartsResolver } from './shopping-carts.resolver';

describe('ShoppingCartsResolver', () => {
  let resolver: ShoppingCartsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoppingCartsResolver],
    }).compile();

    resolver = module.get<ShoppingCartsResolver>(ShoppingCartsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
