//实现响应式
/**
 * 1.初始化存储依赖的对象 map weakMap
 * 2.监听对象的操作Proxy
 *   2.1 get
 *   2.2 set
 */

class Depend {
  constructor() {
    // 依赖数组
    this.dependFns = []
  }
  addDepend(fn) {
    this.dependFns.push(fn)
  }
  runDepends() {
    this.dependFns.forEach((fn) => fn())
  }
}

const obj = {
  name: '1',
}
const obj2 = {
  name: '2',
}
//创建总的依赖对象
const globeMap = new WeakMap()

//创建obj的依赖对象
//obj的每个属性有各自对应的depend对象
// const objMap = new Map()
// objMap.set('name', new Depend())
// globeMap.set(obj, objMap)

/** 获取对象中某个属性的依赖对象
 *
 * 1. 若对象不存在,则创建对象对应的map
 * 2. 若依赖对象不存在,则创建属性对应的依赖对象
 */
function getDepend(target, key) {
  //获取对象的map
  let targetMap = globeMap.get(target)
  if (!targetMap) {
    //map不存在, 则创建map
    targetMap = new Map()
    globeMap.set(target, targetMap)
  }
  //根据key在对象map中获取对应的依赖对象
  let depend = targetMap.get(key)
  if (!depend) {
    depend = new Depend()
    targetMap.set(key, depend)
  }
  return depend
}

//监听对象属性操作
const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver)
  },
  set(target, key, newVal, receiver) {
    const r = Reflect.set(target, key, newVal, receiver)
    if (!r) return
    const depend = getDepend(target, key)
    depend.runDepends()
  },
})

objProxy.name = 'x'
