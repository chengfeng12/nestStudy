// 入口文件
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType, ValidationPipe } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path'
import * as cors from 'cors'
// 响应拦截器
import { InterceptResponse } from './common/response'
// 错误拦截器
import { HttpError } from "./common/responseError";
import { CustomValidationException } from './common/customValidation'
// 引入DTO 校验
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

  // 注册校验
  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: (errors) => {
      const errorMessages = errors.map((error) => error.constraints[Object.keys(error.constraints)[0]]);
      return new CustomValidationException(errorMessages);
    },
  }))
  // 注册响应拦截器
  app.useGlobalInterceptors(new InterceptResponse());
  // 注册错误揽机器
  app.useGlobalFilters(new HttpError());
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
