import { subscribe } from 'diagnostics_channel'
import { of, Observable, interval, take, retry } from 'rxjs'
import { map, filter, findIndex, reduce } from 'rxjs/operators'

// 观察器 迭代器模式 + 观察者模式
/* const observable = new Observable(subscribe => {
  // 发送一个消息 
  subscribe.next(1)
  subscribe.next(2)
  subscribe.next(3)
  setTimeout(() => {
    subscribe.next(4)
    // 结束监听
    subscribe.complete()
    subscribe.next(5)
  }, 500);
})

observable.subscribe({
  next: (num) => {
    console.log(num);
  }
}) */


// 与 setInterval 类似，单位：毫秒, 从 0 开始执行 0 1 2 3 4
// pipe 管道，可以格式化输出数据，可以有多个
// take(5) 表示执行 5 次
// subscribe 观察者，最后执行

/* 

  interval(500).pipe(take(5)).subscribe(e => {
    console.log(e);
  })
*/


/* const subs = interval(500).pipe(map(v => ({ num: v })), filter(v => v.num % 2 === 0)).subscribe(e => {
  console.log(e);
  if (e.num === 10) {
    // 停止观察
    subs.unsubscribe()
  }
}) */


/* const subs = of(1, 2, 3, 4, 5, 6).pipe(map(v => ({ num: v })), filter(v => v.num % 2 === 0)).subscribe(e => {
  console.log(e);
  if (e.num === 10) {
    // 停止观察
    subs.unsubscribe()
  }
}) */

// retry 失败了会重新执行， 3 代表执行 3 次
const subs = of(1, 2, 3, 4, 5, 6).pipe(retry(3), map(v => ({ num: v })), filter(v => v.num % 2 === 0)).subscribe(e => {
  console.log(e);
  if (e.num === 10) {
    // 停止观察
    subs.unsubscribe()
  }
})