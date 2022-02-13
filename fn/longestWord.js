function longestWord(str) {
  const result = str.trim().replace(/[^a-zA-Z0-9 ]/g, '')
  let longest = ''
  //split()返回array 不会改变原string
  const arr = result.split(' ').forEach((item) => {
    if (item.length > longest.length) longest = item
  })
  return longest
}

console.log(longestWord('fun＆!! time '))
