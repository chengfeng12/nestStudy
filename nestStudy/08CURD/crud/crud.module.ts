import { Module } from '@nestjs/common';
import { CrudService } from './crud.service';
import { CrudController } from './crud.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Crud } from './entities/crud.entity';
import { Tags } from './entities/tags.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Crud, Tags])],
  controllers: [CrudController],
  providers: [CrudService]
})
export class CrudModule {}
