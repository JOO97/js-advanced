//柯里化

function operate(n1, n2, n3) {
  n1 = n1 + 2
  n2 = n2 * 2
  n3 = n3 ** 2
  return n1 + n2 + n3
}

function operateCurrying(n1) {
  n1 = n1 + 2
  return function (n2) {
    n2 = n2 * 2
    return function (n3) {
      n3 = n3 ** 2
      return n1 + n2 + n3
    }
  }
}

// const r = operateCurrying(1)(2)(3)

function currying(fn) {
  //fn所需要的参数个数
  const length = fn.length
  function curried(...args) {
    if (args.length >= length) {
      return fn.apply(this, [...args])
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
  return curried
}

const curryingFn = currying(operate)

const r = curryingFn(1)(2)(3)
console.log('r', r)
