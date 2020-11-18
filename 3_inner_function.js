function outer() {
  console.log('i am outer function');
  function inner() {
    console.log('i am inner function');
  }
  inner();
}
outer();

function add(a, b) {
  function plus() {
    return a + b;
  }

  function sub() {
    return a - b;
  }

  function multi() {
    return a * b;
  }

  function divide() {
    return a / b;
  }

  return plus() + sub() + multi() + divide();
}

var result = add(12, 12);
console.log(result);
