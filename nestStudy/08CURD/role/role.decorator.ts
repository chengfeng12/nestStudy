import { createParamDecorator, SetMetadata, ExecutionContext, applyDecorators } from '@nestjs/common';
// 装饰器
export const Role = (...args: string[]) => SetMetadata('role', args);

export const ReqUrl = createParamDecorator((data: string, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest();
  console.log('参数装饰器的参数', data);
  // return applyDecorators([Role, ReqUrl, XXX]) // 组合 装饰器，然后返回
  return req.url
}) 