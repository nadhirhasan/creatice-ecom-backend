import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Catergory } from 'src/catergory/catergory.schema';
import { CatergoryService } from 'src/catergory/catergory.service';
import { Product, CreateProductInput } from './product.schema';
import { ProductService } from './product.service';

@Resolver(() => Product)
export class ProductResolver {
  constructor(
    private productService: ProductService,
    private catergoryService: CatergoryService,
  ) {}

  @Query(() => [Product]) // <-- what will the query return?
  async products /* <-- Query name */() {
    return this.catergoryService.findMany(); // Resolve the query
  }

  @Mutation(() => Product)
  async createProduct(@Args('input') product: CreateProductInput) {
    return this.productService.createProduct(product);
  }

  @ResolveField(() => Catergory)
  async product(@Parent() product: Product) {
    return this.catergoryService.findById(product.catergory);
  }
}
