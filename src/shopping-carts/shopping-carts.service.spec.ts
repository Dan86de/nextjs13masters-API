import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingCartsService } from './shopping-carts.service';

describe('ShoppingCartsService', () => {
  let service: ShoppingCartsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoppingCartsService],
    }).compile();

    service = module.get<ShoppingCartsService>(ShoppingCartsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
