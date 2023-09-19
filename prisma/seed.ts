// prisma/seed.ts
import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

const prisma = new PrismaClient();

const fakeProduct = () => {
  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseInt(faker.commerce.price({ min: 100, dec: 0 })),
    image: faker.image.urlLoremFlickr({ category: 'fashion' }),
    // check how to generate categories and collections for products
    categories: {
      create: [
        {
          id: faker.string.uuid(),
          name: faker.commerce.department(),
          createdAt: faker.date.past(),
          updatedAt: faker.date.recent(),
        },
      ],
    },
    collections: {
      create: [
        {
          id: faker.string.uuid(),
          name: faker.commerce.department(),
          createdAt: faker.date.past(),
          updatedAt: faker.date.recent(),
        },
      ],
    },
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };
};

async function main() {
  const fakerRounds = 10;
  dotenv.config();
  console.log('Seeding...');
  for (let i = 0; i < fakerRounds; i++) {
    await prisma.product.create({ data: fakeProduct() });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
