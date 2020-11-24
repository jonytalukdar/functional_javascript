var name = 'Joney Talukdar';

function sayName() {
  console.log('Hello, ' + name);
}

// console.dir(sayName);
sayName();

function greetings(msg) {
  return function (name) {
    console.log(msg + ', ' + name + ' !');
  };
}

var hello = greetings('hello');
hello('Joney talukdar');
