//1 原型链继承-对象
const pObj = {
  name: 'p',
}

const obj = Object.create(pObj)
// console.log(obj.__proto__ === pObj, obj.name)

//实现 Object.create
function createObj(source) {
  function Fn() {}
  Fn.prototype = source
  const target = new Fn()
  return target
}

const obj2 = createObj(pObj)
// console.log(obj2.__proto__ === pObj, obj2.name)

//寄生组合式继承
function P(name) {
  this.name = name
}
P.prototype.eating = function () {
  console.log('eating~')
}
function Stu(name, age) {
  P.call(this, name)
  this.age = age
}

//stu继承p的方法
inheritProperty(Stu, P)

function inheritProperty(SubType, SuperType) {
  //子类原型指向父类原型
  SubType.prototype = Object.create(SuperType.prototype)
  //手动添加constructor属性
  Object.defineProperty(SubType.prototype, 'constructor', {
    enumerable: false,
    writable: true,
    configurable: true,
    value: SubType,
  })
}

Stu.prototype.running = function () {
  console.log('running~')
}

const p = new P('P')
const stu = new Stu('Stu', 18)

console.log(p, stu.eating())
