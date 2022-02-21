//解析url

const url = 'https://pixso.com:8080?name=joo&age=18#hash'
function parseUrl(url) {
  const a = document.createElement('a')
  a.href = url
  console.dir(a)
  console.log([a])
  //   hash: '#hash'
  //   host: 'pixso.com:8080'
  //   hostname: 'pixso.com'
  //   href: 'https://pixso.com:8080/?name=joo&age=18#hash'
  //   search: "?name=joo&age=18"
  //
}

console.log(parseUrl(url))
