import { Length } from 'class-validator';
import { Injectable, Res } from '@nestjs/common';
import axios from 'axios'
// 多页应用 爬虫工具
import * as cheerio from 'cheerio'
import * as fs from 'fs'
import { join } from 'path'
// 单页应用 https://puppeteer.bootcss.com/api#class-puppeteer
import puppeteer from 'puppeteer';
import { UploadService } from 'src/upload/upload.service';
import { Response } from 'express';

// 方法一：使用substring函数
function getFileName(filePath) {
  // 获取文件名的起始位置
  let startIndex = filePath.lastIndexOf('/') + 1; // 或者用lastIndexOf('\\') + 1
  // 获取文件名的结束位置
  let endIndex = filePath.lastIndexOf('.');
  // 提取文件名
  let fileName = filePath.substring(startIndex);
  return fileName;
}

@Injectable()
export class SpiderService {
  // @Res() res: Response
  async findAll() {
    const pageSize = 36;
    let pageNum = 1;
    const getCosPlay = async (linkUrl: string) => {
      /* let body = await axios.get('https://iuroc.github.io/haixiu/').then(res => res.data).catch(err => {
        console.log(err, '1111');
        
      })
      console.log(body, 'body'); */

      const browser = await puppeteer.launch({
        headless: false
      })
      const page = await browser.newPage()
      // await page.goto('https://www.upupoo.com/bd01?n=20210426043&bd_vid=11724880147497932614');
      await page.goto(linkUrl);
      await page.reload({ timeout: 3000, waitUntil: 'domcontentloaded' })
      await page.on('request', async e => {
        const src = e.url()
        console.log(src, 'srcsrcsrc');
        let imgRegex = /(\jpg|\jpeg|\png|\gif|\webp)$/i;
        if (imgRegex.test(src)) {
          // this.writeFile(src)
          // const fileName = getFileName(src)
          // await page.download(src, {path: fileName});
        } else if (src.includes('json')) {
          let resJson = await axios.get(src).then(res => res.data)
          console.log(resJson, 'resJson');
          if (resJson.total) {
            const list = (resJson.list || []).map(item => `https://iuroc.github.io/haixiu/images/${item.bigImageFilename}`)
            for (let i = 0; i < list.length; i++) {
              this.writeFile(list[i]).then(async res => {
                if (i === list.length - 1) {
                  pageNum += 1
                  await browser.close();
                  console.log("结束");
                  if (pageNum <= resJson.page) {
                    getCosPlay('https://iuroc.github.io/haixiu/#')
                  }
                  // getCosPlay('https://iuroc.github.io/haixiu/#')
                }
              })
            }
          }
        }
      })
      // 生成介截图并保存
      // await page.screenshot({ path: path.join(__dirname, '../images/pic.png') });
      // 获取一个元素
      // const searchValue = await page.$eval('.card-img-top', e => e.outerHTML)
      // const searchValue = await page.$eval('.fs-2', e => e.outerHTML)
      // console.log(searchValue, 'searchValue');

      await browser.close();
      console.log("结束");

      // const res = await page.goto(`https://iuroc.github.io/haixiu/`)
      // console.log(res, 'res');
    }
    getCosPlay('https://iuroc.github.io/haixiu/#')
    return '获取成功'
  }
  getImages() {
    const pageSize = 36;
    let pageNum = 1;
    const callback = (resJson) => {
      pageNum += 1
      // console.log(resJson);
      if (pageNum <= resJson.pageSize) {
        setTimeout(() => {
          this.getJsonData(`https://iuroc.github.io/haixiu/datas/data_${pageNum}.json`, callback, pageNum)
        }, 3000)
      }
    }
    this.getJsonData(`https://iuroc.github.io/haixiu/datas/data_${pageNum}.json`, callback, pageNum)
    return '爬取成功'
  }
  async getJsonData(jsonUrl: string, callback, pageNum: number) {
    let resJson = await axios.get(jsonUrl).then(res => res.data)
    if (resJson.total) {
      const list = (resJson.list || []).map(item => `https://iuroc.github.io/haixiu/images/${item.bigImageFilename}`)
      console.log(list);
      for (let i = 0; i < list.length; i++) {
        console.log(`第${pageNum}页，一共 ${list.length} 个，当前 ${i + 1} 个`, '------');
        try {
          const res: boolean = await this.writeFile(list[i])
          console.log(2222);
          if (res) {
            if (i === list.length - 1) {
              callback(resJson);
            }
          }
        } catch (error) {
          console.log(3333);
        }
      }
    }
  }
  async writeFile(url: string): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      try {
        const fileName = getFileName(url)
        const buffer = await axios.get(url, {
          responseType: "arraybuffer", // 务必设置响应类型
        }).then(res => res.data);
        // const buffer  = await axios.get('http://image109.360doc.com/DownloadImg/2024/05/3002/284235419_2_20240530022245958.png').then(res => res.data);
        const ws = fs.createWriteStream(join(__dirname, `../../../images/cos/${new Date().getTime()}${fileName}`));
        ws.write(buffer);
        ws.once('open', function () {
          console.log('open');
          
          // 写入
          ws.write(buffer);
          ws.end(); // 结束写入流
          // 所有数据写入后的回调函数
          ws.once('finish', function () {
            console.log('finish');
            setTimeout(() => {
              resolve(true);
            }, 500);
          });
        });
      } catch (error) {
        reject(error);
        // https://iuroc.github.io/haixiu/images/ce19b0ab74defd1b7b421ab452351b30.jpeg
        // https://iuroc.github.io/haixiu/images/3619e3768d04f60004e2a8ed7b2638de.jpeg
      }
    })

  }
}
