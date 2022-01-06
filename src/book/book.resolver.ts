import { Query, Resolver } from '@nestjs/graphql';
import { Book } from './book.schema';
import { BookService } from './book.service';

@Resolver()
export class BookResolver {
  constructor(private bookService: BookService) {}

  @Query(() => [Book]) // <-- what will the query return?
  async books /* <-- Query name */() {
    return this.bookService.findMany(); // Resolve the query
  }
}
