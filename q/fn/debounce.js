function debounce(fn, delay) {
  let timer = null
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

const foo = debounce(function () {
  console.log(1)
}, 1000)
const [p] = document.getElementsByTagName('body')
const btn = document.createElement('button')
btn.innerText = 'btn'
p.appendChild(btn)
btn.addEventListener('click', foo)
