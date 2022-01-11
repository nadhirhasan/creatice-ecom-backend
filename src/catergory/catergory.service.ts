import { Injectable } from '@nestjs/common';
import { catergories } from 'src/data/catergories';

@Injectable()
export class CatergoryService {
  async findById(id) {
    const result = catergories.filter((item) => item.id === id);

    return result.length ? result[0] : null;
  }

  async findMany() {
    return catergories;
  }
}
