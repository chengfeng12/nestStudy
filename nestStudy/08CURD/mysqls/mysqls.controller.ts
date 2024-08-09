import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MysqlsService } from './mysqls.service';
import { CreateMysqlDto } from './dto/create-mysql.dto';
import { UpdateMysqlDto } from './dto/update-mysql.dto';

@Controller('mysqls')
export class MysqlsController {
  constructor(private readonly mysqlsService: MysqlsService) {}

  @Post()
  create(@Body() createMysqlDto: CreateMysqlDto) {
    return this.mysqlsService.create(createMysqlDto);
  }

  @Get()
  findAll() {
    return this.mysqlsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mysqlsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMysqlDto: UpdateMysqlDto) {
    return this.mysqlsService.update(+id, updateMysqlDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mysqlsService.remove(+id);
  }
}
