import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, SetMetadata } from '@nestjs/common';
import { GuardService } from './guard.service';
import { CreateGuardDto } from './dto/create-guard.dto';
import { UpdateGuardDto } from './dto/update-guard.dto';
import { RoleGuard } from '../role/role.guard';
import { Role, ReqUrl } from '../role/role.decorator';
import { ApiOperation, ApiTags, ApiParam, ApiQuery, ApiResponse, ApiBearerAuth } from '@nestjs/swagger'

@ApiBearerAuth() 
@ApiTags("守卫接口")
@Controller('guard')
@UseGuards(RoleGuard) // 局部守卫
export class GuardController {
  constructor(private readonly guardService: GuardService) { }

  @Post()
  @ApiOperation({ summary: 'post 接口', description: '描述XXXX' })
  @ApiQuery({ name: "分页接口", description: '分页信息' })
  @ApiResponse({ status: 404, description: "走丢了" })
  create(@Body() createGuardDto: CreateGuardDto) {
    return this.guardService.create(createGuardDto);
  }

  @Get()
  // @SetMetadata('role', ['admin'])
  @Role('admin') // 和 @SetMetadata('role', ['admin']) 效果相同
  findAll(@ReqUrl('333') url: string) {
    console.log(url, "参数装饰器返回的参数");
    return this.guardService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: '这是id', required: true })
  findOne(@Param('id') id: string) {
    return this.guardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuardDto: UpdateGuardDto) {
    return this.guardService.update(+id, updateGuardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guardService.remove(+id);
  }
}
