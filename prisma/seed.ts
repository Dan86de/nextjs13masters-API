// prisma/seed.ts
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   const fakerRounds = 50;
//   dotenv.config();
//   console.log('Seeding...');
//   for (let i = 0; i < fakerRounds; i++) {
//     await prisma.product.create({
//       data: {
//         name: faker.commerce.product(),
//         description: faker.commerce.productDescription(),
//         product_image: '',
//         category: {
//           create: {
//             category_name: faker.commerce
//           }
//         }
//       },
//     });
//   }
// }

// main()
//   .catch((e) => console.error(e))
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
