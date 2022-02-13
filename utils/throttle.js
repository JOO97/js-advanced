//节流
function throttle(fn, delay) {
  let flag = true //标记变量
  return function () {
    if (!flag) return
    flag = false
    setTimeout(() => {
      fn.apply(this, arguments)
      flag = true
    }, delay)
  }
}
function handler(e) {
  console.log('节流：', e.target.innerWidth, e.target.innerHeight)
}
window.addEventListener('resize', throttle(handler, 1000))
