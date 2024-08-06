import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator';

@Injectable()
export class LoginPipe implements PipeTransform {
  // value 请求的参数 愿对象  
  async transform(value: any, metadata: ArgumentMetadata) {
    // console.log(value, metadata, 'value');
    const DTO = plainToInstance(metadata.metatype, value)
    // console.log(DTO, 'DTO');
    let errors = await validate(DTO)
    console.log(errors, 'errors');
    if (errors.length) {
      // throw new HttpException(Object.values(errors[0].constraints)[0], HttpStatus.BAD_REQUEST)
    }
    return value;
  }
}
