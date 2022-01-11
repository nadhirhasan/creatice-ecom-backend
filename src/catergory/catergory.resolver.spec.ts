import { Test, TestingModule } from '@nestjs/testing';
import { CatergoryResolver } from './catergory.resolver';

describe('CatergoryResolver', () => {
  let resolver: CatergoryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatergoryResolver],
    }).compile();

    resolver = module.get<CatergoryResolver>(CatergoryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
