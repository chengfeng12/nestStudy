/* 应用程序的根模块 */
import { Module } from '@nestjs/common';
// controller 是路由
import { AppController } from './app.controller';
// service 是业务
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UploadModule } from './upload/upload.module';
import { LoginModule } from './login/login.module';
import { SpiderModule } from './spider/spider.module';

@Module({
  imports: [UserModule, UploadModule, LoginModule, SpiderModule],
  controllers: [AppController],
  // https://docs.nestjs.cn/9/providers?id=providers
  providers: [AppService],
})
export class AppModule {}
