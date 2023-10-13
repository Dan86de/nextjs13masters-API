import { faker } from '@faker-js/faker';
import { PrismaClient, variation, variation_option } from '@prisma/client';
import * as dotenv from 'dotenv';

const prisma = new PrismaClient();

async function createUserAndCategories() {
  // create users
  const numOfFakeUsers = 1;
  dotenv.config();

  for (let i = 0; i < numOfFakeUsers; i++) {
    await prisma.site_user.create({
      data: {
        id: '6f45312c-270c-4dd1-b8b3-106ff53907d6',
        email: 'daniel.noworyta@gmail.com',
        password: 'test123',
        phone_number: '+49 662010934',
      },
    });
  }
  // create categories
  const numOfFakeCategories = 3;
  const fakeCategoriesSeedData = [
    {
      category_name: 'footwear',
      id: 'cd60d062-1ed5-4a91-8740-7009a9264d72',
    },
    {
      category_name: 'apparel',
      id: 'df9f377d-fd75-4638-a2ca-1a3ded811427',
    },
    {
      category_name: 'accessories',
      id: '135abb8c-370a-468d-ba88-2f72df1c3d39',
    },
  ];

  for (let i = 0; i < numOfFakeCategories; i++) {
    await prisma.product_category.create({
      data: {
        ...fakeCategoriesSeedData[i],
      },
    });
  }

  // footwear size variation seed
  await prisma.variation.create({
    data: {
      name: 'size',
      variation_options: {
        createMany: {
          data: [
            {
              value: '36',
            },
            {
              value: '37',
            },
            {
              value: '38',
            },
            {
              value: '39',
            },
            { value: '40' },
            { value: '41' },
            { value: '42' },
            { value: '43' },
            { value: '44' },
          ],
        },
      },
      product_categoryId: 'cd60d062-1ed5-4a91-8740-7009a9264d72',
    },
  });

  // apparel variations size and color
  await prisma.variation.create({
    data: {
      name: 'size',
      variation_options: {
        createMany: {
          data: [
            {
              value: 'XXS',
            },
            {
              value: 'XS',
            },
            {
              value: 'S',
            },
            {
              value: 'M',
            },
            { value: 'L' },
            { value: 'XL' },
            { value: 'XXL' },
          ],
        },
      },
      product_categoryId: 'df9f377d-fd75-4638-a2ca-1a3ded811427',
    },
  });
  await prisma.variation.create({
    data: {
      name: 'color',
      variation_options: {
        createMany: {
          data: [
            {
              value: 'red',
            },
            {
              value: 'blue',
            },
            {
              value: 'gray',
            },
            {
              value: 'orange',
            },
            { value: 'yellow' },
            { value: 'black' },
            { value: 'white' },
          ],
        },
      },
      product_categoryId: 'df9f377d-fd75-4638-a2ca-1a3ded811427',
    },
  });

  // accessories variations color
  await prisma.variation.create({
    data: {
      name: 'color',
      variation_options: {
        createMany: {
          data: [
            {
              value: 'red',
            },
            {
              value: 'blue',
            },
            {
              value: 'gray',
            },
            {
              value: 'orange',
            },
            { value: 'yellow' },
            { value: 'black' },
            { value: 'white' },
          ],
        },
      },
      product_categoryId: '135abb8c-370a-468d-ba88-2f72df1c3d39',
    },
  });

  // create collections
  const numOfFakeCollections = 9;
  const fakeColletionsSeedData = [
    { name: 'sneakers', id: '6a217445-d4c3-4c2a-a369-bef9e7542d5e' },
    { name: 'socks', id: '1b0210e4-3411-43c8-895e-5ef7e7892e9c' },
    { name: 't-shirts', id: 'c054dd0c-75b1-481a-8231-cea6a4359a03' },
    { name: 'polo shirts', id: 'fedf55c4-372f-4d64-b6d4-cc5a6a3f6c77' },
    { name: 'hoodies', id: '9ee38407-8f76-4a79-be32-932aaa4a316c' },
    { name: 'caps', id: 'a6d7f9e7-5917-4d11-baf3-f775677b9e7a' },
    { name: 'backpacks', id: '9afc676f-8b86-489f-a08e-b95f72b2fe0d' },
    { name: 'shorts', id: '42c78492-4ff1-4b26-9cd8-6378e92661ba' },
    { name: 'jackets', id: '42c12392-4ff1-4b12-9cd8-6378e92661ba' },
  ];

  for (let i = 0; i < numOfFakeCollections; i++) {
    await prisma.collection.create({
      data: {
        ...fakeColletionsSeedData[i],
      },
    });
  }
}

const fakeProductsSeedData = [
  {
    id: 'a111b222-c333-d444-e555-f66677788899',
    name: 'Vans Sneaker',
    description: 'Stylish and comfortable sneakers from Vans.',
    product_image: 'https://dsc.cloud/88160a/vans_sneaker.webp',
    category_id: 'cd60d062-1ed5-4a91-8740-7009a9264d72',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '6a217445-d4c3-4c2a-a369-bef9e7542d5e',
          productId: 'a111b222-c333-d444-e555-f66677788899',
        },
      },
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174001',
    name: 'Under Armour Socks',
    description:
      'Experience ultimate comfort and durability with Under Armour socks, perfect for athletic and casual wear.',
    product_image: 'https://dsc.cloud/88160a/under_armour_socks.webp',
    category_id: 'df9f377d-fd75-4638-a2ca-1a3ded811427',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '1b0210e4-3411-43c8-895e-5ef7e7892e9c',
          productId: '123e4567-e89b-12d3-a456-426614174001',
        },
      },
    },
  },
  {
    id: 'b5d2c480-1b1c-4b5d-8c11-6a4c4b5d6c7d',
    name: 'Under Armour Socks #1',
    description:
      'Relish the superior quality and comfort with the second edition of Under Armour socks, ideal for all your athletic activities.',
    product_image: 'https://dsc.cloud/88160a/under_armour_socks_1.webp',
    category_id: 'df9f377d-fd75-4638-a2ca-1a3ded811427',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '1b0210e4-3411-43c8-895e-5ef7e7892e9c',
          productId: 'b5d2c480-1b1c-4b5d-8c11-6a4c4b5d6c7d',
        },
      },
    },
  },
  {
    id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
    name: 'Under Armour Sneaker',
    description:
      'Step into comfort and style with Under Armour Sneakers, perfect for athletic performance or casual wear.',
    product_image: 'https://dsc.cloud/88160a/under_armour_sneaker.webp',
    category_id: 'cd60d062-1ed5-4a91-8740-7009a9264d72',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '6a217445-d4c3-4c2a-a369-bef9e7542d5e',
          productId: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
        },
      },
    },
  },
  {
    id: '6ba7b811-9dad-11d1-80b4-00e01fd430c8',
    name: 'Reebok T-Shirt',
    description:
      'Stay cool and comfortable in this classic Reebok T-shirt, ideal for daily wear or your workout sessions.',
    product_image: 'https://dsc.cloud/88160a/reebok_tshirt.webp',
    category_id: 'df9f377d-fd75-4638-a2ca-1a3ded811427',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: 'c054dd0c-75b1-481a-8231-cea6a4359a03',
          productId: '6ba7b811-9dad-11d1-80b4-00e01fd430c8',
        },
      },
    },
  },
  {
    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    name: 'Reebok Sneaker',
    description:
      'Discover comfort and style with Reebok Sneakers, designed for optimum performance and everyday wear.',
    product_image: 'https://dsc.cloud/88160a/reebok_sneaker.webp',
    category_id: 'cd60d062-1ed5-4a91-8740-7009a9264d72',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '6a217445-d4c3-4c2a-a369-bef9e7542d5e',
          productId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
        },
      },
    },
  },
  {
    id: 'e11d2b7c-6f14-4a72-b575-fa6f7dbd6a6b',
    name: 'Reebok Shorts',
    description:
      'Move freely with Reebok Shorts, perfect for workouts, sports, or just lounging around.',
    product_image: 'https://dsc.cloud/88160a/reebok_shorts.webp',
    category_id: 'df9f377d-fd75-4638-a2ca-1a3ded811427',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '42c78492-4ff1-4b26-9cd8-6378e92661ba',
          productId: 'e11d2b7c-6f14-4a72-b575-fa6f7dbd6a6b',
        },
      },
    },
  },
  {
    id: 'e12d4b8e-7f24-5a83-c586-fb7f8edb9b0c',
    name: 'Reebok Hoodie',
    description:
      'Stay warm and stylish with the Reebok Hoodie, suitable for chilly days and evening workouts.',
    product_image: 'https://dsc.cloud/88160a/reebok_hoodie.webp',
    category_id: 'df9f377d-fd75-4638-a2ca-1a3ded811427',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '9ee38407-8f76-4a79-be32-932aaa4a316c',
          productId: 'e12d4b8e-7f24-5a83-c586-fb7f8edb9b0c',
        },
      },
    },
  },
  {
    id: 'fbd6b166-af99-4423-a67a-8d89f537c6a8',
    name: 'Reebok Hoodie #1',
    description:
      'Embrace comfort and warmth with another classic Hoodie from Reebok, a must-have for your wardrobe.',
    product_image: 'https://dsc.cloud/88160a/reebok_hoodie_1.webp',
    category_id: 'df9f377d-fd75-4638-a2ca-1a3ded811427',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '9ee38407-8f76-4a79-be32-932aaa4a316c',
          productId: 'fbd6b166-af99-4423-a67a-8d89f537c6a8',
        },
      },
    },
  },
  {
    id: '72b3a1f7-3b95-4d02-9be0-1c78ba99329e',
    name: 'Reebok Cap',
    description:
      'Shield yourself from the sun with this sleek Reebok Cap, combining style and functionality.',
    product_image: 'https://dsc.cloud/88160a/reebok_cap.webp',
    category_id: '135abb8c-370a-468d-ba88-2f72df1c3d39',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: 'a6d7f9e7-5917-4d11-baf3-f775677b9e7a',
          productId: '72b3a1f7-3b95-4d02-9be0-1c78ba99329e',
        },
      },
    },
  },
  {
    id: 'ace5aa21-0f8c-4641-a7b2-05d565e8a688',
    name: 'Reebok Backpack',
    description:
      'Carry your essentials in style with the durable and spacious Reebok Backpack.',
    product_image: 'https://dsc.cloud/88160a/reebok_backpack.webp',
    category_id: '135abb8c-370a-468d-ba88-2f72df1c3d39',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '9afc676f-8b86-489f-a08e-b95f72b2fe0d',
          productId: 'ace5aa21-0f8c-4641-a7b2-05d565e8a688',
        },
      },
    },
  },
  {
    id: 'b1e55a07-5c50-4839-a270-0dc3c6d37583',
    name: 'Puma Sneaker',
    description:
      'Elevate your style and comfort with Puma Sneakers, perfect for any occasion.',
    product_image: 'https://dsc.cloud/88160a/puma_sneaker.webp',
    category_id: 'cd60d062-1ed5-4a91-8740-7009a9264d72',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '6a217445-d4c3-4c2a-a369-bef9e7542d5e',
          productId: 'b1e55a07-5c50-4839-a270-0dc3c6d37583',
        },
      },
    },
  },
  {
    id: '23a6f481-c3d5-421f-a33f-5d2281a794e4',
    name: 'Nike T-Shirt',
    description:
      'Experience comfort and style with the Nike T-Shirt, perfect for workouts or casual wear.',
    product_image: 'https://dsc.cloud/88160a/nike_tshirt.webp',
    category_id: 'df9f377d-fd75-4638-a2ca-1a3ded811427',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: 'c054dd0c-75b1-481a-8231-cea6a4359a03',
          productId: '23a6f481-c3d5-421f-a33f-5d2281a794e4',
        },
      },
    },
  },
  {
    id: 'f65c57f6-a8ba-44c5-a2c2-7f490132fc3b',
    name: 'Nike Sneaker',
    description:
      'Step into superior comfort and design with Nike Sneakers, crafted for optimal performance.',
    product_image: 'https://dsc.cloud/88160a/nike_sneaker_2.webp',
    category_id: 'cd60d062-1ed5-4a91-8740-7009a9264d72',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '6a217445-d4c3-4c2a-a369-bef9e7542d5e',
          productId: 'f65c57f6-a8ba-44c5-a2c2-7f490132fc3b',
        },
      },
    },
  },
  {
    id: '9a7d1deb-b3c8-4b4e-8ec4-4c57c3db3b33',
    name: 'Nike Sneaker #1',
    description:
      'Embrace the blend of comfort and style with another variant of Nike Sneakers.',
    product_image: 'https://dsc.cloud/88160a/nike_sneaker_1.webp',
    category_id: 'cd60d062-1ed5-4a91-8740-7009a9264d72',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '6a217445-d4c3-4c2a-a369-bef9e7542d5e',
          productId: '9a7d1deb-b3c8-4b4e-8ec4-4c57c3db3b33',
        },
      },
    },
  },
  {
    id: '31aabbcc-ddee-1122-3344-556677889900',
    name: 'Nike Jacket',
    description:
      'Stay protected and stylish with the Nike Jacket, ideal for keeping you warm in cooler weather.',
    product_image: 'https://dsc.cloud/88160a/nike_jacket.webp',
    category_id: 'df9f377d-fd75-4638-a2ca-1a3ded811427',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '42c12392-4ff1-4b12-9cd8-6378e92661ba',
          productId: '31aabbcc-ddee-1122-3344-556677889900',
        },
      },
    },
  },
  {
    id: '12345678-1234-5678-1234-567812345678',
    name: 'Nike Hoodie',
    description:
      'Combine comfort and warmth with the Nike Hoodie, perfect for both active and casual wear.',
    product_image: 'https://dsc.cloud/88160a/nike_hoodie.webp',
    category_id: 'df9f377d-fd75-4638-a2ca-1a3ded811427',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '9ee38407-8f76-4a79-be32-932aaa4a316c',
          productId: '12345678-1234-5678-1234-567812345678',
        },
      },
    },
  },
  {
    id: 'a2a3a4a5-1b2b-3c4c-5d6d-7e8e9f0f1a1b',
    name: 'Nike Cap',
    description:
      'Stay cool and shaded with the Nike Cap, a great addition to your everyday attire.',
    product_image: 'https://dsc.cloud/88160a/nike_cap.webp',
    category_id: '135abb8c-370a-468d-ba88-2f72df1c3d39',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: 'a6d7f9e7-5917-4d11-baf3-f775677b9e7a',
          productId: 'a2a3a4a5-1b2b-3c4c-5d6d-7e8e9f0f1a1b',
        },
      },
    },
  },
  {
    id: '11223344-5566-7788-9900-aabbccddeeff',
    name: 'Nike Backpack',
    description:
      'Keep your belongings secure with the spacious and stylish Nike Backpack.',
    product_image: 'https://dsc.cloud/88160a/nike_backpack.webp',
    category_id: '135abb8c-370a-468d-ba88-2f72df1c3d39',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '9afc676f-8b86-489f-a08e-b95f72b2fe0d',
          productId: '11223344-5566-7788-9900-aabbccddeeff',
        },
      },
    },
  },
  {
    id: '0a1b2c3d-4e5f-6789-0abc-def123456789',
    name: 'Converse Sneaker',
    description:
      'Experience timeless style and comfort with Converse Sneakers, perfect for any outfit.',
    product_image: 'https://dsc.cloud/88160a/converse_sneaker.webp',
    category_id: 'cd60d062-1ed5-4a91-8740-7009a9264d72',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '6a217445-d4c3-4c2a-a369-bef9e7542d5e',
          productId: '0a1b2c3d-4e5f-6789-0abc-def123456789',
        },
      },
    },
  },
  {
    id: '987f6543-21f0-0fed-cba9-876543210a98',
    name: 'Converse Sneaker #1',
    description:
      'Step into classic comfort and style with another variant of Converse Sneakers.',
    product_image: 'https://dsc.cloud/88160a/converse_sneaker_1.webp',
    category_id: 'cd60d062-1ed5-4a91-8740-7009a9264d72',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '6a217445-d4c3-4c2a-a369-bef9e7542d5e',
          productId: '987f6543-21f0-0fed-cba9-876543210a98',
        },
      },
    },
  },
  {
    id: '9a7d4c3b-2e1f-0g8h-i5j6-k7l8m9n0o1p2',
    name: 'Asics Sneaker',
    description:
      'Embrace the perfect blend of functionality and design with Asics Sneakers.',
    product_image: 'https://dsc.cloud/88160a/asics_sneaker.webp',
    category_id: 'cd60d062-1ed5-4a91-8740-7009a9264d72',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '6a217445-d4c3-4c2a-a369-bef9e7542d5e',
          productId: '9a7d4c3b-2e1f-0g8h-i5j6-k7l8m9n0o1p2',
        },
      },
    },
  },
  {
    id: '23456789-abcd-ef01-2345-6789abcdef01',
    name: 'Asics Sneaker #1',
    description:
      'Step into comfort with another variant of Asics Sneakers, made for ultimate performance and style.',
    product_image: 'https://dsc.cloud/88160a/asics_sneaker_1.webp',
    category_id: 'cd60d062-1ed5-4a91-8740-7009a9264d72',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '6a217445-d4c3-4c2a-a369-bef9e7542d5e',
          productId: '23456789-abcd-ef01-2345-6789abcdef01',
        },
      },
    },
  },
  {
    id: 'b6a6dab9-3c4d-5e6f-1a2b-3c4d5e6f7a8b',
    name: 'Asics Cap',
    description:
      'Protect yourself from the sun in style with the Asics Cap, a practical and fashionable choice.',
    product_image: 'https://dsc.cloud/88160a/asics_cap.webp',
    category_id: '135abb8c-370a-468d-ba88-2f72df1c3d39',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: 'a6d7f9e7-5917-4d11-baf3-f775677b9e7a',
          productId: 'b6a6dab9-3c4d-5e6f-1a2b-3c4d5e6f7a8b',
        },
      },
    },
  },
  {
    id: '9b8a7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d',
    name: 'Adidas T-Shirt',
    description:
      'Stay stylish and comfortable in the Adidas T-Shirt, perfect for everyday wear and workouts.',
    product_image: 'https://dsc.cloud/88160a/adidas_tshirt_1.webp',
    category_id: 'df9f377d-fd75-4638-a2ca-1a3ded811427',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: 'c054dd0c-75b1-481a-8231-cea6a4359a03',
          productId: '9b8a7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d',
        },
      },
    },
  },
  {
    id: 'b6a7c8d9-e0f1-2a3b-4c5d-6e7f8g9h0i1j',
    name: 'Adidas Socks #1',
    description:
      'Enjoy the comfort and durability of Adidas Socks, made for all kinds of activities.',
    product_image: 'https://dsc.cloud/88160a/adidas_socks.webp',
    category_id: 'df9f377d-fd75-4638-a2ca-1a3ded811427',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '1b0210e4-3411-43c8-895e-5ef7e7892e9c',
          productId: 'b6a7c8d9-e0f1-2a3b-4c5d-6e7f8g9h0i1j',
        },
      },
    },
  },
  {
    id: 'c9b8a7d6-e5f4-3a2b-1c0d-2e3f4g5h6i7j',
    name: 'Adidas Socks #2',
    description:
      'Experience the superior comfort and support of another variant of Adidas Socks.',
    product_image: 'https://dsc.cloud/88160a/adidas_socks_1.webp',
    category_id: 'df9f377d-fd75-4638-a2ca-1a3ded811427',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '1b0210e4-3411-43c8-895e-5ef7e7892e9c',
          productId: 'c9b8a7d6-e5f4-3a2b-1c0d-2e3f4g5h6i7j',
        },
      },
    },
  },
  {
    id: 'e4d5c6b7-a8f9-0e1d-2c3b-4f5g6h7i8j9k',
    name: 'Adidas Sneaker',
    description:
      'Discover ultimate comfort and performance with Adidas Sneakers, made for all-day wear.',
    product_image: 'https://dsc.cloud/88160a/adidas_sneaker_2.webp',
    category_id: 'cd60d062-1ed5-4a91-8740-7009a9264d72',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '6a217445-d4c3-4c2a-a369-bef9e7542d5e',
          productId: 'e4d5c6b7-a8f9-0e1d-2c3b-4f5g6h7i8j9k',
        },
      },
    },
  },
  {
    id: '4f5g6h7i-8j9k-0l1m-2n3o-4p5q6r7s8t9u',
    name: 'Adidas Shorts',
    description:
      'Enjoy freedom of movement and stay cool with Adidas Shorts, suitable for workouts or casual wear.',
    product_image: 'https://dsc.cloud/88160a/adidas_shorts.webp',
    category_id: 'df9f377d-fd75-4638-a2ca-1a3ded811427',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '42c78492-4ff1-4b26-9cd8-6378e92661ba',
          productId: '4f5g6h7i-8j9k-0l1m-2n3o-4p5q6r7s8t9u',
        },
      },
    },
  },
  {
    id: '4a3d2e1f-9g8h-7i6j-5k4l-3m2n1o0p9q8r',
    name: 'Adidas Shorts #1',
    description:
      'Step into comfort and style with another variant of Adidas Shorts, perfect for athletic and leisure activities.',
    product_image: 'https://dsc.cloud/88160a/adidas_shorts_1.webp',
    category_id: 'df9f377d-fd75-4638-a2ca-1a3ded811427',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '42c78492-4ff1-4b26-9cd8-6378e92661ba',
          productId: '4a3d2e1f-9g8h-7i6j-5k4l-3m2n1o0p9q8r',
        },
      },
    },
  },
  {
    id: 'a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6',
    name: 'Adidas Jacket',
    description:
      'Brace the weather in style with the Adidas Jacket, ensuring you stay warm and fashionable.',
    product_image: 'https://dsc.cloud/88160a/adidas_jacket.webp',
    category_id: 'df9f377d-fd75-4638-a2ca-1a3ded811427',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '42c12392-4ff1-4b12-9cd8-6378e92661ba',
          productId: 'a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6',
        },
      },
    },
  },
  {
    id: 'a1b2c3d4-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
    name: 'Adidas Hoodie',
    description:
      'Keep cozy and comfy with the Adidas Hoodie, suitable for everyday wear and workouts.',
    product_image: 'https://dsc.cloud/88160a/adidas_hoodie.webp',
    category_id: 'df9f377d-fd75-4638-a2ca-1a3ded811427',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '9ee38407-8f76-4a79-be32-932aaa4a316c',
          productId: 'a1b2c3d4-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
        },
      },
    },
  },
  {
    id: 'a1b2d3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6',
    name: 'Adidas Hoodie #1',
    description:
      'Stay warm and stylish with another fashionable Adidas Hoodie, perfect for chilly days.',
    product_image: 'https://dsc.cloud/88160a/adidas_hoodie_1.webp',
    category_id: 'df9f377d-fd75-4638-a2ca-1a3ded811427',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '9ee38407-8f76-4a79-be32-932aaa4a316c',
          productId: 'a1b2d3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6',
        },
      },
    },
  },
  {
    id: '1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6',
    name: 'Adidas Cap',
    description:
      'Shield yourself from the sun in style with the Adidas Cap, combining functionality with fashion.',
    product_image: 'https://dsc.cloud/88160a/adidas_cap.webp',
    category_id: '135abb8c-370a-468d-ba88-2f72df1c3d39',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: 'a6d7f9e7-5917-4d11-baf3-f775677b9e7a',
          productId: '1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6',
        },
      },
    },
  },
  {
    id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
    name: 'Adidas Backpack',
    description:
      'Carry your essentials with ease and style with the Adidas Backpack.',
    product_image: 'https://dsc.cloud/88160a/adidas_backpack.webp',
    category_id: '135abb8c-370a-468d-ba88-2f72df1c3d39',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: '9afc676f-8b86-489f-a08e-b95f72b2fe0d',
          productId: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
        },
      },
    },
  },
  {
    id: '12345678-9abc-def0-1234-56789abcdef0',
    name: 'Reebok Polo Shirt',
    description:
      'Embrace a classic look with the Reebok Polo Shirt, perfect for casual and semi-formal settings.',
    product_image: 'https://dsc.cloud/88160a/reebok_polo_shirt.webp',
    category_id: 'df9f377d-fd75-4638-a2ca-1a3ded811427',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: 'fedf55c4-372f-4d64-b6d4-cc5a6a3f6c77',
          productId: '12345678-9abc-def0-1234-56789abcdef0',
        },
      },
    },
  },
  {
    id: '87654321-0fed-cba9-8765-43210abcdef0',
    name: 'Nike Polo Shirt',
    description:
      'Showcase timeless style with the Nike Polo Shirt, suitable for various occasions.',
    product_image: 'https://dsc.cloud/88160a/nike_polo_shirt.webp',
    category_id: 'df9f377d-fd75-4638-a2ca-1a3ded811427',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: 'fedf55c4-372f-4d64-b6d4-cc5a6a3f6c77',
          productId: '87654321-0fed-cba9-8765-43210abcdef0',
        },
      },
    },
  },
  {
    id: 'a1b2c3d4-5e6f-7g8j-9i0j-1k2l3m4n5o6p',
    name: 'Lacoste Polo Shirt',
    description:
      'Exude elegance and comfort with the Lacoste Polo Shirt, a must-have for your wardrobe.',
    product_image: 'https://dsc.cloud/88160a/lacoste_polo_shirt.webp',
    category_id: 'df9f377d-fd75-4638-a2ca-1a3ded811427',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: 'fedf55c4-372f-4d64-b6d4-cc5a6a3f6c77',
          productId: 'a1b2c3d4-5e6f-7g8j-9i0j-1k2l3m4n5o6p',
        },
      },
    },
  },
  {
    id: '1a2r3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6',
    name: 'Adidas Polo Shirt',
    description:
      'Stay cool and stylish with the Adidas Polo Shirt, perfect for everyday wear and sports activities.',
    product_image: 'https://dsc.cloud/88160a/adidas_polo_shirt.webp',
    category_id: 'df9f377d-fd75-4638-a2ca-1a3ded811427',
    collections: {
      connect: {
        collectionId_productId: {
          collectionId: 'fedf55c4-372f-4d64-b6d4-cc5a6a3f6c77',
          productId: '1a2r3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6',
        },
      },
    },
  },
];

async function createProducts() {
  for (let i = 0; i < fakeProductsSeedData.length; i++) {
    await prisma.product.create({
      data: {
        id: fakeProductsSeedData[i].id,
        category_id: fakeProductsSeedData[i].category_id,
        description: fakeProductsSeedData[i].description,
        name: fakeProductsSeedData[i].name,
        product_image: fakeProductsSeedData[i].product_image,
      },
    });
  }
}

async function createProductCollectionsAndConnectProducts() {
  for (let i = 0; i < fakeProductsSeedData.length; i++) {
    await prisma.product_collection.create({
      data: {
        collectionId:
          fakeProductsSeedData[i].collections.connect.collectionId_productId
            .collectionId,
        productId:
          fakeProductsSeedData[i].collections.connect.collectionId_productId
            .productId,
      },
    });

    await prisma.product.update({
      where: { id: fakeProductsSeedData[i].id },
      data: {
        collections: {
          connect: {
            collectionId_productId: {
              productId:
                fakeProductsSeedData[i].collections.connect
                  .collectionId_productId.productId,
              collectionId:
                fakeProductsSeedData[i].collections.connect
                  .collectionId_productId.collectionId,
            },
          },
        },
      },
    });
  }
}

async function createProductItems() {
  for (let i = 0; i < fakeProductsSeedData.length; i++) {
    const currentProduct = fakeProductsSeedData[i];
    const productCategoryId = currentProduct.category_id;
    const categoryVariations = await prisma.variation.findMany({
      where: {
        product_categoryId: productCategoryId,
      },
      include: {
        variation_options: true,
      },
    });

    interface VariationWithVariationOptions extends variation {
      variation_options: variation_option[];
    }

    function getPermutations(arrays: string[][]): string[][] {
      // Base case: if there's only one array left, return it
      if (arrays.length === 1) {
        return arrays[0].map((item) => [item]);
      }

      // Recursive case: get the permutations for the rest of the arrays
      const [first, ...rest] = arrays;
      const restPermutations = getPermutations(rest);

      // Combine the first array with the permutations of the rest
      const permutations: string[][] = [];
      for (const item of first) {
        for (const restPermutation of restPermutations) {
          permutations.push([item, ...restPermutation]);
        }
      }

      return permutations;
    }

    async function generateProductItems(
      categoryVariations: VariationWithVariationOptions[],
      prefix = [],
    ) {
      if (categoryVariations.length === 0) {
        return prefix;
      }

      const numOfCategoryVariations = categoryVariations.length;

      const permutationsBase: string[][] = [];

      for (let i = 0; i < numOfCategoryVariations; i++) {
        permutationsBase.push([]);
      }

      if (categoryVariations.length === 1) {
        permutationsBase[0] = categoryVariations[0].variation_options.map(
          (option) => option.id,
        );
      } else {
        for (let i = 0; i < categoryVariations.length; i++) {
          const currentVariation = categoryVariations[i];
          const { variation_options } = currentVariation;
          if (i === 0) {
            permutationsBase[0] = variation_options.map((option) => option.id);
          } else
            variation_options.map(
              (option) =>
                (permutationsBase[i] = [...permutationsBase[i], option.id]),
            );
        }
      }

      const permutations = getPermutations(permutationsBase);

      let productConfigurationsCreationData: {
        create:
          | { variation_option_id: string }
          | { variation_option_id: string }[];
      };

      for (let i = 0; i < permutations.length; i++) {
        switch (permutations[i].length) {
          case 1:
            productConfigurationsCreationData = {
              create: {
                variation_option_id: permutations[i][0],
              },
            };
            break;
          case 2:
            productConfigurationsCreationData = {
              create: [
                {
                  variation_option_id: permutations[i][0],
                },
                {
                  variation_option_id: permutations[i][1],
                },
              ],
            };
            break;

          default:
            productConfigurationsCreationData = undefined;
        }

        const allColorOptions = await prisma.variation_option.findMany({
          where: {
            variation: {
              name: 'color',
            },
          },
        });

        const findMatchingOptions = (
          colorOptions: {
            id: string;
            variation_id: string;
            value: string;
          }[],
          configurations: {
            create:
              | { variation_option_id: string }
              | { variation_option_id: string }[];
          },
        ): {
          id: string;
          variation_id: string;
          value: string;
        } => {
          let configVariationOptionIds: string[] = [];

          // Check whether 'create' is an array or a single object, and extract variation_option_id(s)
          if (Array.isArray(configurations.create)) {
            configVariationOptionIds = configurations.create.map(
              (config) => config.variation_option_id,
            );
          } else {
            configVariationOptionIds.push(
              configurations.create.variation_option_id,
            );
          }

          // Filter color options to only those that have a matching variation_option_id
          return colorOptions.filter((option) =>
            configVariationOptionIds.includes(option.id),
          )[0];
        };

        function removeWebpExtension(url: string): string {
          return url.replace(/\.webp$/, '');
        }

        const getImageForProductItem = () => {
          const matchingOption = findMatchingOptions(
            allColorOptions,
            productConfigurationsCreationData,
          );
          const currentProductImage = removeWebpExtension(
            currentProduct.product_image,
          );
          if (matchingOption) {
            return `${currentProductImage}_${matchingOption.value}.webp`;
          } else return currentProduct.product_image;
        };

        // {
        //   create: [
        //     { variation_option_id: '234a8f12-846a-4124-a61f-733fe79e5da6' },
        //     { variation_option_id: 'f0a728a5-6d03-4f94-91bf-4a6e128a7131' }
        //   ]
        // }

        // {
        //   create: { variation_option_id: 'cda27754-e9f1-49a7-96dc-ac995017033a' }
        // }

        const generateSKU = async (productConfigurationsCreationData: {
          create:
            | {
                variation_option_id: string;
              }
            | {
                variation_option_id: string;
              }[];
        }) => {
          let configurationOptionsData: variation_option[] | variation_option;

          // Check whether 'create' is an array or a single object, and extract variation_option_id(s)
          if (Array.isArray(productConfigurationsCreationData.create)) {
            configurationOptionsData = await prisma.variation_option.findMany({
              where: {
                OR: productConfigurationsCreationData.create.map((item) => ({
                  id: item.variation_option_id,
                })),
              },
            });
          } else {
            configurationOptionsData = await prisma.variation_option.findUnique(
              {
                where: {
                  id: productConfigurationsCreationData.create
                    .variation_option_id,
                },
              },
            );
          }

          if (Array.isArray(configurationOptionsData)) {
            return configurationOptionsData
              .map((option) => option.value.toUpperCase())
              .join('_');
          }
          return configurationOptionsData.value.toUpperCase();
        };

        await prisma.product_item.create({
          data: {
            product_id: currentProduct.id,
            price: Number(faker.commerce.price({ min: 500 })),
            SKU: await generateSKU(productConfigurationsCreationData),
            qty_in_stock: faker.number.int({ min: 0, max: 50 }),
            product_configurations: productConfigurationsCreationData,
            product_images: [getImageForProductItem()],
          },
        });
      }
    }

    generateProductItems(categoryVariations);
  }
}

async function main() {
  await createUserAndCategories();
  await createProducts();
  await createProductCollectionsAndConnectProducts();
  await createProductItems();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
