const doc: ClassDecorator = (target: any) => {
  console.log(target);
  target.prototype.__name = 'zhangsan';
}
/* 通过类装饰器，实现类的扩展，可以避免对原类的修改 */
// 类装饰器
@doc
class User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}


const doc2: PropertyDecorator = (target: any, key: string | symbol) => {
  console.log(target, key);
}
// 属性装饰器
class Person {
  @doc2
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const doc3: MethodDecorator = (target: any, key: string | symbol, descriptor: PropertyDescriptor) => {
  console.log(target, key, descriptor);
}

// 属性装饰器
class Person2 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  @doc3
  getName() {
    return this.name;
  }
}

const doc4: ParameterDecorator = (target: any, key: string | symbol | undefined, index: Number) => {
  console.log(target, key, index);
}

// 参数装饰器
class Person4 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName(name: string, @doc4 age: number) {
    return this.name;
  }
}