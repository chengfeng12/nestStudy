
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ParseBoolPipe, ValidationPipe } from '@nestjs/common';
/* 

ParseIntPipe, ParseBoolPipe 等等 转化参数的作用

*/
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
// import { LoginPipe } from './login.pipe'; // 手写版

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  // @Body(LoginPipe)
  @Post()
  create(@Body() createLoginDto: CreateLoginDto) {
    console.log(createLoginDto, 'createLoginDto');
    return this.loginService.create(createLoginDto);
  }

  @Get()
  findAll() {
    return this.loginService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    console.log(typeof id); // string
    return this.loginService.findOne(+id);
  }
 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoginDto: UpdateLoginDto) {
    return this.loginService.update(+id, updateLoginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginService.remove(+id);
  }
}
