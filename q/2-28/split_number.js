const n = 1234567891

function splitNumber(number = 0, step = 3) {
  number = !number ? 0 : number
  const oldStr = number.toString()
  let str = ''
  for (let i = oldStr.length - 1, j = 1; i >= 0; i--, j++) {
    str += oldStr[i]
    str += j % 3 === 0 && i !== 0 ? ',' : ''
  }

  return str.split('').reverse().join('')
}

console.log(splitNumber(n))
