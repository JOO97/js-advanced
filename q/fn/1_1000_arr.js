const arr = Array.from(Array(1000), (item, index) => {
  return ++index
})
const arr2 = Array.from({ length: 100 }, (item, index) => {
  return ++index
})
console.log(arr)
console.log(arr2)
