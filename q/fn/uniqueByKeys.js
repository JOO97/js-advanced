function uniqueByKeys(sourceArr, keys = []) {
  const target = []
  const map = {}
  sourceArr.forEach((item) => {
    const objStr = obj2Str(item, keys)
    if (!map[objStr]) {
      map[objStr] = true
      target.push(item)
    }
  })
  return target
}

function obj2Str(obj, keys) {
  const target = {}
  keys.forEach((key) => {
    target[key] = obj[key]
  })
  return JSON.stringify(target)
}

const arr = [
  {
    name: 'joo',
    age: 18,
    address: 'x',
  },
  {
    name: 'joo',
    age: 18,
    address: 'x',
  },
  {
    name: 'joo1',
    age: 18,
    address: 'x',
  },
]

console.log(uniqueByKeys(arr, ['name', 'age', 'address']))
