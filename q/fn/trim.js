//去除字符串前后空格
function trim(str = '') {
  if (str === null || typeof str !== 'string') throw TypeError()
  return str.replace(/(^\s*)|(\s*$)/g, '')
}

const str = trim('   x   xx    ')
console.log(str)
