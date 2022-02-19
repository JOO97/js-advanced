//构造函数+原型创建对象
//new
/**
 * 1.函数内部创建一个新的对象
 * 2.新对象的原型指向函数内部的原型
 * 3.函数的this指向新对象
 * 4.执行函数内部代码
 * 5.如果函数没有返回非空对象 则返回这个新对象
 */
function Person(name, age) {
  this.name = name
  this.age = age
  //   console.log(this.__proto__) //{}
  //   console.log(Person.prototype) //{}
}

Person.prototype.studying = function () {
  console.log('studying')
}

Person.prototype.address = 'xxx'
// Object.prototype.address = 'xxx'

//p.__proto__ -> Person.__proto__ -> Object.__proto__
const p = new Person('joo', 25)
p.studying()
// console.log(p.__proto__) //{ address: 'xxx' } Object.getPrototypeOf(p)
// console.log(p.__proto__.constructor) //[Function: Person]
// console.log(p.__proto__.__proto__) //[Object: null prototype] {}
// console.log(p.__proto__.__proto__.constructor) //[Function: Object]

const obj = {
  name: 'xxx',
}
// console.log(obj.__proto__) //[Object: null prototype] {} 顶层的原型
