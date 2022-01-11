import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { ProductService } from 'src/product/product.service';
import { Catergory } from './catergory.schema';
import { CatergoryService } from './catergory.service';

@Resolver(() => Catergory)
export class CatergoryResolver {
  constructor(
    private catergoryService: CatergoryService,
    private productService: ProductService,
  ) {}

  @Query(() => [Catergory])
  async catergories() {
    return this.catergoryService.findMany();
  }

  @ResolveField()
  async products(@Parent() parent: Catergory) {
    return this.productService.findByCatergoryId(parent.id);
  }
}
