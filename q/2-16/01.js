const n1 = 1.5505
// console.log(n1.toPrecision(1)) //保留n位 2
// console.log(n1.toFixed(2)) //保留n位小数 1.55

//1-100数组
const newArr = Array.from({ length: 100 }, function (n, index) {
  return index + 1
})
// console.log(newArr)

//判断数组类型
const arr = ['x']
console.log(arr.constructor === Array)
console.log(arr.__proto__.constructor === Array)
console.log(Array.isArray(arr))
// console.log(arr instanceof Object)
console.log(arr instanceof Array)

//判断变量是否存在
//a is not defined 报错
// if (a) {
//   console.log(a)
// }

console.log(typeof a) //'undefined'
//不会报错
if (typeof a !== 'undefined') {
  console.log(typeof a)
}

//== ===
/**
 * == 会进行隐式转换 再判断
 * === 全相等 类型、值都相等
 */
// console.log(null == undefined) //true
const obj = {
  name: 'x',
}
const obj2 = {
  name: 'x',
}
const obj3 = obj
// console.log(obj == obj3) //true
// console.log(obj == obj2) //false

/**
 * parseInt
 * parseInt(String, radix(2-36))
 */
//['10','10','10'].map(parseInt)
const mapR = ['10', '10', '10'].map((item, index) => {
  //'10',0 => 10
  //'10', 1 => NaN
  //'10', 2 => 2
  return parseInt(item, index)
})
// console.log(mapR)

//new箭头函数
//ERROR ArrowFu is not a constructor
// const ArrowFu = () => {}
// console.log(new ArrowFu())
