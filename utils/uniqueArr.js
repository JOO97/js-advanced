//数组去重 es6

function uniqueArr(arr) {
  return Array.from(new Set(arr))
}

console.log(uniqueArr(['xxx', 'xxx', 'xx', 'x']))
