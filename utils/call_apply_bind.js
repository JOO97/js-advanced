function fn(n1, n2, ...args) {
  console.log('fn this', this)
  console.log(args)
  return n1 + n2
}

fn.call({})

//call
Function.prototype.myCall = function (thisArgs, ...args) {
  const fn = this
  //判断this
  thisArgs = thisArgs !== undefined || thisArgs !== null ? Object(thisArgs) : {}
  thisArgs.fn = fn
  const r = thisArgs.fn(...args)
  return r
}

// const r = fn.myCall('xx', 1, 2)

//apply
Function.prototype.myApply = function (thisArgs, argsArr = []) {
  const fn = this
  //判断this
  thisArgs = thisArgs !== undefined || thisArgs !== null ? Object(thisArgs) : {}
  thisArgs.fn = fn
  const r = thisArgs.fn(...argsArr)
  return r
}

// const r = fn.myApply('xx', [1, 2])

//bind
Function.prototype.myBind = function (thisArgs, ...args) {
  const fn = this
  //判断this
  thisArgs = thisArgs !== undefined || thisArgs !== null ? Object(thisArgs) : {}

  function targetFn(...targetArgs) {
    thisArgs.fn = fn
    const finalArgs = args.concat(targetArgs)
    const r = thisArgs.fn(...finalArgs)
    return r
  }
  return targetFn
}

const r = fn.myBind('xx', 1, 2)
console.log('r', r(3, 4))
