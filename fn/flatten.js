//多维数组转一维数组
function flatten(arr = []) {
  return arr.reduce((result, item) => {
    const t = Array.isArray(item) ? flatten(item) : item
    return result.concat(t)
  }, [])
}

const arr = [1, [2, 3, [4, 5]]]

function flatten2(arr) {
  return arr
    .toString()
    .split(',')
    .map(function (item) {
      return Number(item)
    })
}

console.log(flatten2(arr))
