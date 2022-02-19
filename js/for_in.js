const obj = {
  name: 'xx',
}
const arr = [1, 2]
arr.__proto__.age = 18
obj.__proto__.age = 18
for (var key in obj) {
  //name age
  console.log('key', key)
}

for (var value in arr) {
  //0 1 age
  console.log('value', value)
}
for (var value of arr) {
  //1 2
  console.log('value', value)
}
