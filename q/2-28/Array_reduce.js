const array1 = [1, 2, 3, 4]
const array2 = [{ x: 1 }, { x: 2 }, { x: 3 }]
const initial = 0

const r = array1.reduce((pre, current) => {
  return pre + current
}, 0)

const r2 = array2.reduce((pre, current) => {
  return pre + current.x
}, 0)

console.log(r2)
