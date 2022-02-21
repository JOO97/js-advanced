function throttle(fn, delay) {
  let flag = true
  return function () {
    if (!flag) return
    flag = false
    setTimeout(() => {
      fn.apply(this, arguments)
      flag = true
    }, delay)
  }
}

const fn = throttle(function () {
  console.log(1)
}, 1000)

window.addEventListener('resize', fn)
