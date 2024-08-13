import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomValidationException extends HttpException {
  constructor(errorMessages: string[]) {
    super({
      status: HttpStatus.BAD_REQUEST,
      error: errorMessages,
    }, HttpStatus.BAD_REQUEST);
  }
}