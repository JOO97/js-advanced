function Foo(name) {
  this.name = name
}
const o1 = new Foo('x') // { name: 'x' }
const o2 = Object.create(Foo) //{}
console.log(o1.__proto__ === Foo.prototype) //true
console.log(o2.__proto__ === Foo) //true
