//instanceof
/**
 * 判断对象是否在某构造函数的原型链上(对象是否是构造函数的实例)
 */

const obj = {
  name: 'x',
}

// console.log(obj instanceof Object)

// isPrototypeOf
const obj2 = Object.create(obj)
console.log(obj.isPrototypeOf(obj2)) //true obj是否是obj2的原型
