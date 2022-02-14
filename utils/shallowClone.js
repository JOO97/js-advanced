//浅拷贝
function shallowClone(obj) {
  if (!obj || typeof obj !== 'object') return
  const targetObj = {}
  Object.keys(obj).forEach((key) => {
    targetObj[key] = obj[key]
  })
  return targetObj
}
const source = { name: undefined, age: 18, info: { name: 'xxx' } }
const target = shallowClone(source)

//浅拷贝方法
//1 Object.assign
// const target = Object.assign({}, source)

//2 slice
// const arr = ['xxx', { name: 'xxx' }]
// const target = arr.slice(0)
// arr[1].name = 'c'

//3 concat
// const arr = ['xxx', { name: 'xxx' }]
// let target = [1]
// target = target.concat(arr)
// arr[1].name = 'xs'

//  展开运算符
// const arr = ['xxx', { name: 'xxx' }]
// const target = ['x', ...arr]
// arr[1].name = 'c'
