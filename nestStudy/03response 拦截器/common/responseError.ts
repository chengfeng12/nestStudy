import { Catch, ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common'
import { Response, Request } from 'express'

@Catch(HttpException)
export class HttpError implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    response.status(status).json({
      sucess: false,
      time: new Date(),
      data: exception.message,
      path: request.url,
      code: status
    })
  }
}