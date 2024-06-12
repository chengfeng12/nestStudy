import axios from "axios"

const Get = (url: string) => {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const fun = descriptor.value
    axios(url).then(res => {
      fun(res, {
        code: 200,
        message: '成功'
      })
    }).catch(e => {
      fun(e, {
        code: 500,
        message: '失败'
      })
    })
  }
}

class Container {
  constructor() {}
  @Get('https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=50&from=0&aid=2608&uuid=7107466639981069857&spider=0')
  getList(res: any, data: any): void {
    console.log(res.data.data, data);
  }
}
// new Container()
// const getList = new Container()
// getList();
export {}