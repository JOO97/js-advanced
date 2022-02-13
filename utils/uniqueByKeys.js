//数组对象去重

/**
 * @param {array} array
 * @param {array} keys
 * @returns
 */
function uniqueByKeys(array, keys) {
  var target = [] //目标对象
  var hash = {}
  //循环数组
  for (var i = 0, j = array.length; i < j; i++) {
    //把当前对象中keys对应values拼接为字符串
    var k = obj2key(array[i], keys)
    //hash对象中不存在values字符串的key
    if (!(k in hash)) {
      hash[k] = true
      target.push(array[i])
    }
  }
  return target
}

//把对象的value转为string
function obj2key(obj, keys) {
  var n = keys.length,
    key = []
  while (n--) {
    key.push(obj[keys[n]])
  }
  return key.join('|')
}

const res = [
  {
    name: 'joo2',
    label: 'xxx',
    label2: 'xxx',
  },
  {
    name: 'joo2',
    label: 'xxx',
    label2: 'xxx',
  },
]

const arr = uniqueByKeys(res, ['name', 'label'])
console.log(arr)
