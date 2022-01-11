import { Module } from '@nestjs/common';
import { ProductService } from 'src/product/product.service';
import { CatergoryResolver } from './catergory.resolver';
import { CatergoryService } from './catergory.service';

@Module({
  providers: [CatergoryResolver, CatergoryService, ProductService],
})
export class CatergoryModule {}
