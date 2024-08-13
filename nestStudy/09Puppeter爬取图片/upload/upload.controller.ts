import { Controller, Post, Get, Body, Param, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import {Response } from 'express';
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) { }

  @Post('album')
  // FileInterceptor 单个上传 file 自定上传的key
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file) {
    console.log(file, 'file');
    return  file;
  }

  // 服务器下载
  @Get('export/:id')
  download(@Res() res: Response, @Param('id') path: string) {
    return this.uploadService.download(res, path)
  }

  // 文件流试写法
  @Get('stream')
  async download2(@Res() res: Response, @Param('id') path: string) {
    return this.uploadService.download2(res, path)
  }
}
