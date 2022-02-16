//利用原型链实现继承

//对象
const pObj = {
  p: 'xxx',
}

//创建一个指定原型对象为pObj的对象
const obj = Object.create(pObj)
// console.log(obj, obj.__proto__)

//实现Object.create
function createObj(o) {
  //1
  //   const newObj = {}
  //   Object.setPrototypeOf(newObj, o)

  //2
  function Fn() {}
  Fn.prototype = o
  const newObj = new Fn()
  return newObj
}
// console.log(createObj(pObj))

//寄生组合式继承

function inheritProperty(SubType, SuperType) {
  //1. 重写子类的原型： 创建一个原型为父类的原型的对象
  SubType.prototype = Object.create(SuperType.prototype)
  //2. 手动添加construction属性
  Object.defineProperty(SubType.prototype, 'constructor', {
    enumerable: false,
    writable: true,
    configurable: true,
    value: SubType,
  })
}

function Person(name) {
  this.name = name
}
Person.prototype.eating = function () {
  console.log('eating~')
}

function Stu(name, age) {
  //调用父类
  Person.call(this, name)
  this.age = age
}
//Stu继承Person
inheritProperty(Stu, Person)

Stu.prototype.studying = function () {
  console.log('studying~')
}

const p = new Person('pName')
const s = new Stu('s', 18)

console.log('p', p)
console.log('s', s, s.eating())
