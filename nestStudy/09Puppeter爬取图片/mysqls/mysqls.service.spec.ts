import { Test, TestingModule } from '@nestjs/testing';
import { MysqlsService } from './mysqls.service';

describe('MysqlsService', () => {
  let service: MysqlsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MysqlsService],
    }).compile();

    service = module.get<MysqlsService>(MysqlsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
