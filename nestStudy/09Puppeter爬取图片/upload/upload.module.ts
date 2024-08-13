import { Module, forwardRef } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';

@Module({
  imports: [MulterModule.register({
    // 文件存放的位置
    storage: diskStorage({
      destination: join(__dirname, '../images'),
      filename: (_, file, callback) => {
        const fileName = `${new Date().getTime()}${extname(file.originalname)}`
        return callback(null, fileName)
      }
    })
  })],
  controllers: [UploadController],
  providers: [UploadService],
  exports: [UploadService]
})
export class UploadModule {}
