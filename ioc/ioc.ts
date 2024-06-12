class A {
  name: string
  constructor() {
    this.name = 'AAA'
  }
}

class B {
  name: string
  constructor() {
    this.name = new A().name
  }
}

class C {
  name: string
  constructor() {
    this.name = new A().name
  }
}

// 以上方式是属于强耦合的方式 如果A类有修改 那么B类也会有修改 C类同理

// 采用 ioc 的方式

class Aa {
  name: string
  constructor(name: string) {
    this.name = name
  }
}
class Bb {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

class Container {
  mo: any
  constructor() {
    this.mo = {}
  }
  provide(key: string, mo: any) {
    this.mo[key] = mo
  }
  get(key: string) {
    return this.mo[key]
  }
}

const provide = new Container()
provide.provide('Aa', new Aa('aaaa'))
provide.provide('Bb', new Bb('bbbb'))

class Cc {
  name: string
  constructor() {
    this.name = provide.get('Aa').name
  }
}

export {}


/* 在引入 ioc 容器 container 代码逻辑已解偶。 可以单独拓展其他功能，也可方便加入其他模块
所以在面对复杂的后端业务逻辑中，引人 ioc 容器 container 可以减少业务逻辑，以降低组件之间的耦合度，减少维护与理解成本 */