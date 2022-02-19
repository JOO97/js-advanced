//进制
function num() {
  const two = 0b100
  const eight = 0o101
  const hex = 0x101
  console.log(two, eight, hex)
}
// num()

//Symbol 创造唯一的值
function symbol() {
  const obj = {
    name: 'xxx',
  }
  const s = Symbol()
  obj[s] = 's'
  for (var key in obj) {
    //name
    console.log(key)
  }
  // Object.keys(obj)//name
  //   Object.getOwnPropertySymbols(obj)
  console.log(obj)
}
// symbol()

//Set 元素不重复 没有索引
//new Set(可迭代参数)
function set() {
  const s = new Set([1, 3, { name: 'xxx' }])
  //s[0] undefined
  for (var value of s) {
    console.log(value)
  }
  s.forEach((item) => {
    console.log(item)
  })
  //new WeakSet([对象]) 弱引用
  const w = new WeakSet([{}])
}
// set()

// Map（允许所有类型来作为key）
//对象（key只能是string/Symbol）
function map() {
  const obj1 = { name: 'why' }
  const obj2 = { name: 'kobe' }
  const fn = function () {}
  const m = new Map([
    [obj1, 'obj1'],
    [obj2, 'obj2'],
    [fn, 'fn'],
    [NaN, 'xx'],
    [undefined, 'xx'],
  ])
  m.set('x', 1)
  m.forEach((value, key) => {
    // console.log(value, key)
  })
  for (const [key, value] of m) {
    console.log(key, value)
  }
}
map()

//weakMap
//不能使用基本数据类型 弱引用
function weakMap() {
  const obj1 = { name: 'why' }
  const obj2 = { name: 'kobe' }
  const wm = new WeakMap([[obj1, 1]])

  //   for (const [key, value] of wm) {} error
  console.log(wm) //WeakMap { <items unknown> }
}
// weakMap()

//indexOf includes
function includes() {
  const arr = [1, 3, NaN]
  //1
  const str = 'abc'
  console.log(str.indexOf('b'))
  //2 返回值
  //3 NaN
  console.log(arr.includes(NaN)) //true
  console.log(arr.indexOf(NaN)) //-2
}

// includes()

//padStart padEnd
function strPad() {
  const n = '100100999999'
  const newN = n.slice(-4).padStart(9, '*') //*****9999
  console.log(newN)
}
// strPad()

//object.entries
function entries() {
  const obj = {
    name: 'xx',
    age: 18,
  }
  const entries = Object.entries(obj)
  //   console.log(Object.entries(obj)) //[ [ 'name', 'xx' ], [ 'age', 18 ] ]
  const nObj = Object.fromEntries(entries)
  //   console.log(nObj) //{ name: 'xx', age: 18 }
}
entries()
