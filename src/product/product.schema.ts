import { Field, InputType, Int, ObjectType, ID } from '@nestjs/graphql';
import { Catergory } from 'src/catergory/catergory.schema';

@ObjectType()
export class Product {
  @Field(() => ID)
  id: number;

  @Field()
  offer: number;

  @Field()
  discount: number;

  @Field()
  price: number;

  @Field()
  name: string;

  @Field()
  btn_name: string;

  @Field(() => Catergory)
  catergory: Catergory | number;
}

@InputType()
export class CreateProductInput {
  @Field(() => ID)
  id: number;

  @Field()
  offer: number;

  @Field()
  discount: number;

  @Field()
  price: number;

  @Field()
  name: string;

  @Field()
  btn_name: string;

  @Field(() => Int)
  catergory: number;
}

@InputType()
export class FindProductInput {
  @Field(() => Int)
  id: number;
}
