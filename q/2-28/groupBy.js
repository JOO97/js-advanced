var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 },
]
function groupBy2(arr, key) {
  const r = {}
  arr.map((item) => {
    if (!r[item[key]]) r[item[key]] = []
    if (item[key]) r[item[key]].push(item)
  })
  return r
}

function groupBy(arr, key) {
  return arr.reduce((pre, current) => {
    const keyVal = current[key]
    if (!pre[keyVal]) pre[keyVal] = []
    pre[keyVal].push(current)
    return pre
  }, {})
}

console.log(groupBy(people, 'age'))
