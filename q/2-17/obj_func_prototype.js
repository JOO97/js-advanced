//对象 函数 原型关系

const obj = {
  name: 'obj',
}

function foo() {
  console.log('foo')
}

function Foo() {
  console.log('Foo')
}

// function Object() {}

// function Function() {}

//1 o
const o = new Foo()
// o.__proto__ === Foo.prototype true

//2  Foo
// Foo.prototype -> {constructor __proto__}
// Foo.prototype.__proto__ === Object.prototype
// Foo.__proto__ === Function.prototype

//3 Object
// Object.prototype -> {constructor __proto__}
// Object.__proto__ === Function.prototype

//4 Function
// Function.prototype -> {constructor __proto__}
// Function.prototype.__proto__ === Object.prototype
// Function.__proto__ === Function.prototype
