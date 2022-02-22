//浅拷贝
function shallowClone(target) {
  if (!target || typeof target !== 'object') throw TypeError()
  const source = target.constructor === Array ? [] : {}
  Object.keys(target).forEach((key) => {
    source[key] = target[key]
  })
  return source
}

const obj = {
  name: 'xxx',
  info: {
    name: 'xxx',
  },
}
const arr = [
  'xxx',
  {
    name: 'xxx',
  },
]
//1
const obj2 = shallowClone(arr)
//2
// const obj2 = Object.assign({}, obj) //Object.assign(target, ...sources)
//3
// const obj2 = arr.slice(0)
//4
// const obj2 = [].concat(arr)
//5
// const obj2 = [...arr]
console.log(obj, obj2, arr)
