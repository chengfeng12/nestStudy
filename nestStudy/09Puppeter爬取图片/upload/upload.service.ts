import { Injectable } from '@nestjs/common';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { application, Request, Response } from 'express';
import { join } from 'path';
import { zip } from 'compressing';

@Injectable()
export class UploadService {
  download(res: Response, path: string) {
    // console.log(res, 'resresres');
    const url = join(__dirname, `../images/${path}`)
    return res.download(url)
  }
  async download2(res: Response, path: string) {
    const url = join(__dirname, `../images/${path}`)
    const stream = new zip.Stream()
    await stream.addEntry(url)
    // 设置 stream 的响应格式
    res.setHeader('Content-Type', 'application/octet-stream')
    // 设置返回的文件名
    res.setHeader(`Content-Disposition`, `attachment; filename=fileName`)
    stream.pipe(res)
    return true
  }
}
