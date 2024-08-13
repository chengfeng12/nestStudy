import { Module, forwardRef } from '@nestjs/common';
import { SpiderService } from './spider.service';
import { SpiderController } from './spider.controller';
import { UploadModule } from "../upload/upload.module"

@Module({
  imports: [UploadModule],
  controllers: [SpiderController],
  providers: [SpiderService]
})
export class SpiderModule { }
