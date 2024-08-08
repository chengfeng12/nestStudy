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
import { GuardModule } from './guard/guard.module';
import { MysqlsModule } from './mysqls/mysqls.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [UserModule, UploadModule, LoginModule, SpiderModule, GuardModule, MysqlsModule, TypeOrmModule.forRoot({
    type: "mysql", // 数据库类型
    username: "root", // 账号
    password: "123456", // 密码
    host: "localhost", // host
    port: 3306, //
    database: "db", // 库名
    // entities: [__dirname + '/**/*.entity{.ts,.js}'], // 实体文件 自动找到 子目录中的实体文件
    synchronize: true, // synchronize字段代表是否自动将实体类同步到数据库 要根据环境变量，生产推荐关闭
    retryDelay: 500, // 重试连接数据库间隔
    retryAttempts: 10,// 重试连接数据库的次数
    autoLoadEntities: true, // 如果为true,将自动加载实体 forFeature()方法注册的每个实体都将自动添加到配置对象的实体数组中
  })],
  controllers: [AppController],
  // https://docs.nestjs.cn/9/providers?id=providers
  providers: [AppService],
})
export class AppModule { }
