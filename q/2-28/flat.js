const arr = [1, [2, 3, [4, 5]]]

function flat(arr) {
  return arr.reduce((result, item) => {
    const t =
      Object.prototype.toString.call(item) === '[object Array]'
        ? flat(item)
        : item
    return result.concat(t)
  }, [])
}

console.log(flat(arr))

function flatten2(arr) {
  return arr
    .toString()
    .split(',')
    .map(function (item) {
      console.log(item)
      return Number(item)
    })
}

console.log(flatten2(arr))
