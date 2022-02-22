function foo() {
  console.log([...arguments])
  console.log(Array.prototype.concat.apply([], arguments))
  console.log(Array.prototype.slice.apply(arguments))
  console.log(Array.from(arguments))
}
foo(1, 2)
