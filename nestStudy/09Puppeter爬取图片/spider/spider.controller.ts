import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpiderService } from './spider.service';
import { UploadService } from './../upload/upload.service';
@Controller('spider')
export class SpiderController {
  constructor(
    private readonly spiderService: SpiderService,
    private readonly uploadService: UploadService
  ) {}
  @Get()
  findAll() {
    return this.spiderService.findAll();
  }
  @Get('images')
  getImages() {
    return this.spiderService.getImages();
  }
}
