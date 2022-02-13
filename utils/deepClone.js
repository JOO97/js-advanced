//深拷贝

function deepClone(source) {
  //校验参数合法性
  if (!source || typeof source !== 'object') throw new Error('参数错误')
  //校验参数类型
  const target = source.constructor === Array ? [] : {}
  //递归
  Object.keys(source).map((key) => {
    if (source[key] && typeof source[key] === 'object') {
      deepClone(source[key])
    } else {
      target[key] = source[key]
    }
  })
  return target
}

const obj = {
  name: 'joo',
  age: 18,
}
const obj2 = deepClone(obj)
obj.name = 'xx'
