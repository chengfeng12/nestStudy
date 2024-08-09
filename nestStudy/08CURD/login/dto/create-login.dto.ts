import { IsNotEmpty, IsString, Length, IsNumber } from 'class-validator'

export class CreateLoginDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 10, {
    message: "最小 5 个字符，不能超过 10 个字符"
  })
  name: string
  @IsNumber({ allowNaN: false }, {
    message: "必须是 11 位的数字"
  })
  phone: number
}
