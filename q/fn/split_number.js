function splitNumberByStr(num, step = 3, str = ',') {
  const arr = []
  //数字转字符串转数组
  //   const numArr = num.toString().split('')
  const numArr = Array.from(num.toString())
  let counter = 0
  //从后开始遍历  [0-'1',1-'2',2-'3',3-'4']
  for (let i = numArr.length - 1; i >= 0; i--) {
    counter++
    arr.unshift(numArr[i])
    if (i && !(counter % step)) {
      arr.unshift(str)
    }
  }
  return arr.join('')
}
//999,999,999
console.log(splitNumberByStr(1234))
//2
// console.log(Object(123456789).toLocaleString())
