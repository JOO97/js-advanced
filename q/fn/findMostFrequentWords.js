//查找出现频率最高的单词
function findMostFrequentWords(content) {
  content = content.trim().toLowerCase()
  //+匹配一个或多个
  // /g将用来在输入字符串中查找所有可能的匹配
  const r = content.match(/[a-z]+/g)
  console.log(r)
  const arr = content.split(' ')
  const map = {}
  arr.map((item) => {
    if (map[item] === undefined) {
      map[item] = 1
    } else {
      map[item] += 1
    }
  })
  let max = 0,
    word = ''
  Object.keys(map).forEach((key) => {
    if (map[key] > max) {
      max = map[key]
      word = key
    }
  })
  return word + '-' + max
}

const context = 'joo xxx JOO xxx CCC ccc joo ccc ccc!'

console.log(findMostFrequentWords(context))
