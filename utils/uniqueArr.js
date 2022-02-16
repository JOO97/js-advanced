//数组去重 es6

function uniqueArr(arr) {
  return Array.from(new Set(arr))
}

// console.log(uniqueArr(['xxx', 'xxx', 'xx', 'x']))

//去重合并
function combine() {
  // const newArr = Array.prototype.concat.apply([], arguments)
  const newArr = [].concat.apply([], arguments)
  return Array.from(new Set(newArr))
}
const arr = [1, 2, 2]
const arr2 = [2, 3, 1, 5]
console.log(combine(arr, arr2))
