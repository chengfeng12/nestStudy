import { Injectable } from '@nestjs/common';
import axios from 'axios'
// 多页应用
import * as cheerio from 'cheerio'
import * as fs from 'fs'
import * as path from 'path'
// 单页应用 https://puppeteer.bootcss.com/api#class-puppeteer
import puppeteer from 'puppeteer';
@Injectable()
export class SpiderService {
  async findAll() {
    const getCosPlay = async () => {
      /* let body = await axios.get('https://iuroc.github.io/haixiu/').then(res => res.data).catch(err => {
        console.log(err, '1111');
        
      })
      console.log(body, 'body'); */

      const browser = await puppeteer.launch()
      const page = await browser.newPage()
      await page.goto('https://iuroc.github.io/haixiu/');
      await page.reload({ timeout: 3000, waitUntil: 'domcontentloaded' })

      await page.on('request', e => {
        console.log(e.url(), '111');
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
    getCosPlay()
    return '222'
  }
}
