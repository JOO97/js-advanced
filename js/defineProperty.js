//
const obj = {
  name: 'xxx',
  age: 18,
  _emile: '0',
}

//数据属性修饰符
Object.defineProperty(obj, 'address', {
  value: 'xxx',
  enumerable: true,
  writable: true,
  configurable: true,
})

for (var key in obj) {
  //   console.log('key', key)
}

delete obj.address

//存取属性修饰符
// 1.隐藏某一个私有属性被希望直接被外界使用和赋值
// 2.如果我们希望截获某一个属性它访问和设置值的过程时, 也会使用存储属性描述符
Object.defineProperty(obj, 'emile', {
  configurable: true,
  enumerable: true,
  set: function (value) {
    this._emile = value
  },
  // [[get]]操作
  // 1.在当前的对象中查找属性
  // 2.如果没有找到, 这个时候会去原型链(__proto__)对象上查找
  get: function () {
    return this._emile
  },
})

obj.emile = 'xx'
// console.log(obj.emile)
// console.log(obj)

//获取属性描述符
console.log(Object.getOwnPropertyDescriptors(obj))
