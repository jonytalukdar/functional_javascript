function sayName(name) {
  return 'hello ' + name;
}

// 1. function can be stored in a variable

var hello = sayName;
// console.log(hello('joney talukdar'));
var anotherHello = hello;
console.log(anotherHello('joney talukdar'));

// 2. function can be stored in an Array

var arr = [1, 2, 3];
arr.push(sayName);
console.log(arr);

// 3.function can be stored as an object field or poperty

var person = {
  name: 'joney',
  sayName: sayName,
  print: function () {
    console.log('hi');
  },
};
console.log(person);

// 4 . we can create function as we nedded

var sum =
  10 +
  (function () {
    return 20;
  })();
console.log(sum);

// 5. we can pass function as arguments

function greetings(greet, name, cb) {
  var all = greet + ' ' + name;
  var result = cb(all);
  return result;
}

var greetAgain = greetings('hello', 'Joney talukdar', function (all) {
  return all;
});
console.log(greetAgain);

// 6. we can return function from another function

function base(b) {
  return function (n) {
    var result = 1;
    for (var i = 0; i < b; i++) {
      result *= n;
    }
    return result;
  };
}

// var power = base(2);
// var result = power(10);
var result = base(3)(5);
console.log(result);
