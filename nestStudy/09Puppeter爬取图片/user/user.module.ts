import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Logger } from '../middleware/index'

@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    /* 
      字符串写法：
        consumer.apply(Logger).forRoutes('user')
        forRoutes 中的 user 对应的是 user.controller.ts 中的 @Controller('user') 控制器的名字
      对象写法：
        consumer.apply(Logger).forRoutes({ path: 'user', method: RequestMethod.GET })
        path: 同上
        method:针对某种请求类型接接口进行拦截
        version: 对应版本
      第三种 直接放入控制器
        则会对整个控制器中的所有路由进行拦截
    */
    consumer.apply(Logger).forRoutes(UserController)
  }
}
