// 入口文件
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path'
import * as cors from 'cors'
const whiteList = ['/user']
const MiddleWare = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.originalUrl, '请求地址');
  next()
  /* if (whiteList.includes(req.originalUrl)) {
    next()
  } else {
    res.send({
      msg: "你被拦截了"
    })
  } */
}
// 使用 NestFactory 用来创建 Nest 应用实例
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(cors());
  app.use(MiddleWare);
  // 静态资源访问目录
  app.useStaticAssets(join(__dirname, 'images'), {
    // 配置文件前缀
    prefix: '/img'
  })
  // 开启版本控制
  app.enableVersioning({
    type: VersioningType.URI,
    // 全局默认第一个版本
    // defaultVersion: '1',
  });
  // 开启一个 3000 端口
  await app.listen(3000);
}
bootstrap();
