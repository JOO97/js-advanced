//debounce
// function debounce(fn, delay) {
//   let timer = null
//   return function () {
//     clearTimeout(timer)
//     timer = setTimeout(() => {
//       fn.apply(this, arguments)
//     })
//   }
// }

// const foo = debounce(() => {
//   console.log(1)
// }, 1000)

// foo()
// foo()
// foo()
// foo()
// foo()

// setTimeout(() => {
//   foo()
// }, 5000)

//throttle
// function throttle(fn, delay) {
//   let flag = true
//   return function () {
//     if (!flag) return
//     flag = false
//     setTimeout(() => {
//       fn.apply(this, arguments)
//       flag = true
//     }, delay)
//   }
// }

// const foo = throttle(() => {
//   console.log(1)
// }, 1000)

// foo()
// foo()
// setTimeout(() => {
//   foo()
// }, 5000)

//deepClone
// function deepClone(source) {
//   if (!source || typeof source !== 'object') throw TypeError('type  error')
//   let target = source instanceof Array ? [] : {}
//   Object.keys(source).forEach((key) => {
//     if (source[key] && typeof source[key] === 'object') {
//       target[key] = deepClone(source[key])
//     } else {
//       target[key] = source[key]
//     }
//   })
//   return target
// }

// const obj = {
//   name: 'joo',
//   info: {
//     name: 'joo2',
//     info: {
//       name: 'joo3',
//     },
//   },
// }

// const foo = deepClone(obj)

// console.log(foo)

//shallowClone
// const obj = {
//   name: 'joo',
//   info: {
//     name: 'joo2',
//   },
// }
// console.log(Object.assign({}, obj))
// console.log({ ...obj })

//array-like
// function foo() {
//   console.log([...arguments])
//   console.log(Array.prototype.concat.apply([], arguments))
//   console.log(Array.prototype.slice.apply(arguments))
//   console.log(Array.from(arguments))
// }
// foo(1, 2)

//1-1000
// const arr = Array.from({ length: 100 }, (_, index) => {
//   return ++index
// })

// console.log(arr)

//apply
function foo() {
  console.log('foo', this, arguments)
  return 'foo'
}

// foo.apply(this, [1,2])
// function myApply(thisArgs, args) {
//   const fn = this
//   thisArgs = thisArgs !== undefined || thisArgs !== null ? Object(thisArgs) : {}
//   thisArgs.fn = fn
//   const r = thisArgs.fn(...args)
//   thisArgs.fn = null
//   return r
// }

// Function.prototype.myApply = myApply

// foo.myApply({ name: 'foo' }, [1, 2])

// foo.call(this, 1,2)
// function myCall(thisArgs, ...args) {
//   const fn = this
//   thisArgs = thisArgs !== undefined && thisArgs !== null ? Object(thisArgs) : {}
//   thisArgs.fn = fn
//   return thisArgs.fn(...args)
// }

// Function.prototype.myCall = myCall

// foo.myCall({ name: 'call' }, 1, 2)

// function myBind(thisArgs, ...args) {
//   const fn = this
//   thisArgs = thisArgs !== undefined && thisArgs !== null ? Object(thisArgs) : {}
//   thisArgs.fn = fn
//   return function (...args2) {
//     return thisArgs.fn(...args, ...args2)
//   }
// }

// Function.prototype.myBind = myBind

// const bar = foo.myBind({ name: 'call' }, 1, 2)

// bar(3, 4)

//sort
// const arr = [55, 80, 2, 90, 1, 100]
// const arr2 = [{ age: 55 }, { age: 80 }, { age: 2 }]

// arr.sort((a, b) => {
//   //   if (a < b) {
//   //     return -1
//   //   }
//   return b - a
// })

// arr2.sort((a, b) => {
//   if (a.age > b.age) {
//     return -1
//   }
// })
// console.log(arr, arr2)

// const array1 = [111, 109, 113, 114, 115]
// console.log(array1.sort())

//bubble
// function bubble(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j + 1]
//         arr[j + 1] = arr[j]
//         arr[j] = temp
//       }
//     }
//   }
//   return arr
// }

// const arr = [55, 80, 2, 90, 1, 100]
// console.log(bubble(arr))

//range
// function ranger(start, end, step) {
//   const result = Array.from(
//     { length: (end - start) / step + 1 },
//     (_, index) => {
//       return start + step * index
//     }
//   )
//   return result
// }
// console.log(ranger(1, 100, 2))
// length = (end-start)/step+1

function splitNumberByStr(num, step = 3, str = ',') {
  const arr = []
  const numArr = num.toString().split('')
  let counter = 0
  for (let i = numArr.length - 1; i >= 0; i--) {
    counter++
    arr.unshift(numArr[i])
    if (i && !(counter % step)) {
      arr.unshift(str)
    }
  }
  return arr.join('')
}
console.log(splitNumberByStr(1234))
