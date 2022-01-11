import { Module } from '@nestjs/common';
import { CatergoryService } from 'src/catergory/catergory.service';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';

@Module({
  providers: [ProductResolver, ProductService, CatergoryService],
})
export class ProductModule {}
