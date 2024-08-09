import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CrudService } from './crud.service';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';


@Controller('crud')
export class CrudController {
  constructor(private readonly crudService: CrudService) { }

  @Post()
  create(@Body() createCrudDto: CreateCrudDto) {
    return this.crudService.create(createCrudDto);
  }

  @Get()
  findAll(@Query() params: { keyword: string, pageSize: number, pageNum: number }) {
    console.log(params, 'params');

    return this.crudService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crudService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCrudDto: UpdateCrudDto) {
    return this.crudService.update(+id, updateCrudDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crudService.remove(+id);
  }

  @Post("/add/tags")
  addTags(@Body() data: { id: number, tags: string[] }) {
    return this.crudService.addTags(data)
  }
}
