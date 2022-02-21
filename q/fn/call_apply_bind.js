function foo(...args) {
  console.log('foo', this, args)
  return 'r'
}

// foo()
// foo.apply({ name: 'xxx' }, [1, 2])

function myApply(thisArgs, args) {
  const fn = this
  thisArgs = thisArgs !== undefined || thisArgs !== null ? Object(thisArgs) : {}
  thisArgs.fn = fn
  const r = thisArgs.fn(...args)
  return r
}

Function.prototype.myApply = myApply

// foo.myApply({ name: 'xxx' }, [1, 2])

function myCall(thisArgs, ...args) {
  const fn = this
  thisArgs = thisArgs !== undefined || thisArgs !== null ? Object(thisArgs) : {}
  thisArgs.fn = fn
  const r = thisArgs.fn(...args)
  return r
}

Function.prototype.myCall = myCall
// foo.myCall({ name: 'xxx' }, 1, 2)

function myBind(thisArgs, ...args) {
  const fn = this
  thisArgs = thisArgs !== undefined || thisArgs !== null ? Object(thisArgs) : {}
  thisArgs.fn = fn
  return function (...args2) {
    const r = thisArgs.fn(...args, ...args2)
    return r
  }
}

Function.prototype.myBind = myBind
const newFoo = foo.myBind({ name: 'xxx' }, 1, 2)
newFoo(3, 4)
