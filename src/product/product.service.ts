import { Injectable } from '@nestjs/common';
import { products } from 'src/data/products';
import { Product, CreateProductInput } from './product.schema';

@Injectable()
export class ProductService {
  products: Partial<Product>[];

  constructor() {
    this.products = products;
  }

  async findMany() {
    return this.products;
  }

  async findById(id) {
    const products = this.products.filter((product) => {
      product.id === id;
    });

    if (products.length) {
      return this.products[0];
    }

    return null;
  }

  async findByCatergoryId(catergoryId) {
    return this.products.filter((product) => product.catergory === catergoryId);
  }

  async createProduct(product: CreateProductInput) {
    this.products = [product, ...this.products];
    return products;
  }
}
