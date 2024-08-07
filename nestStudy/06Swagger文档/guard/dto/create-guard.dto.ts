import { ApiProperty } from "@nestjs/swagger";

export class CreateGuardDto {
  @ApiProperty({example: '章三'})
  name: string
  @ApiProperty()
  phone: number
}
