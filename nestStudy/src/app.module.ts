/* 应用程序的根模块 */
import { Module } from '@nestjs/common';
// controller 是路由
import { AppController } from './app.controller';
// service 是业务
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  // https://docs.nestjs.cn/9/providers?id=providers
  providers: [AppService],
})
export class AppModule {}
