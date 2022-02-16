//生成序列
function ranger(start, end, step) {
  //length 向下取整
  return Array.from({ length: (end - start) / step + 1 }, (_, index) => {
    return start + index * step
  })
}

// console.log(ranger(0, 5, 2))

// console.log('A'.charCodeAt()) //65
// console.log(
//   ranger('A'.charCodeAt(), 'M'.charCodeAt(), 2).map((item) =>
//     String.fromCharCode(item)
//   )
// )

// console.log(Array.of(100)) //[100]
// console.log(Array.of(100, 1)) //[100,1]
console.log(Array(2).keys()) // Object [Array Iterator] {}
const keys = Array.from(Array(2).keys()).slice(1)
console.log(keys)
