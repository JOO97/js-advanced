//Proxy

const obj = {
  name: 'joo',
  age: 18,
  _address: '_a',
  get address() {
    return this._address
  },
  set address(value) {
    this._address = value
  },
}
const proxyObj = new Proxy(obj, {
  get(target, key, receiver) {
    console.log('get', key)
    //Reflect（对象类型，类似Object）
    //Reflect.get()返回boolean
    //receiver 绑定this
    return Reflect.get(target, key, receiver)
  },
  set(target, key, newVal, receiver) {
    console.log('set', key)
    target[key] = newVal
    return Reflect.set(target, key, newVal, receiver)
  },
  has(target, key) {
    console.log('has', key)
    return Reflect.has(target, key)
  },
  deleteProperty(target, key) {
    console.log('del', key)
    return Reflect.deleteProperty(target, key)
  },
})

const n = proxyObj.name
proxyObj.age = 20
proxyObj.address = 'a'
console.log('address' in proxyObj)
console.log(delete proxyObj.address)

function fn() {}
const fnProxy = new Proxy(fn, {
  apply(target, thisArgs, argsArr) {
    console.log('apply fn')
    return target.apply(thisArgs, argsArr)
  },
  construct(target, argsArr, newTarget) {
    console.log('new fn')
    return new target(...argsArr)
  },
})

fnProxy()
fnProxy.apply({})
new fnProxy()
