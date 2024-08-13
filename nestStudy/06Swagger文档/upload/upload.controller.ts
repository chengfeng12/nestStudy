import { Controller, Post, Get, Body, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { application, Request, Response } from 'express';
import { join } from 'path';
import { zip } from 'compressing';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) { }

  @Post('album')
  // FileInterceptor 单个上传 file 自定上传的key
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file) {
    console.log(file, 'file');
    return '测试返回';
  }

  // 服务器下载
  @Get('export')
  download(@Res() res: Response) {
    const url = join(__dirname, '../images/1722911572023.jpeg')
    res.download(url)
  }

  // 文件流试写法
  @Get('stream')
  async download2(@Res() res: Response) {
    const url = join(__dirname, '../images/1722911572023.jpeg')
    const stream = new zip.Stream()
    await stream.addEntry(url)
    // 设置 stream 的响应格式
    res.setHeader('Content-Type', 'application/octet-stream')
    // 设置返回的文件名
    res.setHeader(`Content-Disposition`,  `attachment; filename=fileName`)
    stream.pipe(res)
  }
}
