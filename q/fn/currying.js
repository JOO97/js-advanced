function currying(fn) {
  const length = fn.length
  const curried = function (...args) {
    if (args.length < length) {
      return function (...args2) {
        return curried.apply(this, args.concat(args2))
      }
    } else {
      fn.apply(this, [...args])
    }
  }
  return curried
}

const fn = currying(function (a, b, c) {
  a = a + 2
  b = b + 2
  c = b + 2
  return a * b * c
})

console.log(fn(1)(2)(3))
