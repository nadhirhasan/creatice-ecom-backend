import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Product } from 'src/product/product.schema';

@ObjectType()
export class Catergory {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  discount: number;

  @Field(() => [Product])
  products: Product[];
}
