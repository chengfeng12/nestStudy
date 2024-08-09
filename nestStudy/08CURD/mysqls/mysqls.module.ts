import { Module } from '@nestjs/common';
import { MysqlsService } from './mysqls.service';
import { MysqlsController } from './mysqls.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Mysql } from './entities/mysql.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Mysql])],
  controllers: [MysqlsController],
  providers: [MysqlsService]
})
export class MysqlsModule {}
