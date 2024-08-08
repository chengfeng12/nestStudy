import { Test, TestingModule } from '@nestjs/testing';
import { MysqlsController } from './mysqls.controller';
import { MysqlsService } from './mysqls.service';

describe('MysqlsController', () => {
  let controller: MysqlsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MysqlsController],
      providers: [MysqlsService],
    }).compile();

    controller = module.get<MysqlsController>(MysqlsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
