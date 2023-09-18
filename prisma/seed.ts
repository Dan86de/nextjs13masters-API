// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import { Product } from 'src/products/entities/product.entity/product.entity';
import { faker } from '@faker-js/faker';
import * as dotenv from 'dotenv';

const prisma = new PrismaClient();

const fakeProduct = (): Product => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  price: parseInt(faker.commerce.price({ min: 100, dec: 0 })),
  image: faker.image.urlLoremFlickr({ category: 'fashion' }),
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
