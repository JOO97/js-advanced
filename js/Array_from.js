//Array_from
//Array.from(arrayLike[, mapFn[, thisArg]])
console.log(Array.from('xxx')) //[ 'x', 'x', 'x' ]
console.log(Array.from({ name: 'xxx' })) // []
console.log(Array.from(4)) //[]
console.log(Array.from([1, 2, 3], (n, index) => n + '-' + index)) //[ '1-0', '2-1', '3-2' ]
