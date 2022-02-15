//组合函数

function add(n1) {
  return n1 + 2
}

function mul(n1) {
  return n1 * 2
}

function compose(...fnArgs) {
  const length = fnArgs.length
  for (var i = 0; i < length; i++) {
    if (typeof fnArgs[i] !== 'function') {
      throw new TypeError('Expected arguments are functions')
    }
  }
  return function (...args) {
    let currentArg
    for (var i = 0; i < length; i++) {
      currentArg = fnArgs[i].apply(this, i === 0 ? args : [currentArg])
    }
    return currentArg
  }
}

const r = compose(add, mul)
console.log('r', r(1), mul(add(1)))
