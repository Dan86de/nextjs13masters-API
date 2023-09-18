// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import { Product } from 'src/products/entities/product.entity/product.entity';
import * as dotenv from 'dotenv';

const prisma = new PrismaClient();

const fakeProduct = (): Product => ({
  id: '1',
  name: '',
  description: '',
  price: 1,
  image: '',
});

async function main() {
  const fakerRounds = 10;
  dotenv.config();
  console.log('Seeding...');
  /// --------- Users ---------------
  for (let i = 0; i < fakerRounds; i++) {
    await prisma.product.create({ data: fakeProduct() });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
