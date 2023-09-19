// prisma/seed.ts
import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

const prisma = new PrismaClient();

async function main() {
  const fakerRounds = 50;
  dotenv.config();
  console.log('Seeding...');
  for (let i = 0; i < fakerRounds; i++) {
    await prisma.product.create({
      data: {
        name: faker.commerce.product(),
        description: faker.commerce.productDescription(),
        price: parseInt(faker.finance.amount(5, 1000, 0)),
        image: faker.image.url(),
        categories: {
          create: {
            name: faker.commerce.department(),
            createdAt: faker.date.past(),
            updatedAt: faker.date.past(),
          },
        },
        collections: {
          create: {
            name: faker.commerce.department(),
            createdAt: faker.date.past(),
            updatedAt: faker.date.past(),
          },
        },
      },
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
