//防抖
function debounce(fn, delay) {
  //1 定义变量保存定时器
  let timer = null
  return function () {
    //每次触发先清除上一次定时器
    clearTimeout(timer)
    //创建新的定时器
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

function handler() {
  console.log('handler')
}

window.addEventListener('resize', debounce(handler, 1000))
