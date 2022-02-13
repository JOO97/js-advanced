//2个数组取交集
//输入：["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
//输出：1,4,13

function findIntersection(arrStr) {
  const arr1 = arrStr[0].split(',')
  const arr2 = arrStr[1].split(',')
  const result = []
  arr1.forEach((item) => {
    if (arr2.indexOf(item) !== -1) result.push(item)
  })
  return result.join(',')
}

console.log(findIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15']))
