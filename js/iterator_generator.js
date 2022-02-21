const arr = [1, 2, 3]
//生成迭代器函数
function createIterator(arr) {
  let index = 0
  return {
    next() {
      if (index < arr.length + 1) {
        return { done: false, value: arr[index++] }
      } else {
        return { done: true, value: undefined }
      }
    },
  }
}

const iterator = createIterator(arr)
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

//自制可迭代对象
class Person {
  constructor(names) {
    this.names = names
  }
  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        if (index < this.names.length) {
          return { done: false, value: this.names[index++] }
        } else {
          return { done: true, value: undefined }
        }
      },
    }
  }
}
const p = new Person([1, 2, 3])
for (const item of p) {
  //   console.log(item)
}

//生成器函数
function* generatorFn() {
  console.log(1)
  const r = yield 1
  console.log(r) //11
  console.log(2)
  yield 2
  console.log(3)
}

const generator = generatorFn()
console.log(generator.next())
console.log(generator.next(11))
console.log(generator.next())

//生成器替代迭代器
class Person2 {
  constructor(names) {
    this.names = names
  }
  *[Symbol.iterator]() {
    yield* this.names
    // let index = 0
    // return {
    //   next: () => {
    //     if (index < this.names.length) {
    //       return { done: false, value: this.names[index++] }
    //     } else {
    //       return { done: true, value: undefined }
    //     }
    //   },
    // }
  }
}
const p2 = new Person2([1, 2, 3])
for (const item of p2) {
  console.log(item)
}
