import { Injectable, NestInterceptor, CallHandler, ExecutionContext } from '@nestjs/common'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'
// import { Response } from 'express'
interface Data<T> {
  data: T
}

@Injectable()
export class InterceptResponse<T> implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Data<T>> {
    return next.handle().pipe(map(data => {
      console.log(data, 'data');
      
      return {
        code: 200,
        status: 0,
        success: true,
        message: '请求成功',
        data
      }
    }))
  }
}