/**
 * 1. NaN
 * 表示不是一个数字（Not-A-Number）
 * 执行数学运算没有成功的话，返回该值
 * 和自身不相等
 */
//console.log(typeof NaN) //number
//是否“不是一个数字”
//console.log(isNaN('X')) //true
//是否是“NaN”
//console.log(Number.isNaN(NaN)) //true
//console.log(NaN === NaN) //false

/**
 * 2. 简单数据类型 6
 * number
string
undefined
null
boolean
symbol
 */

//类型转换： 显式 隐式
// console.log(new Boolean(false)) //{Boolean: false}
// console.log(Number(null)) //0
// console.log(Number(undefined)) //NaN
// console.log(Number(true)) //1

/**
 * 类数组对象 like-array
 * 有length属性
 * 可通过下标取数据
 * 没有array的方法
 * arguments 函数 dom方法的返回结果 document.getElementsByClassName
 */
//转array
function likeArray(...args) {
  return Array.from(arguments)
  return Array.prototype.slice.apply(arguments)
  return Array.prototype.concat.apply([], arguments)
}
// console.log(likeArray(1, 2))

/**
 * clientWidth 内部宽度 content+padding
 * offsetWidth 布局宽度 content+padding+border+滚动条
 * scrollWith content+padding+溢出宽度
 */

//null 空对象
// console.log(typeof null) //object

//babel js编译工具 把es6+语法编写的js代码转为向后兼容的js语法

/**
 * 跨域
 * 协议、域名、端口有一个不同时会产生跨域(同源策略)
 * 是浏览器的限制
 */

/**
 * string fns
 * 操作(增删改查) 转换 匹配
 */
const str = 'abc'
// console.log(str.split('b'))
// console.log(str.substring(1, 3))
// console.log(String.prototype)

//...
// console.log([...'abc']) //['a', 'b', 'c']
const [first, ...others] = ['a', 'b', 'c']

/**
 *Array
 */
// console.log(Array.of(1, 2)) //[1,2]
// console.log(Array(2)) //['','']

// console.log(typeof '') //string

//'1'.toString()
/**
 * '1'.toString()
 * 1. var s = new Object('1')
 * 2. s.toString()
 * 3. s = null
 */

function toStr() {
  const obj = new Object(this)
  return obj.toString()
}
Object.prototype.toStr = toStr
// console.log('1'.toStr()) //'1'

const strObj = { String: 'x' }

var s = new Object('1')

console.log(strObj.toString(), s)

//Object
/**
 * Object 构造函数为给定的参数创建一个包装类对象（object wrapper），具体有以下情况：
如果给定值是 null 或 undefined，将会创建并返回一个空对象
如果传进去的是一个基本类型的值，则会构造其包装类型的对象
如果传进去的是引用类型的值，仍然会返回这个值，经他们复制的变量保有和源对象相同的引用地址
当以非构造函数形式被调用时，Object 的行为等同于 new Object()。
 */
console.log(Object(null)) //{}
console.log(Object(undefined)) //{}
