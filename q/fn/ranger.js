//生成序列
function ranger(start, end, step) {
  const result = Array.from(
    { length: (end - start) / step + 1 },
    (_, index) => {
      return start + step * index
    }
  )
  return result
}
console.log(ranger(1, 100, 2))
const caseRanger = ranger('a'.charCodeAt(0), 'z'.charCodeAt(0), 1)
console.log(caseRanger.map((item) => String.fromCharCode(item)))
