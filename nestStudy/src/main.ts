// 入口文件
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 使用 NestFactory 用来创建 Nest 应用实例
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 开启一个 3000 端口
  await app.listen(3000);
}
bootstrap();
