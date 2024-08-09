import { Injectable } from '@nestjs/common';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'
import { Crud } from './entities/crud.entity'
import { Tags } from './entities/tags.entity';
@Injectable()
export class CrudService {
  constructor(
    @InjectRepository(Crud) private readonly crud: Repository<Crud>,
    @InjectRepository(Tags) private readonly tags: Repository<Tags>
  ) { }
  create(createCrudDto: CreateCrudDto) {
    const data = new Crud()
    data.name = createCrudDto.name;
    data.describe = createCrudDto.describe;
    return this.crud.save(data)
  }

  async findAll(params: { keyword: string, pageSize: number, pageNum: number }) {
    const { pageSize = 10, pageNum = 1, keyword } = params;
    let nameLike = keyword ? Like(`%${keyword}%`) : null;
    // 查询总数
    const total = await this.crud.count({
      where: {
        name: nameLike
      }
    })
    const data = await this.crud.find({
      relations: ['tags'], // 会把关联属性返回
      // 排序
      order: {
        id: "DESC"
      },
      where: {
        name: nameLike
      },
      skip: (pageNum - 1) * pageSize,
      take: pageSize
    })
    return {
      total,
      data,
      pageSize,
      pageNum
    }
  }

  findOne(id: number) {
    return this.crud.findOne({
      where: {
        id
      }
    })
  }

  update(id: number, updateCrudDto: UpdateCrudDto) {
    return this.crud.update(id, updateCrudDto)
  }

  remove(id: number) {
    return this.crud.delete(id)
  }

  async addTags(data: { id: number, tags: string[] }) {
    const {id, tags = []} = data
    const crudInfo = await this.crud.findOne({
      where: {
        id
      }
    })
    const crudTags = []
    for (let i = 0; i < tags.length; i++) {
      const tag = new Tags()
      const item = tags[i]
      tag.name = item
      // 会一直新增
      await this.tags.save(tag)
      crudTags.push(tag)
    }
    crudInfo.tags = crudTags
    return this.crud.save(crudInfo)
  }
}
