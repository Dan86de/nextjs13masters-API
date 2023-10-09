import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProductInput } from './dto/create-product.input/create-product.input';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  async findAll(skip: number = 0, take: number = 20) {
    return await this.prisma.product.findMany({
      include: {
        category: {
          include: {
            variations: true,
          },
        },
        collections: {
          include: {
            collection: true,
          },
        },
        product_items: {
          include: {
            product_configurations: {
              include: {
                variation_option: true,
              },
            },
          },
          orderBy: {
            price: 'asc',
          },
        },
      },
      skip,
      take,
    });
  }

  async findOne(id: string) {
    return this.prisma.product.findUnique({
      where: { id },
      include: {
        category: {
          include: {
            variations: true,
          },
        },
        product_items: {
          include: {
            product_configurations: {
              include: {
                variation_option: true,
              },
            },
          },
          orderBy: {
            price: 'asc',
          },
        },
      },
    });
  }

  async findAllByName(name: string) {
    return this.prisma.product.findMany({
      where: {
        name: {
          mode: 'insensitive',
          contains: name,
        },
      },
      include: {
        category: {
          include: {
            variations: true,
          },
        },
        collections: {
          include: {
            collection: true,
          },
        },
        product_items: {
          include: {
            product_configurations: {
              include: {
                variation_option: true,
              },
            },
          },
          orderBy: {
            price: 'asc',
          },
        },
      },
    });
  }

  async findAllFromGivenCollection(collectionId: string) {
    return await this.prisma.product.findMany({
      where: {
        collections: {
          some: {
            collectionId,
          },
        },
      },
      include: {
        _count: true,
        category: {
          select: {
            id: true,
            category_name: true,
          },
        },
        collections: true,
        product_items: {
          include: {
            product_configurations: {
              include: {
                variation_option: true,
              },
            },
          },
          orderBy: {
            price: 'asc',
          },
        },
      },
    });
  }

  async findAllFromGivenCategory(categoryId: string) {
    return await this.prisma.product.findMany({
      where: {
        category_id: categoryId,
      },
      include: {
        category: {
          include: {
            variations: true,
          },
        },
        product_items: {
          include: {
            product_configurations: {
              include: {
                variation_option: true,
              },
            },
          },
          orderBy: {
            price: 'asc',
          },
        },
      },
    });
  }

  async create(createProductInput: CreateProductInput, category_id: string) {
    return this.prisma.product.create({
      data: { ...createProductInput, category_id },
    });
  }
}
