function deepClone(source) {
  //check
  if (!source || typeof source !== 'object') throw TypeError('type  error')
  let target = source.constructor === Array ? [] : {}
  Object.keys(source).forEach((key) => {
    if (source[key] && typeof source[key] === 'object') {
      deepClone(source[key])
    } else {
      target[key] = source[key]
    }
  })
  return target
}

const obj = {
  name: 'x',
  info: { name: 'xx' },
}
const newObj = deepClone(obj)

console.log(obj, newObj)
